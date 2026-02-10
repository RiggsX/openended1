/**
 * OPENENDED Health Check — 项目健康检查
 *
 * - TypeScript 编译检查
 * - ESLint 检查
 * - 构建测试
 * - 依赖安全审计（npm audit）
 * - 输出健康报告
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

// ─── Types ───────────────────────────────────────────────────────────────────

interface CheckResult {
  name: string;
  status: "pass" | "fail" | "warn";
  message: string;
  duration: number;
}

interface HealthReport {
  timestamp: string;
  overall: "healthy" | "degraded" | "unhealthy";
  checks: CheckResult[];
  score: number;
}

// ─── Checks ──────────────────────────────────────────────────────────────────

function runCheck(name: string, fn: () => string): CheckResult {
  const start = Date.now();
  try {
    const message = fn();
    return {
      name,
      status: "pass",
      message,
      duration: Date.now() - start,
    };
  } catch (e: unknown) {
    const err = e as { status?: number; stdout?: string; stderr?: string; message?: string };
    return {
      name,
      status: "fail",
      message: err.stderr?.trim() || err.stdout?.trim() || err.message || "Unknown error",
      duration: Date.now() - start,
    };
  }
}

function checkTypeScript(): CheckResult {
  return runCheck("TypeScript 编译检查", () => {
    execSync("npx tsc --noEmit 2>&1", { encoding: "utf-8" });
    return "TypeScript 编译通过，无类型错误";
  });
}

function checkESLint(): CheckResult {
  return runCheck("ESLint 代码检查", () => {
    try {
      const output = execSync("npx eslint src/ --format json 2>/dev/null", {
        encoding: "utf-8",
      });
      const results = JSON.parse(output);
      let errors = 0;
      let warnings = 0;
      for (const result of results) {
        errors += result.errorCount;
        warnings += result.warningCount;
      }
      if (errors > 0) {
        throw { message: `${errors} 个错误, ${warnings} 个警告` };
      }
      return warnings > 0 ? `通过（${warnings} 个警告）` : "ESLint 检查通过，无问题";
    } catch (e: unknown) {
      const err = e as { stdout?: string; message?: string };
      if (err.stdout) {
        try {
          const results = JSON.parse(err.stdout);
          let errors = 0;
          let warnings = 0;
          for (const result of results) {
            errors += result.errorCount;
            warnings += result.warningCount;
          }
          if (errors > 0) {
            throw { message: `${errors} 个错误, ${warnings} 个警告` };
          }
          return warnings > 0 ? `通过（${warnings} 个警告）` : "ESLint 检查通过";
        } catch {
          // fall through
        }
      }
      throw e;
    }
  });
}

function checkBuild(): CheckResult {
  return runCheck("Next.js 构建测试", () => {
    execSync("npx next build 2>&1", {
      encoding: "utf-8",
      env: { ...process.env, NODE_ENV: "production" },
      timeout: 120_000,
    });
    return "构建成功";
  });
}

function checkAudit(): CheckResult {
  return runCheck("依赖安全审计", () => {
    try {
      const output = execSync("npm audit --json 2>/dev/null", {
        encoding: "utf-8",
      });
      const audit = JSON.parse(output);
      const vulns = audit.metadata?.vulnerabilities || {};
      const critical = vulns.critical || 0;
      const high = vulns.high || 0;
      const moderate = vulns.moderate || 0;
      const low = vulns.low || 0;
      const total = critical + high + moderate + low;

      if (critical > 0 || high > 0) {
        throw {
          message: `发现 ${total} 个漏洞 (严重: ${critical}, 高危: ${high}, 中危: ${moderate}, 低危: ${low})`,
        };
      }
      if (total > 0) {
        return `通过（${total} 个低风险漏洞）`;
      }
      return "无已知安全漏洞";
    } catch (e: unknown) {
      const err = e as { stdout?: string; message?: string };
      if (err.stdout) {
        try {
          const audit = JSON.parse(err.stdout);
          const vulns = audit.metadata?.vulnerabilities || {};
          const critical = vulns.critical || 0;
          const high = vulns.high || 0;
          const moderate = vulns.moderate || 0;
          const low = vulns.low || 0;
          const total = critical + high + moderate + low;

          if (critical > 0 || high > 0) {
            throw {
              message: `发现 ${total} 个漏洞 (严重: ${critical}, 高危: ${high}, 中危: ${moderate}, 低危: ${low})`,
            };
          }
          return total > 0 ? `通过（${total} 个低风险漏洞）` : "无已知安全漏洞";
        } catch {
          // fall through
        }
      }
      throw e;
    }
  });
}

function checkDiskUsage(): CheckResult {
  return runCheck("项目体积检查", () => {
    const nodeModulesSize = execSync("du -sh node_modules 2>/dev/null | cut -f1", {
      encoding: "utf-8",
    }).trim();
    const nextSize = fs.existsSync(".next")
      ? execSync("du -sh .next 2>/dev/null | cut -f1", { encoding: "utf-8" }).trim()
      : "N/A";
    return `node_modules: ${nodeModulesSize}, .next: ${nextSize}`;
  });
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.warn("\n🏥 OPENENDED 项目健康检查\n");
  console.warn("━".repeat(60));

  const checks: CheckResult[] = [];

  // Run checks sequentially (some are heavy)
  const checkFns = [
    { name: "TypeScript", fn: checkTypeScript },
    { name: "ESLint", fn: checkESLint },
    { name: "安全审计", fn: checkAudit },
    { name: "项目体积", fn: checkDiskUsage },
    { name: "构建测试", fn: checkBuild },
  ];

  for (const check of checkFns) {
    console.warn(`\n⏳ 正在检查: ${check.name}...`);
    const result = check.fn();
    checks.push(result);

    const icon = result.status === "pass" ? "✅" : result.status === "warn" ? "⚠️" : "❌";
    console.warn(`${icon} ${result.name}: ${result.message} (${result.duration}ms)`);
  }

  // Calculate score
  const passCount = checks.filter((c) => c.status === "pass").length;
  const score = Math.round((passCount / checks.length) * 100);

  let overall: "healthy" | "degraded" | "unhealthy";
  if (score >= 80) {
    overall = "healthy";
  } else if (score >= 50) {
    overall = "degraded";
  } else {
    overall = "unhealthy";
  }

  const report: HealthReport = {
    timestamp: new Date().toISOString(),
    overall,
    checks,
    score,
  };

  // Summary
  console.warn("\n" + "━".repeat(60));
  console.warn("\n📊 健康报告摘要:\n");

  const overallIcon = overall === "healthy" ? "💚" : overall === "degraded" ? "💛" : "❤️";
  console.warn(`  状态: ${overallIcon} ${overall.toUpperCase()}`);
  console.warn(`  得分: ${score}/100`);
  console.warn(`  通过: ${passCount}/${checks.length}`);
  console.warn(`  时间: ${report.timestamp}`);

  // Write report
  const reportPath = path.resolve(process.cwd(), "health-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.warn(`\n📝 详细报告已保存至: ${path.relative(process.cwd(), reportPath)}`);
  console.warn("\n" + "━".repeat(60) + "\n");

  // Exit code
  if (overall === "unhealthy") {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("健康检查失败:", err);
  process.exit(1);
});
