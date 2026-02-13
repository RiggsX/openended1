const { workflowData } = require('../src/lib/workflow-data.ts');

const tiers = {};
Object.values(workflowData).forEach(w => {
  tiers[w.tier] = (tiers[w.tier] || 0) + 1;
});

console.log('=== 工作流层级分布 ===\n');
console.log('Core:', tiers.Core || 0, '个');
console.log('Plus:', tiers.Plus || 0, '个');
console.log('Pro:', tiers.Pro || 0, '个');
console.log('\n总计:', Object.values(tiers).reduce((a,b) => a+b, 0), '个');

console.log('\n=== 层级权限设计 ===\n');
console.log('free (0级): 无法访问任何工作流');
console.log('core (1级): 只能访问 Core 工作流');
console.log('plus (2级): 可以访问 Core + Plus 工作流');
console.log('pro (3级):  可以访问 Core + Plus + Pro 工作流（全部）');

console.log('\n=== 你的当前状态 ===\n');
console.log('订阅层级: plus');
console.log('可访问: Core + Plus 工作流');
console.log('无法访问: Pro 工作流');
console.log('\n如果想访问所有工作流，需要升级到 Pro 或使用管理员账号');
