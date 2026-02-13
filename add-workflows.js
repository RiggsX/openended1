// 批量添加常用工作流
const newWorkflows = [
  {
    id: 36,
    title: "Meeting Management & Facilitation",
    titleZh: "会议管理与引导",
    category: "Productivity",
    tier: "Core",
    description: "Run effective meetings that drive decisions and action.",
    descriptionZh: "举办有效的会议，推动决策和行动。",
    steps: [
      {
        title: "Meeting Planning & Agenda",
        titleZh: "会议规划与议程",
        description: "Create structured agendas and prepare for productive meetings.",
        descriptionZh: "创建结构化议程并为高效会议做准备。",
        prompt: `I need to run more effective meetings that don't waste time.

**Meeting Context:**
- Meeting type: [Team sync, brainstorm, decision-making, status update, client call]
- Participants: [Number and roles]
- Duration: [How long]
- Frequency: [One-time or recurring]
- Current issues: [What's not working]

**Please create:**
1. Meeting agenda template
2. Pre-meeting preparation checklist
3. Facilitation techniques
4. Decision-making frameworks
5. Action item tracking system
6. Follow-up email template

**Output:** Complete meeting management system with templates and best practices.`,
        promptZh: `我需要举办更有效的会议，不浪费时间。

**会议背景：**
- 会议类型：[团队同步、头脑风暴、决策、状态更新、客户电话]
- 参与者：[数量和角色]
- 时长：[多长时间]
- 频率：[一次性或定期]
- 当前问题：[什么不起作用]

**请创建：**
1. 会议议程模板
2. 会前准备清单
3. 引导技巧
4. 决策框架
5. 行动项跟踪系统
6. 后续邮件模板

**输出：** 完整的会议管理系统，包含模板和最佳实践。`,
      },
    ],
  },
  {
    id: 37,
    title: "Project Management Fundamentals",
    titleZh: "项目管理基础",
    category: "Operations",
    tier: "Core",
    description: "Plan, execute, and deliver projects on time and within budget.",
    descriptionZh: "按时按预算规划、执行和交付项目。",
    steps: [
      {
        title: "Project Planning & Execution",
        titleZh: "项目规划与执行",
        description: "Create project plans with timelines, resources, and risk management.",
        descriptionZh: "创建包含时间表、资源和风险管理的项目计划。",
        prompt: `I need to manage a project from start to finish.

**Project Details:**
- Project goal: [What you're trying to achieve]
- Timeline: [Start and end dates]
- Budget: [If applicable]
- Team size: [Number of people]
- Stakeholders: [Who needs to be involved]
- Constraints: [Limitations and challenges]

**Please create:**
1. Project charter and scope
2. Work breakdown structure (WBS)
3. Timeline with milestones
4. Resource allocation plan
5. Risk management matrix
6. Communication plan
7. Progress tracking system

**Output:** Complete project management plan with templates and tracking tools.`,
        promptZh: `我需要从头到尾管理一个项目。

**项目详情：**
- 项目目标：[你想实现什么]
- 时间表：[开始和结束日期]
- 预算：[如适用]
- 团队规模：[人数]
- 利益相关者：[谁需要参与]
- 约束：[限制和挑战]

**请创建：**
1. 项目章程和范围
2. 工作分解结构（WBS）
3. 带里程碑的时间表
4. 资源分配计划
5. 风险管理矩阵
6. 沟通计划
7. 进度跟踪系统

**输出：** 完整的项目管理计划，包含模板和跟踪工具。`,
      },
    ],
  },
  {
    id: 38,
    title: "Personal Budget & Financial Planning",
    titleZh: "个人预算与财务规划",
    category: "Finance",
    tier: "Core",
    description: "Create a realistic budget and financial plan to achieve your money goals.",
    descriptionZh: "创建现实的预算和财务计划以实现你的财务目标。",
    steps: [
      {
        title: "Budget Creation & Money Management",
        titleZh: "预算创建与资金管理",
        description: "Build a sustainable budget and track spending effectively.",
        descriptionZh: "建立可持续的预算并有效跟踪支出。",
        prompt: `I need to get my finances under control and start saving.

**My Financial Situation:**
- Monthly income: [After-tax amount]
- Fixed expenses: [Rent, utilities, insurance, etc.]
- Variable expenses: [Food, entertainment, etc.]
- Debt: [Credit cards, loans, amounts]
- Savings: [Current amount]
- Financial goals: [What you want to achieve]

**My Challenges:**
- Spending habits: [Where money goes]
- Financial stress: [Main concerns]
- Knowledge level: [Beginner, intermediate, advanced]

**Please create:**
1. Monthly budget template (50/30/20 or custom)
2. Expense tracking system
3. Debt payoff strategy
4. Emergency fund plan
5. Savings goals roadmap
6. Money mindset tips

**Output:** Complete personal finance system with budget, tracking tools, and action plan.`,
        promptZh: `我需要控制我的财务并开始储蓄。

**我的财务状况：**
- 月收入：[税后金额]
- 固定支出：[租金、水电、保险等]
- 可变支出：[食物、娱乐等]
- 债务：[信用卡、贷款、金额]
- 储蓄：[当前金额]
- 财务目标：[你想实现什么]

**我的挑战：**
- 消费习惯：[钱去哪了]
- 财务压力：[主要担忧]
- 知识水平：[初学者、中级、高级]

**请创建：**
1. 月度预算模板（50/30/20 或自定义）
2. 支出跟踪系统
3. 债务偿还策略
4. 应急基金计划
5. 储蓄目标路线图
6. 金钱心态提示

**输出：** 完整的个人财务系统，包含预算、跟踪工具和行动计划。`,
      },
    ],
  },
  {
    id: 39,
    title: "Fitness & Nutrition Plan",
    titleZh: "健身与营养计划",
    category: "Health",
    tier: "Core",
    description: "Build sustainable fitness and nutrition habits for long-term health.",
    descriptionZh: "建立可持续的健身和营养习惯以实现长期健康。",
    steps: [
      {
        title: "Personalized Fitness & Meal Planning",
        titleZh: "个性化健身与膳食计划",
        description: "Create workout routines and meal plans tailored to your goals.",
        descriptionZh: "创建适合你目标的锻炼例程和膳食计划。",
        prompt: `I want to get healthier through fitness and better nutrition.

**My Current State:**
- Age and gender: [For appropriate recommendations]
- Fitness level: [Beginner, intermediate, advanced]
- Health goals: [Lose weight, build muscle, general fitness, energy]
- Current weight/target: [If comfortable sharing]
- Dietary restrictions: [Allergies, preferences, vegetarian, etc.]
- Available time: [Hours per week for exercise]
- Equipment access: [Gym, home equipment, bodyweight only]

**My Challenges:**
- Biggest obstacle: [Time, motivation, knowledge, injuries]
- Past attempts: [What worked/didn't work]
- Food preferences: [What you like/dislike]

**Please create:**
1. 12-week fitness program (progressive)
2. Weekly workout schedule
3. Exercise library with form tips
4. Meal plan template (breakfast, lunch, dinner, snacks)
5. Grocery shopping list
6. Progress tracking system
7. Habit formation strategy

**Output:** Complete fitness and nutrition plan with workouts, meals, and tracking tools.`,
        promptZh: `我想通过健身和更好的营养变得更健康。

**我的当前状态：**
- 年龄和性别：[用于适当的建议]
- 健身水平：[初学者、中级、高级]
- 健康目标：[减肥、增肌、一般健身、能量]
- 当前体重/目标：[如果愿意分享]
- 饮食限制：[过敏、偏好、素食等]
- 可用时间：[每周锻炼小时数]
- 设备访问：[健身房、家庭设备、仅体重]

**我的挑战：**
- 最大障碍：[时间、动力、知识、伤害]
- 过去的尝试：[什么有效/无效]
- 食物偏好：[你喜欢/不喜欢什么]

**请创建：**
1. 12 周健身计划（渐进式）
2. 每周锻炼时间表
3. 带动作提示的练习库
4. 膳食计划模板（早餐、午餐、晚餐、零食）
5. 杂货购物清单
6. 进度跟踪系统
7. 习惯养成策略

**输出：** 完整的健身和营养计划，包含锻炼、膳食和跟踪工具。`,
      },
    ],
  },
  {
    id: 40,
    title: "Writing Improvement System",
    titleZh: "写作提升系统",
    category: "Communication",
    tier: "Core",
    description: "Improve your writing skills for any format - emails, articles, reports, or creative work.",
    descriptionZh: "提升任何格式的写作技能 - 电子邮件、文章、报告或创意作品。",
    steps: [
      {
        title: "Writing Skills Development",
        titleZh: "写作技能发展",
        description: "Master writing fundamentals and develop your unique voice.",
        descriptionZh: "掌握写作基础并发展你独特的声音。",
        prompt: `I want to become a better writer.

**My Writing Context:**
- Writing type: [Business emails, blog posts, reports, creative, academic]
- Current level: [Beginner, intermediate, advanced]
- Main challenges: [Clarity, structure, grammar, creativity, speed]
- Writing frequency: [Daily, weekly, occasionally]
- Goals: [Why you want to improve]

**My Needs:**
- Specific areas to improve: [List 3-5]
- Audience: [Who you write for]
- Tone preference: [Professional, casual, persuasive, etc.]

**Please create:**
1. Writing fundamentals checklist
2. Structure templates for different formats
3. Editing and revision process
4. Grammar and style guide
5. Daily writing exercises
6. Feedback and improvement system
7. Writer's block solutions

**Output:** Complete writing improvement program with exercises, templates, and techniques.`,
        promptZh: `我想成为更好的作家。

**我的写作背景：**
- 写作类型：[商务邮件、博客文章、报告、创意、学术]
- 当前水平：[初学者、中级、高级]
- 主要挑战：[清晰度、结构、语法、创造力、速度]
- 写作频率：[每天、每周、偶尔]
- 目标：[你为什么想提高]

**我的需求：**
- 要改进的具体领域：[列出 3-5 个]
- 受众：[你为谁写作]
- 语气偏好：[专业、随意、有说服力等]

**请创建：**
1. 写作基础清单
2. 不同格式的结构模板
3. 编辑和修订过程
4. 语法和风格指南
5. 每日写作练习
6. 反馈和改进系统
7. 写作障碍解决方案

**输出：** 完整的写作提升计划，包含练习、模板和技巧。`,
      },
    ],
  },
];

// 输出为 JSON，方便后续处理
console.log(JSON.stringify(newWorkflows, null, 2));
