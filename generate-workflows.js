// 批量生成 55 个常用工作流（36-90）
const workflows = [];

const workflowTemplates = [
  // 职业发展 (36-45)
  { id: 36, title: "Career Change Strategy", titleZh: "职业转换策略", category: "Career", tier: "Core" },
  { id: 37, title: "Networking & Relationship Building", titleZh: "人脉拓展与关系建立", category: "Career", tier: "Core" },
  { id: 38, title: "Salary Negotiation Mastery", titleZh: "薪资谈判精通", category: "Career", tier: "Core" },
  { id: 39, title: "Personal Brand Building", titleZh: "个人品牌建设", category: "Marketing", tier: "Core" },
  { id: 40, title: "Portfolio & Case Study Creation", titleZh: "作品集与案例研究创建", category: "Career", tier: "Core" },
  { id: 41, title: "Freelance Client Acquisition", titleZh: "自由职业客户获取", category: "Business", tier: "Plus" },
  { id: 42, title: "Side Hustle Launch Plan", titleZh: "副业启动计划", category: "Business", tier: "Core" },
  { id: 43, title: "Remote Work Optimization", titleZh: "远程工作优化", category: "Productivity", tier: "Core" },
  { id: 44, title: "Professional Development Plan", titleZh: "职业发展计划", category: "Career", tier: "Core" },
  { id: 45, title: "Leadership Skills Development", titleZh: "领导力技能发展", category: "Career", tier: "Plus" },
  
  // 内容创作 (46-55)
  { id: 46, title: "Blog Writing System", titleZh: "博客写作系统", category: "Content", tier: "Core" },
  { id: 47, title: "YouTube Channel Strategy", titleZh: "YouTube 频道策略", category: "Content", tier: "Plus" },
  { id: 48, title: "Newsletter Growth System", titleZh: "Newsletter 增长系统", category: "Marketing", tier: "Plus" },
  { id: 49, title: "Instagram Content Strategy", titleZh: "Instagram 内容策略", category: "Marketing", tier: "Core" },
  { id: 50, title: "TikTok Viral Content Formula", titleZh: "TikTok 爆款内容公式", category: "Marketing", tier: "Core" },
  { id: 51, title: "Copywriting Mastery", titleZh: "文案写作精通", category: "Content", tier: "Plus" },
  { id: 52, title: "Storytelling Framework", titleZh: "故事叙述框架", category: "Content", tier: "Core" },
  { id: 53, title: "Content Calendar System", titleZh: "内容日历系统", category: "Content", tier: "Core" },
  { id: 54, title: "UGC Content Strategy", titleZh: "UGC 内容策略", category: "Marketing", tier: "Plus" },
  { id: 55, title: "Viral Marketing Playbook", titleZh: "病毒式营销手册", category: "Marketing", tier: "Pro" },
  
  // 商业运营 (56-65)
  { id: 56, title: "Customer Service Excellence", titleZh: "卓越客户服务", category: "Operations", tier: "Core" },
  { id: 57, title: "Sales Process Optimization", titleZh: "销售流程优化", category: "Sales", tier: "Plus" },
  { id: 58, title: "Cold Email Outreach", titleZh: "冷邮件外联", category: "Sales", tier: "Core" },
  { id: 59, title: "Client Proposal Writing", titleZh: "客户提案撰写", category: "Business", tier: "Core" },
  { id: 60, title: "Contract Negotiation Guide", titleZh: "合同谈判指南", category: "Business", tier: "Plus" },
  { id: 61, title: "Team Building & Culture", titleZh: "团队建设与文化", category: "Operations", tier: "Plus" },
  { id: 62, title: "Hiring & Recruitment System", titleZh: "招聘与录用系统", category: "Operations", tier: "Pro" },
  { id: 63, title: "Performance Review Framework", titleZh: "绩效评估框架", category: "Operations", tier: "Plus" },
  { id: 64, title: "SOP Documentation System", titleZh: "SOP 文档系统", category: "Operations", tier: "Core" },
  { id: 65, title: "Business Process Automation", titleZh: "业务流程自动化", category: "Operations", tier: "Pro" },
  
  // 个人成长 (66-75)
  { id: 66, title: "Goal Setting & Achievement", titleZh: "目标设定与实现", category: "Productivity", tier: "Core" },
  { id: 67, title: "Habit Formation System", titleZh: "习惯养成系统", category: "Productivity", tier: "Core" },
  { id: 68, title: "Morning Routine Optimization", titleZh: "晨间例程优化", category: "Productivity", tier: "Core" },
  { id: 69, title: "Focus & Deep Work Mastery", titleZh: "专注与深度工作精通", category: "Productivity", tier: "Core" },
  { id: 70, title: "Stress Management System", titleZh: "压力管理系统", category: "Health", tier: "Core" },
  { id: 71, title: "Sleep Optimization Guide", titleZh: "睡眠优化指南", category: "Health", tier: "Core" },
  { id: 72, title: "Mindfulness & Meditation", titleZh: "正念与冥想", category: "Health", tier: "Core" },
  { id: 73, title: "Reading & Learning System", titleZh: "阅读与学习系统", category: "Education", tier: "Core" },
  { id: 74, title: "Note-Taking & Knowledge Management", titleZh: "笔记与知识管理", category: "Productivity", tier: "Core" },
  { id: 75, title: "Decision-Making Framework", titleZh: "决策制定框架", category: "Productivity", tier: "Plus" },
  
  // 营销与增长 (76-85)
  { id: 76, title: "Landing Page Optimization", titleZh: "落地页优化", category: "Marketing", tier: "Plus" },
  { id: 77, title: "A/B Testing Strategy", titleZh: "A/B 测试策略", category: "Marketing", tier: "Pro" },
  { id: 78, title: "Referral Program Design", titleZh: "推荐计划设计", category: "Marketing", tier: "Plus" },
  { id: 79, title: "Customer Feedback System", titleZh: "客户反馈系统", category: "Operations", tier: "Core" },
  { id: 80, title: "Brand Positioning Strategy", titleZh: "品牌定位策略", category: "Marketing", tier: "Plus" },
  { id: 81, title: "Competitive Analysis Framework", titleZh: "竞争分析框架", category: "Strategy", tier: "Core" },
  { id: 82, title: "Market Entry Strategy", titleZh: "市场进入策略", category: "Strategy", tier: "Pro" },
  { id: 83, title: "Pricing Psychology & Strategy", titleZh: "定价心理学与策略", category: "Strategy", tier: "Plus" },
  { id: 84, title: "Customer Journey Mapping", titleZh: "客户旅程地图", category: "Marketing", tier: "Plus" },
  { id: 85, title: "Retention & Churn Reduction", titleZh: "留存与流失减少", category: "Operations", tier: "Pro" },
  
  // 高级技能 (86-90)
  { id: 86, title: "Public Speaking Mastery", titleZh: "公开演讲精通", category: "Communication", tier: "Plus" },
  { id: 87, title: "Conflict Resolution Guide", titleZh: "冲突解决指南", category: "Communication", tier: "Core" },
  { id: 88, title: "Negotiation Tactics", titleZh: "谈判策略", category: "Business", tier: "Plus" },
  { id: 89, title: "Critical Thinking Development", titleZh: "批判性思维发展", category: "Education", tier: "Plus" },
  { id: 90, title: "Problem-Solving Framework", titleZh: "问题解决框架", category: "Productivity", tier: "Core" },
];

