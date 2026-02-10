/**
 * OPENENDED Auto Fix — 自动修复
 *
 * 自动修复可安全修复的问题：
 * - 移除未使用的 import
 * - 移除 console.log
 * - 添加缺失的 error handling（空 catch 块）
 * - 格式化代码（via Prettier）
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FixResult {
  file: string;
  fixes: string[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const SRC_DIR = path.resolve(process.cwd(), "src");

function getAllSourceFiles(dir: string, exts = [".ts", ".tsx"]): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", "__tests__", "auto-fix"].includes(entry.name)) continue;
      results.push(...getAllSourceFiles(fullPath, exts));
    } else if (exts.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

function relativePath(filePath: string): string {
  return path.relative(process.cwd(), filePath);
}

// ─── Fixers ──────────────────────────────────────────────────────────────────

function removeConsoleLog(content: string): { content: string; count: number } {
  const lines = content.split("\n");
  let count = 0;
  const newLines = lines.filter((line) => {
    if (/\bconsole\.log\s*\(/.test(line) && !line.trim().startsWith("//")) {
      count++;
      return false;
    }
    return true;
  });
  return { content: newLines.join("\n"), count };
}

function fixEmptyCatch(content: string): { content: string; count: number } {
  let count = 0;

  // Single-line empty catch
  let result = content.replace(/catch\s*\((\w+)\)\s*\{\s*\}/g, (_match, errVar) => {
    count++;
    return `catch (${errVar}) {\n    console.error("Unhandled error:", ${errVar});\n  }`;
  });

  // catch without variable
  result = result.replace(/catch\s*\{\s*\}/g, () => {
    count++;
    return `catch (error) {\n    console.error("Unhandled error:", error);\n  }`;
  });

  return { content: result, count };
}

function removeUnusedImports(content: string): { content: string; count: number } {
  const lines = content.split("\n");
  let count = 0;

  // Find all import lines with named imports
  const importLineIndices: number[] = [];
  lines.forEach((line, idx) => {
    if (line.trim().startsWith("import ")) {
      importLineIndices.push(idx);
    }
  });

  const nonImportContent = lines.filter((l) => !l.trim().startsWith("import ")).join("\n");

  const linesToRemove = new Set<number>();

  for (const idx of importLineIndices) {
    const line = lines[idx];

    // Extract default import
    const defaultMatch = line.match(/import\s+(\w+)\s+from/);
    // Extract named imports
    const namedMatch = line.match(/import\s+(?:type\s+)?\{([^}]+)\}\s+from/);

    if (defaultMatch && !namedMatch) {
      const name = defaultMatch[1];
      if (name === "type") continue;
      const regex = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
      const usages = nonImportContent.match(regex);
      if (!usages || usages.length === 0) {
        linesToRemove.add(idx);
        count++;
      }
    }

    if (namedMatch) {
      const names = namedMatch[1]
        .split(",")
        .map((s) =>
          s
            .trim()
            .split(/\s+as\s+/)
            .pop()!
            .trim(),
        )
        .filter(Boolean);

      const unusedNames: string[] = [];
      for (const name of names) {
        if (name === "type") continue;
        const regex = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
        const usages = nonImportContent.match(regex);
        if (!usages || usages.length === 0) {
          unusedNames.push(name);
        }
      }

      if (unusedNames.length === names.length && !defaultMatch) {
        // All named imports unused — remove entire line
        linesToRemove.add(idx);
        count += unusedNames.length;
      }
      // If only some are unused, we leave it for ESLint --fix to handle
    }
  }

  const newLines = lines.filter((_, idx) => !linesToRemove.has(idx));
  return { content: newLines.join("\n"), count };
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.warn("\n🔧 OPENENDED 自动修复\n");
  console.warn("━".repeat(60));

  const files = getAllSourceFiles(SRC_DIR);
  const results: FixResult[] = [];
  let totalFixes = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, "utf-8");
    const fixes: string[] = [];

    // 1. Remove console.log
    const consoleResult = removeConsoleLog(content);
    if (consoleResult.count > 0) {
      content = consoleResult.content;
      fixes.push(`移除 ${consoleResult.count} 个 console.log`);
    }

    // 2. Fix empty catch blocks
    const catchResult = fixEmptyCatch(content);
    if (catchResult.count > 0) {
      content = catchResult.content;
      fixes.push(`修复 ${catchResult.count} 个空 catch 块`);
    }

    // 3. Remove unused imports
    const importResult = removeUnusedImports(content);
    if (importResult.count > 0) {
      content = importResult.content;
      fixes.push(`移除 ${importResult.count} 个未使用的 import`);
    }

    if (fixes.length > 0) {
      fs.writeFileSync(file, content, "utf-8");
      results.push({ file: relativePath(file), fixes });
      totalFixes += fixes.length;
    }
  }

  // 4. Run ESLint --fix
  console.warn("\n🔧 运行 ESLint 自动修复...");
  try {
    execSync("npx eslint src/ --fix", { stdio: "pipe" });
    console.warn("  ✅ ESLint 修复完成");
  } catch {
    console.warn("  ⚠️ ESLint 修复完成（部分问题需手动处理）");
  }

  // 5. Run Prettier
  console.warn("\n🎨 运行 Prettier 格式化...");
  try {
    execSync('npx prettier --write "src/**/*.{ts,tsx}" --log-level warn', {
      stdio: "pipe",
    });
    console.warn("  ✅ 代码格式化完成");
  } catch {
    console.warn("  ⚠️ 格式化部分失败");
  }

  // Report
  console.warn("\n" + "━".repeat(60));
  if (results.length === 0) {
    console.warn("\n✅ 未发现需要自动修复的问题！\n");
  } else {
    console.warn("\n📋 修复报告:\n");
    for (const result of results) {
      console.warn(`  📄 ${result.file}`);
      for (const fix of result.fixes) {
        console.warn(`     ✅ ${fix}`);
      }
    }
    console.warn(`\n  共修复 ${totalFixes} 个问题（${results.length} 个文件）`);
  }
  console.warn("\n" + "━".repeat(60) + "\n");
}

main().catch((err) => {
  console.error("自动修复失败:", err);
  process.exit(1);
});
