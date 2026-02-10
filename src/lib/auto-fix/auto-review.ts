/**
 * OPENENDED Auto Review — 自动代码审查
 *
 * 扫描项目中的常见问题并输出报告：
 * - 未使用的 import
 * - 缺失的 TypeScript 类型（any 使用）
 * - 未处理的 Promise
 * - console.log 残留
 * - 空的 catch 块
 * - 重复的 CSS 类名
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Issue {
  file: string;
  line: number;
  type: string;
  message: string;
  severity: "error" | "warning" | "info";
}

interface ReviewReport {
  timestamp: string;
  totalFiles: number;
  totalIssues: number;
  issues: Issue[];
  summary: Record<string, number>;
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

// ─── Scanners ────────────────────────────────────────────────────────────────

function scanConsoleLog(filePath: string, content: string): Issue[] {
  const issues: Issue[] = [];
  const lines = content.split("\n");
  lines.forEach((line, idx) => {
    // Match console.log but not console.warn/error
    if (/\bconsole\.log\s*\(/.test(line) && !line.trim().startsWith("//")) {
      issues.push({
        file: relativePath(filePath),
        line: idx + 1,
        type: "console-log",
        message: "console.log 残留 — 生产代码中不应包含 console.log",
        severity: "warning",
      });
    }
  });
  return issues;
}

function scanEmptyCatch(filePath: string, content: string): Issue[] {
  const issues: Issue[] = [];
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // catch (...) { } or catch { }
    if (/catch\s*(\([^)]*\))?\s*\{\s*\}/.test(line)) {
      issues.push({
        file: relativePath(filePath),
        line: i + 1,
        type: "empty-catch",
        message: "空的 catch 块 — 应至少记录错误信息",
        severity: "error",
      });
    }
    // Multi-line empty catch
    if (/catch\s*(\([^)]*\))?\s*\{\s*$/.test(line)) {
      const nextLine = lines[i + 1]?.trim();
      if (nextLine === "}") {
        issues.push({
          file: relativePath(filePath),
          line: i + 1,
          type: "empty-catch",
          message: "空的 catch 块 — 应至少记录错误信息",
          severity: "error",
        });
      }
    }
  }
  return issues;
}

function scanExplicitAny(filePath: string, content: string): Issue[] {
  const issues: Issue[] = [];
  const lines = content.split("\n");
  lines.forEach((line, idx) => {
    if (line.trim().startsWith("//") || line.trim().startsWith("*")) return;
    // Match `: any`, `as any`, `<any>`
    const anyMatches = line.match(/:\s*any\b|as\s+any\b|<any>/g);
    if (anyMatches) {
      issues.push({
        file: relativePath(filePath),
        line: idx + 1,
        type: "explicit-any",
        message: `使用了 any 类型 (${anyMatches.length} 处) — 应使用具体类型`,
        severity: "warning",
      });
    }
  });
  return issues;
}

function scanUnhandledPromise(filePath: string, content: string): Issue[] {
  const issues: Issue[] = [];
  const lines = content.split("\n");
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("//")) return;
    // Detect floating promises: function calls ending with ) but no await/return/void/.then/.catch
    if (
      /^\w+.*\)\s*;?\s*$/.test(trimmed) &&
      !trimmed.startsWith("await ") &&
      !trimmed.startsWith("return ") &&
      !trimmed.startsWith("void ") &&
      !trimmed.includes(".then(") &&
      !trimmed.includes(".catch(") &&
      /Async|fetch|Promise/.test(trimmed)
    ) {
      issues.push({
        file: relativePath(filePath),
        line: idx + 1,
        type: "unhandled-promise",
        message: "可能存在未处理的 Promise — 考虑添加 await 或 .catch()",
        severity: "warning",
      });
    }
  });
  return issues;
}

function scanDuplicateClasses(filePath: string, content: string): Issue[] {
  const issues: Issue[] = [];
  const lines = content.split("\n");
  const classRegex = /className\s*=\s*["'`]([^"'`]+)["'`]/g;

  lines.forEach((line, idx) => {
    let match;
    while ((match = classRegex.exec(line)) !== null) {
      const classes = match[1].split(/\s+/).filter(Boolean);
      const seen = new Set<string>();
      const duplicates: string[] = [];
      for (const cls of classes) {
        if (seen.has(cls)) {
          duplicates.push(cls);
        }
        seen.add(cls);
      }
      if (duplicates.length > 0) {
        issues.push({
          file: relativePath(filePath),
          line: idx + 1,
          type: "duplicate-class",
          message: `重复的 CSS 类名: ${duplicates.join(", ")}`,
          severity: "warning",
        });
      }
    }
  });
  return issues;
}

function scanUnusedImports(filePath: string, content: string): Issue[] {
  const issues: Issue[] = [];
  const lines = content.split("\n");

  // Extract all named imports
  const importRegex = /import\s+(?:type\s+)?(?:\{([^}]+)\}|(\w+))(?:\s*,\s*\{([^}]+)\})?\s+from/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importLine = content.substring(0, match.index).split("\n").length - 1;
    const fullImportLine = lines[importLine];

    // Skip pure type imports — they are erased at compile time and may only appear in type positions
    if (fullImportLine && /^import\s+type\s+/.test(fullImportLine.trim())) continue;

    const namedImports = [match[1], match[3]]
      .filter(Boolean)
      .flatMap((s) => s.split(","))
      .map((s) => s.trim())
      // Remove inline `type` keyword (e.g., `type ClassValue` → `ClassValue`)
      .map((s) => s.replace(/^type\s+/, ""))
      .map((s) =>
        s
          .split(/\s+as\s+/)
          .pop()!
          .trim(),
      )
      .filter(Boolean);

    const defaultImport = match[2];

    const allImports = [...namedImports];
    if (defaultImport && defaultImport !== "type") {
      allImports.push(defaultImport);
    }

    for (const imp of allImports) {
      // Count occurrences in the file (excluding import lines)
      const nonImportContent = lines.filter((l) => !l.trim().startsWith("import ")).join("\n");

      const usageRegex = new RegExp(`\\b${imp.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
      const usages = nonImportContent.match(usageRegex);

      if (!usages || usages.length === 0) {
        // Find the line number of this import
        const importLine = lines.findIndex((l) => l.includes(imp) && l.trim().startsWith("import"));
        issues.push({
          file: relativePath(filePath),
          line: importLine + 1,
          type: "unused-import",
          message: `未使用的 import: "${imp}"`,
          severity: "warning",
        });
      }
    }
  }
  return issues;
}

// ─── Main ────────────────────────────────────────────────────────────────────

export async function runReview(): Promise<ReviewReport> {
  const files = getAllSourceFiles(SRC_DIR);
  const allIssues: Issue[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    allIssues.push(
      ...scanConsoleLog(file, content),
      ...scanEmptyCatch(file, content),
      ...scanExplicitAny(file, content),
      ...scanUnhandledPromise(file, content),
      ...scanDuplicateClasses(file, content),
      ...scanUnusedImports(file, content),
    );
  }

  // Also run ESLint for additional issues
  let eslintIssueCount = 0;
  try {
    execSync("npx eslint src/ --format json 2>/dev/null", { encoding: "utf-8" });
  } catch (e: unknown) {
    const err = e as { stdout?: string };
    if (err.stdout) {
      try {
        const eslintResults = JSON.parse(err.stdout);
        for (const result of eslintResults) {
          eslintIssueCount += result.errorCount + result.warningCount;
        }
      } catch {
        // ESLint output parsing failed, skip
      }
    }
  }

  const summary: Record<string, number> = {};
  for (const issue of allIssues) {
    summary[issue.type] = (summary[issue.type] || 0) + 1;
  }
  if (eslintIssueCount > 0) {
    summary["eslint-issues"] = eslintIssueCount;
  }

  const report: ReviewReport = {
    timestamp: new Date().toISOString(),
    totalFiles: files.length,
    totalIssues: allIssues.length + eslintIssueCount,
    issues: allIssues,
    summary,
  };

  return report;
}

// ─── CLI Entry ───────────────────────────────────────────────────────────────

async function main() {
  console.warn("\n🔍 OPENENDED 自动代码审查\n");
  console.warn("━".repeat(60));

  const report = await runReview();

  if (report.issues.length === 0) {
    console.warn("\n✅ 未发现问题！代码质量良好。\n");
  } else {
    // Group by file
    const byFile = new Map<string, Issue[]>();
    for (const issue of report.issues) {
      const existing = byFile.get(issue.file) || [];
      existing.push(issue);
      byFile.set(issue.file, existing);
    }

    for (const [file, issues] of byFile) {
      console.warn(`\n📄 ${file}`);
      for (const issue of issues) {
        const icon = issue.severity === "error" ? "❌" : issue.severity === "warning" ? "⚠️" : "ℹ️";
        console.warn(`  ${icon} L${issue.line}: [${issue.type}] ${issue.message}`);
      }
    }
  }

  console.warn("\n" + "━".repeat(60));
  console.warn("📊 审查摘要:");
  console.warn(`  扫描文件数: ${report.totalFiles}`);
  console.warn(`  发现问题数: ${report.totalIssues}`);
  if (Object.keys(report.summary).length > 0) {
    console.warn("  问题分类:");
    for (const [type, count] of Object.entries(report.summary)) {
      console.warn(`    - ${type}: ${count}`);
    }
  }
  console.warn(`  时间: ${report.timestamp}`);
  console.warn("━".repeat(60) + "\n");

  // Write report to file
  const reportPath = path.resolve(process.cwd(), "review-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.warn(`📝 详细报告已保存至: ${relativePath(reportPath)}\n`);

  // Exit with error code if there are errors
  const errorCount = report.issues.filter((i) => i.severity === "error").length;
  if (errorCount > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("审查失败:", err);
  process.exit(1);
});