// 为每个工作流生成完整结构
workflowTemplates.forEach(wf => {
  workflows.push(`  "${wf.id}": {
    id: ${wf.id},
    title: "${wf.title}",
    titleZh: "${wf.titleZh}",
    category: "${wf.category}",
    tier: "${wf.tier}",
    description: "A comprehensive workflow to master ${wf.title.toLowerCase()}.",
    descriptionZh: "掌握${wf.titleZh}的综合工作流。",
    steps: [
      {
        title: "Strategy & Planning",
        titleZh: "策略与规划",
        description: "Create a strategic plan and actionable roadmap.",
        descriptionZh: "创建战略计划和可行的路线图。",
        prompt: \`I need help with ${wf.title.toLowerCase()}.

**My Context:**
- Current situation: [Describe where you are now]
- Goals: [What you want to achieve]
- Timeline: [How long you have]
- Resources: [What you have available]
- Constraints: [Limitations or challenges]

**Please create:**
1. Strategic framework
2. Step-by-step action plan
3. Key metrics to track
4. Common pitfalls to avoid
5. Success indicators
6. Implementation timeline

**Output:** Complete ${wf.title.toLowerCase()} system with templates and guides.\`,
        promptZh: \`我需要${wf.titleZh}方面的帮助。

**我的背景：**
- 当前情况：[描述你现在的状态]
- 目标：[你想实现什么]
- 时间表：[你有多长时间]
- 资源：[你有什么可用的]
- 约束：[限制或挑战]

**请创建：**
1. 战略框架
2. 分步行动计划
3. 要跟踪的关键指标
4. 要避免的常见陷阱
5. 成功指标
6. 实施时间表

**输出：** 完整的${wf.titleZh}系统，包含模板和指南。\`,
      },
    ],
  },`);
});

console.log(workflows.join('\n'));
