// 高质量工作流数据库 - 由 Claude Opus 精心设计
export const workflowData: Record<
  string,
  {
    id: number;
    title: string;
    titleZh: string;
    category: string;
    tier: string;
    description: string;
    descriptionZh: string;
    steps: Array<{
      title: string;
      titleZh: string;
      description: string;
      descriptionZh: string;
      prompt: string;
      promptZh: string;
    }>;
  }
> = {
  "1": {
    id: 1,
    title: "Complete Content Strategy Framework",
    titleZh: "完整内容策略框架",
    category: "Content",
    tier: "Core",
    description:
      "Build a comprehensive content strategy from audience research to performance optimization. Perfect for creators, marketers, and businesses starting their content journey.",
    descriptionZh:
      "从受众研究到绩效优化，构建全面的内容策略。适合创作者、营销人员和开始内容之旅的企业。",
    steps: [
      {
        title: "Deep Audience Research & Persona Development",
        titleZh: "深度受众研究与画像开发",
        description:
          "Create detailed audience personas based on demographics, psychographics, pain points, and content consumption habits.",
        descriptionZh: "基于人口统计、心理特征、痛点和内容消费习惯创建详细的受众画像。",
        prompt: `I need to deeply understand my target audience to create content that truly resonates.

**My Business Context:**
- Industry/Niche: [e.g., B2B SaaS, fitness coaching, sustainable fashion]
- Product/Service: [What you offer and its unique value]
- Current audience size: [Number of followers/subscribers, or "starting from zero"]
- Geographic focus: [Countries/regions you target]
- Business stage: [Startup, growth, established]

**What I Know About My Audience (if anything):**
- Demographics: [Age, gender, location, income level, education]
- Current pain points they express: [What problems they talk about]
- Where they hang out online: [Platforms, communities, forums]
- Content they currently consume: [Competitors, influencers, media they follow]

**My Goals:**
- Primary goal: [e.g., build brand awareness, generate leads, drive sales, build community]
- Secondary goals: [Additional objectives]
- Success metrics: [How you'll measure success]

**Please help me create:**

1. **Three Detailed Audience Personas** - For each persona, provide:
   - Name and brief background story
   - Demographics (age, occupation, income, location)
   - Psychographics (values, interests, lifestyle, personality traits)
   - Goals and aspirations (what they want to achieve)
   - Pain points and challenges (what keeps them up at night)
   - Content consumption habits (when, where, how they consume content)
   - Preferred content formats (video, articles, podcasts, infographics, etc.)
   - Decision-making process (how they make purchasing decisions)
   - Objections and concerns (what holds them back)
   - Key messages that resonate (what language/tone appeals to them)

2. **Content Opportunity Map** - Identify:
   - Underserved topics in your niche (gaps competitors aren't filling)
   - Questions your audience is asking (but not finding good answers to)
   - Emotional triggers that drive engagement
   - Content angles that differentiate you from competitors

3. **Audience Journey Map** - Map out:
   - Awareness stage: What content introduces them to you?
   - Consideration stage: What content builds trust and authority?
   - Decision stage: What content drives conversion?
   - Retention stage: What content keeps them engaged long-term?

4. **Content-Persona Matrix** - Create a table showing:
   - Which content topics appeal to which persona
   - Priority level for each persona-topic combination
   - Recommended content formats for each

**Output Format:**
Please structure this as a comprehensive document I can reference throughout my content creation process. Use clear headings, bullet points, and tables where appropriate.`,
        promptZh: `我需要深入了解我的目标受众，以创建真正引起共鸣的内容。

**我的业务背景：**
- 行业/细分市场：[例如：B2B SaaS、健身教练、可持续时尚]
- 产品/服务：[你提供什么及其独特价值]
- 当前受众规模：[粉丝/订阅者数量，或"从零开始"]
- 地理重点：[你定位的国家/地区]
- 业务阶段：[初创、成长、成熟]

**我对受众的了解（如果有的话）：**
- 人口统计：[年龄、性别、地点、收入水平、教育程度]
- 他们表达的当前痛点：[他们谈论什么问题]
- 他们在线上的活动场所：[平台、社区、论坛]
- 他们当前消费的内容：[竞争对手、影响者、他们关注的媒体]

**我的目标：**
- 主要目标：[例如：建立品牌知名度、产生潜在客户、推动销售、建立社区]
- 次要目标：[其他目标]
- 成功指标：[你将如何衡量成功]

**请帮我创建：**

1. **三个详细的受众画像** - 对于每个画像，提供：
   - 姓名和简短背景故事
   - 人口统计（年龄、职业、收入、地点）
   - 心理特征（价值观、兴趣、生活方式、性格特征）
   - 目标和愿望（他们想实现什么）
   - 痛点和挑战（什么让他们夜不能寐）
   - 内容消费习惯（何时、何地、如何消费内容）
   - 首选内容格式（视频、文章、播客、信息图表等）
   - 决策过程（他们如何做出购买决策）
   - 异议和顾虑（什么阻碍了他们）
   - 引起共鸣的关键信息（什么语言/语气吸引他们）

2. **内容机会地图** - 识别：
   - 你的细分市场中服务不足的主题（竞争对手未填补的空白）
   - 你的受众正在问的问题（但找不到好答案）
   - 驱动参与的情感触发器
   - 使你与竞争对手区分开来的内容角度

3. **受众旅程地图** - 绘制：
   - 认知阶段：什么内容将他们介绍给你？
   - 考虑阶段：什么内容建立信任和权威？
   - 决策阶段：什么内容推动转化？
   - 保留阶段：什么内容让他们长期参与？

4. **内容-画像矩阵** - 创建一个表格显示：
   - 哪些内容主题吸引哪个画像
   - 每个画像-主题组合的优先级
   - 每个的推荐内容格式

**输出格式：**
请将其构建为一个全面的文档，我可以在整个内容创作过程中参考。在适当的地方使用清晰的标题、项目符号和表格。`,
      },
      {
        title: "Strategic Content Pillars & Topic Clusters",
        titleZh: "战略内容支柱与主题集群",
        description:
          "Establish 3-5 core content pillars and develop topic clusters that demonstrate expertise and improve SEO.",
        descriptionZh: "建立 3-5 个核心内容支柱，并开发展示专业知识和改善 SEO 的主题集群。",
        prompt: `Based on my audience research, I need to establish strategic content pillars that will guide all my content creation.

**My Audience Personas (from Step 1):**
[Paste the key insights about your 3 personas - their pain points, goals, and interests]

**My Business Positioning:**
- Unique value proposition: [What makes you different]
- Core expertise areas: [What you're genuinely knowledgeable about]
- Business goals: [What you want content to achieve]
- Competitive advantage: [What you do better than competitors]

**Current Content Landscape:**
- What competitors are talking about: [Common topics in your niche]
- What's missing in the market: [Gaps you've identified]
- Trending topics in your industry: [Current hot topics]

**Please create:**

1. **3-5 Content Pillars** - For each pillar, provide:
   - Pillar name (memorable and clear)
   - Strategic rationale (why this pillar matters for your business)
   - Audience alignment (which personas care most about this)
   - Differentiation angle (how you'll approach this differently than competitors)
   - Business impact (how this pillar supports your goals)
   - Longevity assessment (will this remain relevant long-term?)

2. **Topic Clusters for Each Pillar** - For each pillar, develop:
   - 1 cornerstone/pillar page topic (comprehensive, authoritative content)
   - 8-12 cluster topics (supporting content that links to the pillar page)
   - Content depth levels (beginner, intermediate, advanced)
   - Search intent mapping (informational, navigational, transactional)
   - Keyword opportunities (primary and secondary keywords)
   - Internal linking strategy (how topics connect)

3. **Content Mix Strategy** - Define:
   - Evergreen vs. timely content ratio (e.g., 70% evergreen, 30% timely)
   - Educational vs. promotional balance (e.g., 80% educational, 20% promotional)
   - Content depth distribution (quick tips vs. comprehensive guides)
   - Format variety (articles, videos, infographics, case studies, etc.)

4. **Pillar Content Calendar Template** - Create a rotating schedule showing:
   - How often to publish content from each pillar
   - Optimal sequencing (which topics to cover first)
   - Seasonal considerations (topics that work better at certain times)
   - Cross-pillar opportunities (content that bridges multiple pillars)

5. **Content Differentiation Matrix** - For each pillar, identify:
   - Your unique angle or perspective
   - Proprietary frameworks or methodologies you can share
   - Personal stories or case studies that illustrate points
   - Contrarian viewpoints (where you disagree with conventional wisdom)
   - Depth level (how much deeper you'll go than competitors)

**Success Criteria for Each Pillar:**
- Engagement metrics to track
- Authority indicators (backlinks, mentions, shares)
- Business outcomes (leads, sales, partnerships)
- Timeline for seeing results

**Output Format:**
Please provide a comprehensive content pillar strategy document with clear sections, tables, and actionable recommendations. Include specific examples for each pillar to illustrate the concepts.`,
        promptZh: `基于我的受众研究，我需要建立战略内容支柱来指导我所有的内容创作。

**我的受众画像（来自步骤 1）：**
[粘贴关于你的 3 个画像的关键见解 - 他们的痛点、目标和兴趣]

**我的业务定位：**
- 独特价值主张：[是什么让你与众不同]
- 核心专业领域：[你真正了解的内容]
- 业务目标：[你希望内容实现什么]
- 竞争优势：[你比竞争对手做得更好的地方]

**当前内容格局：**
- 竞争对手在谈论什么：[你的细分市场中的常见主题]
- 市场中缺少什么：[你发现的空白]
- 你所在行业的趋势主题：[当前热门话题]

**请创建：**

1. **3-5 个内容支柱** - 对于每个支柱，提供：
   - 支柱名称（令人难忘且清晰）
   - 战略理由（为什么这个支柱对你的业务很重要）
   - 受众一致性（哪些画像最关心这个）
   - 差异化角度（你将如何以不同于竞争对手的方式处理这个）
   - 业务影响（这个支柱如何支持你的目标）
   - 持久性评估（这将长期保持相关性吗？）

2. **每个支柱的主题集群** - 对于每个支柱，开发：
   - 1 个基石/支柱页面主题（全面、权威的内容）
   - 8-12 个集群主题（链接到支柱页面的支持内容）
   - 内容深度级别（初学者、中级、高级）
   - 搜索意图映射（信息性、导航性、交易性）
   - 关键词机会（主要和次要关键词）
   - 内部链接策略（主题如何连接）

3. **内容组合策略** - 定义：
   - 常青内容与时效内容比例（例如：70% 常青，30% 时效）
   - 教育性与促销性平衡（例如：80% 教育性，20% 促销性）
   - 内容深度分布（快速提示 vs. 综合指南）
   - 格式多样性（文章、视频、信息图表、案例研究等）

4. **支柱内容日历模板** - 创建一个轮换时间表显示：
   - 从每个支柱发布内容的频率
   - 最佳顺序（首先涵盖哪些主题）
   - 季节性考虑（在某些时间效果更好的主题）
   - 跨支柱机会（桥接多个支柱的内容）

5. **内容差异化矩阵** - 对于每个支柱，识别：
   - 你的独特角度或观点
   - 你可以分享的专有框架或方法论
   - 说明要点的个人故事或案例研究
   - 逆向观点（你不同意传统智慧的地方）
   - 深度级别（你将比竞争对手深入多少）

**每个支柱的成功标准：**
- 要跟踪的参与度指标
- 权威指标（反向链接、提及、分享）
- 业务成果（潜在客户、销售、合作伙伴关系）
- 看到结果的时间表

**输出格式：**
请提供一个全面的内容支柱策略文档，包含清晰的部分、表格和可操作的建议。为每个支柱包含具体示例以说明概念。`,
      },
      {
        title: "90-Day Content Calendar with Strategic Sequencing",
        titleZh: "90 天战略排序内容日历",
        description:
          "Create a detailed 90-day content calendar that strategically sequences topics to build momentum and authority.",
        descriptionZh: "创建一个详细的 90 天内容日历，战略性地排序主题以建立动力和权威。",
        prompt: `I need a comprehensive 90-day content calendar that strategically builds my audience and authority.

**My Content Pillars (from Step 2):**
[List your 3-5 content pillars and their key topics]

**My Publishing Capacity:**
- Content pieces per week: [e.g., 3 blog posts, 5 social posts, 1 video]
- Team resources: [solo creator, small team, agency support]
- Production time per piece: [estimated hours]
- Content formats I can produce: [list all formats]

**Platform Strategy:**
- Primary platform: [where you'll publish main content]
- Secondary platforms: [where you'll repurpose/distribute]
- Platform-specific requirements: [character limits, optimal times, etc.]

**Business Calendar:**
- Product launches: [dates and details]
- Seasonal peaks: [busy seasons for your business]
- Industry events: [conferences, holidays, awareness months]
- Internal milestones: [company anniversaries, achievements]

**Current Situation:**
- Existing content assets: [what you already have]
- Audience size and engagement rate: [current metrics]
- Biggest content gaps: [what's missing]

**Please create:**

1. **Strategic Content Arc** - Design a 90-day narrative that:
   - Week 1-4: Foundation phase (introduce core concepts, build credibility)
   - Week 5-8: Depth phase (dive deeper, showcase expertise)
   - Week 9-12: Authority phase (thought leadership, unique insights)
   - Shows how each piece builds on previous content
   - Creates anticipation for upcoming content
   - Balances education with engagement

2. **Detailed 90-Day Calendar** - For each week, provide:
   - Week number and theme
   - Content pieces for each day/publication slot
   - For each piece, include:
     * Title/topic
     * Content pillar
     * Format (blog, video, social post, etc.)
     * Target persona
     * Primary goal (awareness, engagement, conversion)
     * Key message/takeaway
     * Call-to-action
     * SEO keywords (if applicable)
     * Estimated production time
     * Distribution channels

3. **Content Batching Schedule** - Organize by:
   - Which content to batch together (similar formats/topics)
   - Optimal batching windows (when to produce multiple pieces)
   - Dependencies (content that must be created in sequence)
   - Buffer content (evergreen pieces for busy periods)

4. **Repurposing Matrix** - For major content pieces, show:
   - Original format and platform
   - 5-7 ways to repurpose (e.g., blog → social posts, email, infographic)
   - Adaptation notes for each platform
   - Timeline for rolling out repurposed content

5. **Engagement Hooks Calendar** - Plan:
   - Weekly engagement prompts (questions, polls, challenges)
   - Community-building activities (AMAs, contests, collaborations)
   - User-generated content opportunities
   - Behind-the-scenes content
   - Interactive content (quizzes, assessments, tools)

6. **Promotional Content Integration** - Strategically place:
   - Product/service mentions (subtle and valuable)
   - Case studies and testimonials
   - Lead magnets and opt-in offers
   - Sales content (timed with launches or promotions)
   - Ratio: 80% value content, 20% promotional

7. **Flexibility Framework** - Include:
   - Swap-out options (alternative topics if something becomes irrelevant)
   - Trending topic slots (reserved for timely content)
   - Response content opportunities (addressing audience questions)
   - Seasonal adjustments

8. **Production Workflow** - For each week, outline:
   - Monday: Planning and research
   - Tuesday-Thursday: Content creation
   - Friday: Review and scheduling
   - Weekend: Engagement and community management

**Success Metrics for the 90 Days:**
- Audience growth targets
- Engagement rate goals
- Traffic/reach objectives
- Conversion milestones
- Authority indicators (backlinks, mentions, partnerships)

**Output Format:**
Please provide:
1. A high-level 90-day overview (themes and goals for each month)
2. Week-by-week breakdown with specific content pieces
3. A spreadsheet-style table I can easily transfer to my project management tool
4. Notes on strategic decisions and rationale

Make this calendar actionable, realistic, and strategically sound. Include specific examples and templates I can adapt.`,
        promptZh: `我需要一个全面的 90 天内容日历，战略性地建立我的受众和权威。

**我的内容支柱（来自步骤 2）：**
[列出你的 3-5 个内容支柱及其关键主题]

**我的发布能力：**
- 每周内容数量：[例如：3 篇博客文章、5 条社交帖子、1 个视频]
- 团队资源：[独立创作者、小团队、代理支持]
- 每件作品的制作时间：[估计小时数]
- 我可以制作的内容格式：[列出所有格式]

**平台策略：**
- 主要平台：[你将在哪里发布主要内容]
- 次要平台：[你将在哪里重新利用/分发]
- 平台特定要求：[字符限制、最佳时间等]

**业务日历：**
- 产品发布：[日期和详情]
- 季节性高峰：[你的业务繁忙季节]
- 行业活动：[会议、假期、宣传月]
- 内部里程碑：[公司周年纪念、成就]

**当前情况：**
- 现有内容资产：[你已经拥有的]
- 受众规模和参与率：[当前指标]
- 最大的内容空白：[缺少什么]

**请创建：**

1. **战略内容弧线** - 设计一个 90 天的叙事：
   - 第 1-4 周：基础阶段（介绍核心概念，建立可信度）
   - 第 5-8 周：深度阶段（深入探讨，展示专业知识）
   - 第 9-12 周：权威阶段（思想领导力，独特见解）
   - 显示每件作品如何建立在先前内容之上
   - 为即将到来的内容创造期待
   - 平衡教育与参与

2. **详细的 90 天日历** - 对于每周，提供：
   - 周数和主题
   - 每天/发布时段的内容
   - 对于每件作品，包括：
     * 标题/主题
     * 内容支柱
     * 格式（博客、视频、社交帖子等）
     * 目标画像
     * 主要目标（认知、参与、转化）
     * 关键信息/要点
     * 行动号召
     * SEO 关键词（如适用）
     * 估计制作时间
     * 分发渠道

3. **内容批处理时间表** - 按以下方式组织：
   - 哪些内容一起批处理（相似格式/主题）
   - 最佳批处理窗口（何时制作多件作品）
   - 依赖关系（必须按顺序创建的内容）
   - 缓冲内容（繁忙时期的常青作品）

4. **重新利用矩阵** - 对于主要内容，显示：
   - 原始格式和平台
   - 5-7 种重新利用方式（例如：博客 → 社交帖子、电子邮件、信息图表）
   - 每个平台的调整说明
   - 推出重新利用内容的时间表

5. **参与钩子日历** - 计划：
   - 每周参与提示（问题、投票、挑战）
   - 社区建设活动（AMA、竞赛、合作）
   - 用户生成内容机会
   - 幕后内容
   - 互动内容（测验、评估、工具）

6. **促销内容整合** - 战略性地放置：
   - 产品/服务提及（微妙且有价值）
   - 案例研究和推荐
   - 潜在客户磁铁和选择加入优惠
   - 销售内容（与发布或促销同步）
   - 比例：80% 价值内容，20% 促销

7. **灵活性框架** - 包括：
   - 替换选项（如果某些内容变得不相关的替代主题）
   - 趋势主题时段（为及时内容保留）
   - 响应内容机会（解决受众问题）
   - 季节性调整

8. **制作工作流** - 对于每周，概述：
   - 周一：规划和研究
   - 周二至周四：内容创作
   - 周五：审查和安排
   - 周末：参与和社区管理

**90 天的成功指标：**
- 受众增长目标
- 参与率目标
- 流量/覆盖目标
- 转化里程碑
- 权威指标（反向链接、提及、合作伙伴关系）

**输出格式：**
请提供：
1. 高级 90 天概览（每月的主题和目标）
2. 逐周细分，包含具体内容
3. 我可以轻松转移到项目管理工具的电子表格式表格
4. 关于战略决策和理由的说明

使这个日历可操作、现实且战略合理。包含我可以调整的具体示例和模板。`,
      },
      {
        title: "Content Performance Analysis & Optimization",
        titleZh: "内容绩效分析与优化",
        description:
          "Analyze content performance data and develop optimization strategies based on insights.",
        descriptionZh: "分析内容绩效数据并基于洞察开发优化策略。",
        prompt: `I need to analyze my content performance and create an optimization strategy.

**My Content Performance Data:**
- Top performing content: [List your 5-10 best pieces with metrics]
- Underperforming content: [List pieces that didn't meet expectations]
- Traffic sources: [Where your audience comes from - organic, social, referral, etc.]
- Engagement metrics: [Average time on page, bounce rate, scroll depth, comments, shares]
- Conversion data: [If applicable - email signups, purchases, downloads]
- Publishing frequency: [How often you publish]
- Time period analyzed: [e.g., last 90 days, last 6 months]

**My Content Types:**
- Formats you create: [blog posts, videos, podcasts, social posts, etc.]
- Average length/duration: [word count, video minutes, etc.]
- Topics covered: [main themes and categories]

**My Goals:**
- What I want to improve: [traffic, engagement, conversions, authority, etc.]
- Specific targets: [e.g., increase organic traffic by 50%, double email signups]
- Timeline: [when you want to achieve these goals]

**Please help me:**

1. **Performance Pattern Analysis** - Identify:
   - Common characteristics of high-performing content (topics, formats, length, style)
   - Why certain content underperformed (timing, topic, format, distribution)
   - Audience behavior patterns (when they engage, what they share, what converts)
   - Content gaps (topics you should cover but haven't)
   - Seasonal trends (if any patterns emerge)

2. **Content Optimization Recommendations** - For existing content:
   - Which pieces to update/refresh (and why)
   - How to optimize titles and meta descriptions
   - Internal linking opportunities
   - Content expansion opportunities (turning short posts into comprehensive guides)
   - Repurposing opportunities (turning one format into another)
   - Call-to-action improvements

3. **Future Content Strategy Adjustments** - Recommend:
   - Topics to prioritize (based on performance data)
   - Topics to avoid or deprioritize
   - Optimal content length/depth for each format
   - Best publishing frequency and timing
   - Format mix adjustments (more video, less text, etc.)
   - Distribution channel priorities

4. **SEO Optimization Plan** - Provide:
   - Keyword opportunities from existing content
   - Content cluster expansion ideas
   - Technical SEO improvements needed
   - Featured snippet opportunities
   - Link building strategies

5. **Engagement Optimization Tactics** - Suggest:
   - How to increase time on page
   - How to reduce bounce rate
   - How to encourage more comments/shares
   - Interactive elements to add
   - Community building opportunities

6. **Conversion Optimization** - Recommend:
   - Where to place CTAs
   - What offers to create
   - Lead magnet ideas based on popular content
   - Email sequence topics
   - Product/service positioning in content

7. **Testing & Experimentation Plan** - Design:
   - A/B testing ideas (headlines, formats, CTAs)
   - New content experiments to try
   - Metrics to track for each experiment
   - Timeline for testing

8. **90-Day Optimization Roadmap** - Create:
   - Month 1: Quick wins (easy optimizations with high impact)
   - Month 2: Strategic improvements (bigger projects)
   - Month 3: Experimentation (testing new approaches)
   - Specific action items with priorities
   - Expected outcomes for each action

**Output Format:**
Please provide a comprehensive analysis with clear sections, data-driven recommendations, and specific action items I can implement immediately.`,
        promptZh: `我需要分析我的内容绩效并创建优化策略。

**我的内容绩效数据：**
- 表现最好的内容：[列出你的 5-10 个最佳作品及其指标]
- 表现不佳的内容：[列出未达到预期的作品]
- 流量来源：[你的受众来自哪里 - 自然搜索、社交、推荐等]
- 参与度指标：[页面平均停留时间、跳出率、滚动深度、评论、分享]
- 转化数据：[如适用 - 电子邮件注册、购买、下载]
- 发布频率：[你发布的频率]
- 分析时间段：[例如：过去 90 天、过去 6 个月]

**我的内容类型：**
- 你创建的格式：[博客文章、视频、播客、社交帖子等]
- 平均长度/时长：[字数、视频分钟数等]
- 涵盖的主题：[主要主题和类别]

**我的目标：**
- 我想改进什么：[流量、参与度、转化、权威等]
- 具体目标：[例如：将自然流量增加 50%，电子邮件注册翻倍]
- 时间表：[你想何时实现这些目标]

**请帮我：**

1. **绩效模式分析** - 识别：
   - 高绩效内容的共同特征（主题、格式、长度、风格）
   - 某些内容表现不佳的原因（时机、主题、格式、分发）
   - 受众行为模式（他们何时参与、分享什么、什么转化）
   - 内容空白（你应该涵盖但尚未涵盖的主题）
   - 季节性趋势（如果出现任何模式）

2. **内容优化建议** - 对于现有内容：
   - 哪些作品需要更新/刷新（以及原因）
   - 如何优化标题和元描述
   - 内部链接机会
   - 内容扩展机会（将短文章变成综合指南）
   - 重新利用机会（将一种格式转换为另一种）
   - 行动号召改进

3. **未来内容策略调整** - 推荐：
   - 要优先考虑的主题（基于绩效数据）
   - 要避免或降低优先级的主题
   - 每种格式的最佳内容长度/深度
   - 最佳发布频率和时机
   - 格式组合调整（更多视频、更少文本等）
   - 分发渠道优先级

4. **SEO 优化计划** - 提供：
   - 现有内容的关键词机会
   - 内容集群扩展想法
   - 需要的技术 SEO 改进
   - 精选片段机会
   - 链接建设策略

5. **参与度优化策略** - 建议：
   - 如何增加页面停留时间
   - 如何降低跳出率
   - 如何鼓励更多评论/分享
   - 要添加的互动元素
   - 社区建设机会

6. **转化优化** - 推荐：
   - 在哪里放置 CTA
   - 要创建什么优惠
   - 基于热门内容的潜在客户磁铁想法
   - 电子邮件序列主题
   - 内容中的产品/服务定位

7. **测试与实验计划** - 设计：
   - A/B 测试想法（标题、格式、CTA）
   - 要尝试的新内容实验
   - 每个实验要跟踪的指标
   - 测试时间表

8. **90 天优化路线图** - 创建：
   - 第 1 个月：快速胜利（高影响的简单优化）
   - 第 2 个月：战略改进（更大的项目）
   - 第 3 个月：实验（测试新方法）
   - 具有优先级的具体行动项目
   - 每个行动的预期结果

**输出格式：**
请提供一个全面的分析，包含清晰的部分、数据驱动的建议和我可以立即实施的具体行动项目。`,
      },
    ],
  },
  "2": {
    id: 2,
    title: "Comprehensive Market Research Framework",
    titleZh: "全面市场研究框架",
    category: "Research",
    tier: "Plus",
    description:
      "Conduct deep market research to identify opportunities, understand competitors, and validate business ideas with structured AI analysis.",
    descriptionZh: "进行深入的市场研究，通过结构化的 AI 分析识别机会、了解竞争对手并验证商业想法。",
    steps: [
      {
        title: "Market Landscape & Opportunity Mapping",
        titleZh: "市场格局与机会地图",
        description:
          "Analyze the overall market landscape, identify trends, and map potential opportunities.",
        descriptionZh: "分析整体市场格局，识别趋势并绘制潜在机会地图。",
        prompt: `I need to understand the market landscape and identify opportunities for my business.

**My Business Context:**
- Industry/Market: [e.g., B2B SaaS, e-commerce, consulting, etc.]
- Product/Service idea: [What you plan to offer or currently offer]
- Target market: [Geographic region, market segment, customer type]
- Business stage: [Idea stage, early startup, growth stage, established]
- Budget constraints: [If any limitations on market entry]

**What I Know:**
- Market size estimate: [If you have any data]
- Key players: [Competitors or companies you're aware of]
- Customer pain points: [Problems you think exist]
- Market trends: [Any trends you've observed]

**My Questions:**
- Is this market growing or declining?
- What are the biggest opportunities?
- What are the risks and challenges?
- Who are the underserved segments?

**Please provide:**

1. **Market Overview & Sizing** - Analyze:
   - Total Addressable Market (TAM) - overall market size
   - Serviceable Available Market (SAM) - segment you can reach
   - Serviceable Obtainable Market (SOM) - realistic market share
   - Market growth rate and trajectory (5-year outlook)
   - Market maturity stage (emerging, growth, mature, declining)
   - Geographic considerations and regional differences

2. **Market Trends Analysis** - Identify:
   - Macro trends affecting the market (technology, economy, society, regulations)
   - Emerging customer behaviors and preferences
   - Technology disruptions and innovations
   - Regulatory changes and their impact
   - Seasonal patterns and cyclical trends
   - Future predictions (3-5 year outlook)

3. **Opportunity Mapping** - Discover:
   - Underserved customer segments (who's being ignored?)
   - Unmet needs and pain points (what problems aren't solved?)
   - Market gaps (what's missing in current offerings?)
   - Emerging niches (new segments forming)
   - Geographic expansion opportunities
   - Adjacent market opportunities (related markets to enter)
   - Blue ocean opportunities (uncontested market spaces)

4. **Market Entry Barriers** - Assess:
   - Capital requirements (how much investment needed?)
   - Technical barriers (specialized knowledge, technology, patents)
   - Regulatory barriers (licenses, certifications, compliance)
   - Network effects (does market favor incumbents?)
   - Brand loyalty (how strong is customer attachment to existing brands?)
   - Distribution challenges (how hard to reach customers?)
   - Switching costs (how hard for customers to change providers?)

5. **Market Dynamics** - Understand:
   - Supply and demand balance
   - Pricing dynamics and trends
   - Customer acquisition costs in the market
   - Customer lifetime value benchmarks
   - Typical sales cycles
   - Decision-making processes
   - Key success factors in this market

6. **Risk Assessment** - Evaluate:
   - Market risks (what could go wrong?)
   - Competitive risks (how might competitors respond?)
   - Technology risks (could your solution become obsolete?)
   - Economic risks (recession, inflation, etc.)
   - Regulatory risks (potential new regulations)
   - Mitigation strategies for each risk

7. **Strategic Recommendations** - Provide:
   - Best market entry strategy (niche first, broad launch, etc.)
   - Optimal timing for market entry
   - Positioning recommendations
   - Go-to-market approach
   - Resource allocation priorities
   - Key partnerships to pursue
   - Metrics to track

**Output Format:**
Please structure this as a comprehensive market research report with clear sections, data points, visual descriptions (tables, charts), and actionable insights. Include specific examples and real-world context where possible.`,
        promptZh: `我需要了解市场格局并为我的业务识别机会。

**我的业务背景：**
- 行业/市场：[例如：B2B SaaS、电子商务、咨询等]
- 产品/服务想法：[你计划提供或目前提供的内容]
- 目标市场：[地理区域、市场细分、客户类型]
- 业务阶段：[想法阶段、早期创业、成长阶段、成熟]
- 预算限制：[如果有市场进入的任何限制]

**我所知道的：**
- 市场规模估计：[如果你有任何数据]
- 关键参与者：[你知道的竞争对手或公司]
- 客户痛点：[你认为存在的问题]
- 市场趋势：[你观察到的任何趋势]

**我的问题：**
- 这个市场是增长还是下降？
- 最大的机会是什么？
- 风险和挑战是什么？
- 谁是服务不足的细分市场？

**请提供：**

1. **市场概览与规模** - 分析：
   - 总可寻址市场（TAM）- 整体市场规模
   - 可服务可用市场（SAM）- 你可以触及的细分市场
   - 可服务可获得市场（SOM）- 现实的市场份额
   - 市场增长率和轨迹（5 年展望）
   - 市场成熟阶段（新兴、成长、成熟、衰退）
   - 地理考虑和区域差异

2. **市场趋势分析** - 识别：
   - 影响市场的宏观趋势（技术、经济、社会、法规）
   - 新兴的客户行为和偏好
   - 技术颠覆和创新
   - 监管变化及其影响
   - 季节性模式和周期性趋势
   - 未来预测（3-5 年展望）

3. **机会地图** - 发现：
   - 服务不足的客户细分（谁被忽视了？）
   - 未满足的需求和痛点（什么问题没有解决？）
   - 市场空白（当前产品中缺少什么？）
   - 新兴利基市场（正在形成的新细分市场）
   - 地理扩张机会
   - 相邻市场机会（要进入的相关市场）
   - 蓝海机会（无竞争的市场空间）

4. **市场进入壁垒** - 评估：
   - 资本要求（需要多少投资？）
   - 技术壁垒（专业知识、技术、专利）
   - 监管壁垒（许可证、认证、合规）
   - 网络效应（市场是否有利于现有企业？）
   - 品牌忠诚度（客户对现有品牌的依恋有多强？）
   - 分销挑战（接触客户有多难？）
   - 转换成本（客户更换供应商有多难？）

5. **市场动态** - 理解：
   - 供需平衡
   - 定价动态和趋势
   - 市场中的客户获取成本
   - 客户生命周期价值基准
   - 典型的销售周期
   - 决策过程
   - 这个市场的关键成功因素

6. **风险评估** - 评估：
   - 市场风险（可能出什么问题？）
   - 竞争风险（竞争对手可能如何回应？）
   - 技术风险（你的解决方案可能过时吗？）
   - 经济风险（衰退、通货膨胀等）
   - 监管风险（潜在的新法规）
   - 每个风险的缓解策略

7. **战略建议** - 提供：
   - 最佳市场进入策略（先利基市场、广泛发布等）
   - 市场进入的最佳时机
   - 定位建议
   - 进入市场的方法
   - 资源分配优先级
   - 要追求的关键合作伙伴关系
   - 要跟踪的指标

**输出格式：**
请将其构建为一个全面的市场研究报告，包含清晰的部分、数据点、视觉描述（表格、图表）和可操作的见解。在可能的情况下包含具体示例和现实世界的背景。`,
      },
      {
        title: "Competitive Intelligence & Positioning Analysis",
        titleZh: "竞争情报与定位分析",
        description:
          "Deep dive into competitor strategies, strengths, weaknesses, and identify your unique positioning.",
        descriptionZh: "深入研究竞争对手的策略、优势、劣势，并确定你的独特定位。",
        prompt: `I need to analyze my competitors and develop a strong competitive positioning strategy.

**My Business:**
- Product/Service: [What you offer]
- Target market: [Who you serve]
- Current positioning: [How you currently position yourself, if any]
- Unique capabilities: [What you do well or differently]

**My Competitors:**
List 3-5 main competitors:
1. [Competitor name, website, brief description]
2. [Competitor name, website, brief description]
3. [Competitor name, website, brief description]

**What I Want to Understand:**
- What are they doing well?
- Where are they weak?
- How can I differentiate?
- What positioning will win?

**Please provide:**

1. **Competitor Profile Analysis** - For each competitor, analyze:
   - Business model (how they make money)
   - Product/service offerings (what they sell)
   - Pricing strategy (premium, mid-market, budget)
   - Target customers (who they serve)
   - Value proposition (their main selling points)
   - Marketing channels (where they acquire customers)
   - Content strategy (what they talk about)
   - Brand positioning (how they position themselves)
   - Company size and resources (team, funding, revenue estimates)
   - Recent moves (launches, partnerships, pivots)

2. **Competitive Strengths & Weaknesses Matrix** - Create a table showing:
   - Each competitor's top 3 strengths
   - Each competitor's top 3 weaknesses
   - Opportunities these weaknesses create for you
   - Threats their strengths pose to you

3. **Feature Comparison Matrix** - Build a detailed comparison:
   - List all key features/capabilities in your category
   - Rate each competitor on each feature (Strong/Medium/Weak/Missing)
   - Identify feature gaps (what nobody offers well)
   - Highlight your potential advantages
   - Note "table stakes" features (must-haves) vs. differentiators

4. **Pricing & Packaging Analysis** - Compare:
   - Pricing models (subscription, one-time, usage-based, etc.)
   - Price points and tiers
   - What's included at each tier
   - Free trial/freemium offerings
   - Discounting strategies
   - Value perception (are they seen as premium or budget?)
   - Your pricing opportunity (where can you position?)

5. **Marketing & Messaging Analysis** - Evaluate:
   - Key messages and taglines
   - Brand voice and tone
   - Content themes and topics
   - SEO keywords they target
   - Social media presence and engagement
   - Advertising strategies (if visible)
   - Partnership and affiliate programs
   - Customer testimonials and case studies
   - What resonates with their audience

6. **Customer Experience Analysis** - Assess:
   - Onboarding process (how easy to get started?)
   - User experience quality
   - Customer support approach
   - Community building efforts
   - Customer complaints (from reviews, forums, social media)
   - Customer praise (what do people love?)
   - Retention strategies
   - Areas where customers are frustrated

7. **Strategic Positioning Opportunities** - Identify:
   - Underserved customer segments (who's being ignored?)
   - Unmet needs (what problems aren't solved?)
   - Positioning gaps (what positioning is available?)
   - Differentiation angles (how can you be different?)
   - Niche opportunities (specific segments to dominate)
   - Blue ocean opportunities (new market spaces)

8. **Your Competitive Positioning Strategy** - Recommend:
   - Optimal positioning statement (how to position yourself)
   - Key differentiators to emphasize (what makes you unique)
   - Target customer profile (who to focus on)
   - Messaging framework (what to say)
   - Competitive advantages to leverage
   - Weaknesses to address
   - Go-to-market strategy
   - Competitive moats to build (sustainable advantages)

9. **Competitive Response Playbook** - Prepare for:
   - How competitors might respond to your entry
   - Counter-strategies for each likely response
   - Defensive strategies (protecting your advantages)
   - Offensive strategies (attacking their weaknesses)

**Output Format:**
Please provide a comprehensive competitive analysis report with clear sections, comparison tables, strategic insights, and actionable positioning recommendations.`,
        promptZh: `我需要分析我的竞争对手并制定强大的竞争定位策略。

**我的业务：**
- 产品/服务：[你提供什么]
- 目标市场：[你服务谁]
- 当前定位：[你目前如何定位自己，如果有的话]
- 独特能力：[你做得好或不同的地方]

**我的竞争对手：**
列出 3-5 个主要竞争对手：
1. [竞争对手名称、网站、简要描述]
2. [竞争对手名称、网站、简要描述]
3. [竞争对手名称、网站、简要描述]

**我想了解什么：**
- 他们做得好的地方是什么？
- 他们的弱点在哪里？
- 我如何差异化？
- 什么定位会赢？

**请提供：**

1. **竞争对手档案分析** - 对于每个竞争对手，分析：
   - 商业模式（他们如何赚钱）
   - 产品/服务产品（他们销售什么）
   - 定价策略（高端、中端、预算）
   - 目标客户（他们服务谁）
   - 价值主张（他们的主要卖点）
   - 营销渠道（他们在哪里获取客户）
   - 内容策略（他们谈论什么）
   - 品牌定位（他们如何定位自己）
   - 公司规模和资源（团队、资金、收入估计）
   - 最近的举措（发布、合作伙伴关系、转型）

2. **竞争优势与劣势矩阵** - 创建一个表格显示：
   - 每个竞争对手的前 3 个优势
   - 每个竞争对手的前 3 个劣势
   - 这些劣势为你创造的机会
   - 他们的优势对你构成的威胁

3. **功能比较矩阵** - 构建详细比较：
   - 列出你的类别中的所有关键功能/能力
   - 对每个竞争对手在每个功能上进行评分（强/中/弱/缺失）
   - 识别功能空白（没有人提供得好的）
   - 突出你的潜在优势
   - 注意"基本"功能（必备）vs. 差异化因素

4. **定价与打包分析** - 比较：
   - 定价模型（订阅、一次性、基于使用等）
   - 价格点和层级
   - 每个层级包含什么
   - 免费试用/免费增值产品
   - 折扣策略
   - 价值感知（他们被视为高端还是预算？）
   - 你的定价机会（你可以在哪里定位？）

5. **营销与信息传递分析** - 评估：
   - 关键信息和标语
   - 品牌声音和语气
   - 内容主题和话题
   - 他们定位的 SEO 关键词
   - 社交媒体存在和参与度
   - 广告策略（如果可见）
   - 合作伙伴和联盟计划
   - 客户推荐和案例研究
   - 什么与他们的受众产生共鸣

6. **客户体验分析** - 评估：
   - 入职流程（开始有多容易？）
   - 用户体验质量
   - 客户支持方法
   - 社区建设努力
   - 客户投诉（来自评论、论坛、社交媒体）
   - 客户赞扬（人们喜欢什么？）
   - 保留策略
   - 客户感到沮丧的领域

7. **战略定位机会** - 识别：
   - 服务不足的客户细分（谁被忽视了？）
   - 未满足的需求（什么问题没有解决？）
   - 定位空白（什么定位可用？）
   - 差异化角度（你如何与众不同？）
   - 利基机会（要主导的特定细分市场）
   - 蓝海机会（新的市场空间）

8. **你的竞争定位策略** - 推荐：
   - 最佳定位声明（如何定位自己）
   - 要强调的关键差异化因素（是什么让你独特）
   - 目标客户档案（要关注谁）
   - 信息传递框架（要说什么）
   - 要利用的竞争优势
   - 要解决的弱点
   - 进入市场策略
   - 要建立的竞争护城河（可持续优势）

9. **竞争响应手册** - 准备：
   - 竞争对手可能如何回应你的进入
   - 每个可能响应的反策略
   - 防御策略（保护你的优势）
   - 进攻策略（攻击他们的弱点）

**输出格式：**
请提供一个全面的竞争分析报告，包含清晰的部分、比较表格、战略见解和可操作的定位建议。`,
      },
    ],
  },
  "3": {
    id: 3,
    title: "Social Media Content Strategy & Calendar",
    titleZh: "社交媒体内容策略与日历",
    category: "Marketing",
    tier: "Core",
    description:
      "Build a comprehensive social media strategy with platform-specific content plans and a 30-day posting calendar.",
    descriptionZh: "构建全面的社交媒体策略，包含平台特定的内容计划和 30 天发布日历。",
    steps: [
      {
        title: "Platform Selection & Audience Analysis",
        titleZh: "平台选择与受众分析",
        description:
          "Choose the right social platforms for your business and understand your audience on each platform.",
        descriptionZh: "为你的业务选择合适的社交平台，并了解每个平台上的受众。",
        prompt: `I need to develop a strategic social media presence that drives real business results.

**My Business:**
- Industry: [Your industry/niche]
- Product/Service: [What you offer]
- Target audience: [Who you want to reach]
- Business goals: [Brand awareness, leads, sales, community, etc.]
- Current social presence: [What platforms you're on, follower counts]
- Resources: [Team size, time available, budget]

**My Questions:**
- Which platforms should I focus on?
- What content works on each platform?
- How often should I post?
- What should my content mix be?

**Please provide:**

1. **Platform Prioritization Analysis** - For each major platform (Instagram, TikTok, LinkedIn, Twitter/X, Facebook, YouTube, Pinterest), evaluate:
   - Audience demographics (who's on this platform?)
   - Content formats that work (what performs well?)
   - Algorithm preferences (what gets distribution?)
   - Business suitability (is your audience here?)
   - Competition level (how crowded is it?)
   - Resource requirements (time, skills, budget needed)
   - ROI potential (likely return on investment)
   - Recommendation: Priority 1 (focus), Priority 2 (secondary), or Skip

2. **Platform-Specific Audience Insights** - For your priority platforms:
   - Demographics (age, gender, location, income)
   - Psychographics (interests, values, behaviors)
   - Active times (when they're online)
   - Content preferences (what they engage with)
   - Pain points and interests
   - Influencers they follow
   - Hashtags they use
   - Communities they're part of

3. **Content Pillar Strategy** - Define 3-5 content pillars:
   - Pillar name and theme
   - Why this pillar matters to your audience
   - Content ideas for this pillar (10+ ideas)
   - Engagement hooks (questions, challenges, prompts)
   - How this pillar supports business goals
   - Percentage of content from this pillar (e.g., 30%)

4. **Content Format Mix** - Recommend optimal mix:
   - Educational content (% and examples)
   - Entertaining content (% and examples)
   - Inspirational content (% and examples)
   - Promotional content (% and examples)
   - User-generated content (% and examples)
   - Behind-the-scenes content (% and examples)
   - Trending/timely content (% and examples)

5. **Platform-Specific Content Guidelines** - For each priority platform:
   - Optimal post frequency (how often to post)
   - Best posting times (when to publish)
   - Content format preferences (video, images, carousels, text)
   - Caption length and style
   - Hashtag strategy (how many, which types)
   - Call-to-action approaches
   - Engagement tactics (how to drive comments, shares, saves)
   - Algorithm optimization tips

6. **Content Creation Framework** - Provide:
   - Content templates for each pillar
   - Hook formulas (attention-grabbing openings)
   - Storytelling structures
   - Visual style guidelines
   - Brand voice and tone
   - Do's and don'ts
   - Tools and resources needed

7. **Engagement & Community Strategy** - Plan:
   - How to respond to comments (response framework)
   - How to start conversations (engagement prompts)
   - How to handle negative feedback
   - Community building activities
   - Collaboration opportunities (partnerships, takeovers, features)
   - User-generated content campaigns
   - Contests and giveaways (if appropriate)

8. **Growth Tactics** - Recommend:
   - Organic growth strategies
   - Cross-promotion tactics
   - Collaboration opportunities
   - Hashtag strategies
   - SEO optimization (for searchable platforms)
   - Paid promotion recommendations (if budget allows)
   - Influencer partnerships
   - Content repurposing strategies

9. **Metrics & Success Tracking** - Define:
   - Key metrics to track for each platform
   - Engagement rate benchmarks
   - Growth targets (followers, reach, engagement)
   - Conversion tracking (if applicable)
   - Content performance indicators
   - Monthly reporting framework
   - When to pivot or adjust strategy

**Output Format:**
Please provide a comprehensive social media strategy document with clear sections, platform-specific recommendations, content examples, and actionable tactics I can implement immediately.`,
        promptZh: `我需要制定一个能带来实际业务成果的战略性社交媒体存在。

**我的业务：**
- 行业：[你的行业/细分市场]
- 产品/服务：[你提供什么]
- 目标受众：[你想接触谁]
- 业务目标：[品牌知名度、潜在客户、销售、社区等]
- 当前社交存在：[你在哪些平台上，粉丝数量]
- 资源：[团队规模、可用时间、预算]

**我的问题：**
- 我应该关注哪些平台？
- 每个平台上什么内容有效？
- 我应该多久发布一次？
- 我的内容组合应该是什么？

**请提供：**

1. **平台优先级分析** - 对于每个主要平台（Instagram、TikTok、LinkedIn、Twitter/X、Facebook、YouTube、Pinterest），评估：
   - 受众人口统计（谁在这个平台上？）
   - 有效的内容格式（什么表现良好？）
   - 算法偏好（什么获得分发？）
   - 业务适用性（你的受众在这里吗？）
   - 竞争水平（有多拥挤？）
   - 资源要求（需要的时间、技能、预算）
   - ROI 潜力（可能的投资回报）
   - 建议：优先级 1（重点）、优先级 2（次要）或跳过

2. **平台特定受众洞察** - 对于你的优先平台：
   - 人口统计（年龄、性别、地点、收入）
   - 心理特征（兴趣、价值观、行为）
   - 活跃时间（他们何时在线）
   - 内容偏好（他们参与什么）
   - 痛点和兴趣
   - 他们关注的影响者
   - 他们使用的标签
   - 他们所属的社区

3. **内容支柱策略** - 定义 3-5 个内容支柱：
   - 支柱名称和主题
   - 为什么这个支柱对你的受众很重要
   - 这个支柱的内容想法（10+ 个想法）
   - 参与钩子（问题、挑战、提示）
   - 这个支柱如何支持业务目标
   - 来自这个支柱的内容百分比（例如：30%）

4. **内容格式组合** - 推荐最佳组合：
   - 教育内容（% 和示例）
   - 娱乐内容（% 和示例）
   - 鼓舞人心的内容（% 和示例）
   - 促销内容（% 和示例）
   - 用户生成内容（% 和示例）
   - 幕后内容（% 和示例）
   - 趋势/及时内容（% 和示例）

5. **平台特定内容指南** - 对于每个优先平台：
   - 最佳发布频率（多久发布一次）
   - 最佳发布时间（何时发布）
   - 内容格式偏好（视频、图片、轮播、文本）
   - 标题长度和风格
   - 标签策略（多少个，哪些类型）
   - 行动号召方法
   - 参与策略（如何推动评论、分享、保存）
   - 算法优化技巧

6. **内容创作框架** - 提供：
   - 每个支柱的内容模板
   - 钩子公式（吸引注意力的开头）
   - 讲故事结构
   - 视觉风格指南
   - 品牌声音和语气
   - 该做和不该做的事
   - 需要的工具和资源

7. **参与与社区策略** - 计划：
   - 如何回应评论（响应框架）
   - 如何开始对话（参与提示）
   - 如何处理负面反馈
   - 社区建设活动
   - 合作机会（合作伙伴关系、接管、特色）
   - 用户生成内容活动
   - 竞赛和赠品（如果合适）

8. **增长策略** - 推荐：
   - 有机增长策略
   - 交叉推广策略
   - 合作机会
   - 标签策略
   - SEO 优化（对于可搜索的平台）
   - 付费推广建议（如果预算允许）
   - 影响者合作伙伴关系
   - 内容重新利用策略

9. **指标与成功跟踪** - 定义：
   - 每个平台要跟踪的关键指标
   - 参与率基准
   - 增长目标（粉丝、覆盖、参与）
   - 转化跟踪（如适用）
   - 内容绩效指标
   - 月度报告框架
   - 何时调整或调整策略

**输出格式：**
请提供一个全面的社交媒体策略文档，包含清晰的部分、平台特定的建议、内容示例和我可以立即实施的可操作策略。`,
      },
      {
        title: "30-Day Social Media Content Calendar",
        titleZh: "30 天社交媒体内容日历",
        description:
          "Create a detailed 30-day posting calendar with ready-to-use content ideas for your priority platforms.",
        descriptionZh: "为你的优先平台创建一个详细的 30 天发布日历，包含即用型内容想法。",
        prompt: `Based on my social media strategy, I need a detailed 30-day content calendar I can execute immediately.

**My Setup:**
- Priority platforms: [e.g., Instagram, LinkedIn, TikTok]
- Content pillars: [Your 3-5 pillars from previous step]
- Posting frequency: [How often per platform per week]
- Team capacity: [Solo, small team, etc.]
- Current events/launches: [Any specific dates or events to work around]

**Please create:**

1. **30-Day Content Calendar** - For each day, provide:
   - Date and day of week
   - Platform(s) to post on
   - Content pillar
   - Post type/format (carousel, video, single image, text, etc.)
   - Content topic/angle
   - Hook/opening line
   - Key points to cover
   - Call-to-action
   - Hashtag suggestions
   - Visual concept description
   - Best posting time
   - Engagement prompt (question to ask audience)

2. **Weekly Themes** - Structure the month:
   - Week 1 theme and focus
   - Week 2 theme and focus
   - Week 3 theme and focus
   - Week 4 theme and focus
   - How themes build on each other

3. **Content Batching Guide** - Organize production:
   - Which content to create together (batch days)
   - Production schedule (when to create what)
   - Required assets for each batch
   - Time estimates for each batch

4. **Platform-Specific Adaptations** - Show how to repurpose:
   - How to adapt one piece of content for multiple platforms
   - Platform-specific variations
   - Cross-promotion strategies

5. **Engagement Plan** - For each week:
   - Community engagement activities
   - Response strategies
   - Conversation starters
   - Collaboration opportunities

**Output Format:**
Please provide a detailed calendar in table format that I can easily copy into a spreadsheet or project management tool. Include specific, actionable content ideas I can execute immediately.`,
        promptZh: `基于我的社交媒体策略，我需要一个详细的 30 天内容日历，我可以立即执行。

**我的设置：**
- 优先平台：[例如：Instagram、LinkedIn、TikTok]
- 内容支柱：[你从上一步得到的 3-5 个支柱]
- 发布频率：[每个平台每周多少次]
- 团队能力：[独立、小团队等]
- 当前事件/发布：[要围绕的任何特定日期或事件]

**请创建：**

1. **30 天内容日历** - 对于每一天，提供：
   - 日期和星期几
   - 要发布的平台
   - 内容支柱
   - 帖子类型/格式（轮播、视频、单图、文本等）
   - 内容主题/角度
   - 钩子/开头行
   - 要涵盖的关键点
   - 行动号召
   - 标签建议
   - 视觉概念描述
   - 最佳发布时间
   - 参与提示（向受众提问）

2. **每周主题** - 构建月份：
   - 第 1 周主题和重点
   - 第 2 周主题和重点
   - 第 3 周主题和重点
   - 第 4 周主题和重点
   - 主题如何相互建立

3. **内容批处理指南** - 组织制作：
   - 哪些内容一起创建（批处理日）
   - 制作时间表（何时创建什么）
   - 每个批次所需的资产
   - 每个批次的时间估计

4. **平台特定调整** - 显示如何重新利用：
   - 如何为多个平台调整一件内容
   - 平台特定的变化
   - 交叉推广策略

5. **参与计划** - 对于每周：
   - 社区参与活动
   - 响应策略
   - 对话启动器
   - 合作机会

**输出格式：**
请以表格格式提供详细的日历，我可以轻松复制到电子表格或项目管理工具中。包含我可以立即执行的具体、可操作的内容想法。`,
      },
    ],
  },
  "4": {
    id: 4,
    title: "Email Marketing Campaign Builder",
    titleZh: "电子邮件营销活动构建器",
    category: "Marketing",
    tier: "Core",
    description:
      "Design and write high-converting email campaigns from welcome sequences to promotional campaigns with proven frameworks.",
    descriptionZh: "使用经过验证的框架设计和撰写高转化的电子邮件活动，从欢迎序列到促销活动。",
    steps: [
      {
        title: "Email Strategy & Audience Segmentation",
        titleZh: "电子邮件策略与受众细分",
        description:
          "Define your email marketing strategy and segment your audience for targeted campaigns.",
        descriptionZh: "定义你的电子邮件营销策略并细分你的受众以进行有针对性的活动。",
        prompt: `I need to build an effective email marketing strategy that drives engagement and conversions.

**My Business:**
- Product/Service: [What you offer]
- Target audience: [Who you're emailing]
- Email list size: [Current subscribers, or starting from zero]
- Business goals: [Sales, engagement, education, retention, etc.]
- Current email setup: [ESP you use, if any]

**My Email Types Needed:**
- [ ] Welcome sequence (for new subscribers)
- [ ] Nurture sequence (building relationship)
- [ ] Sales/promotional emails
- [ ] Newsletter
- [ ] Re-engagement campaign
- [ ] Post-purchase sequence
- [ ] Other: [specify]

**Please provide:**

1. **Email Marketing Strategy Framework** - Define:
   - Overall email marketing goals
   - Key performance indicators (open rate, click rate, conversion rate targets)
   - Email frequency strategy (how often to send)
   - Content mix (educational vs. promotional ratio)
   - Brand voice and tone for emails
   - Compliance considerations (GDPR, CAN-SPAM, etc.)

2. **Audience Segmentation Strategy** - Create segments:
   - Segment 1: [Name, characteristics, needs, email approach]
   - Segment 2: [Name, characteristics, needs, email approach]
   - Segment 3: [Name, characteristics, needs, email approach]
   - Behavioral triggers for segmentation
   - How to personalize for each segment
   - When to move subscribers between segments

3. **Email Sequence Architecture** - For each email type you need:
   - Sequence purpose and goal
   - Number of emails in sequence
   - Timing between emails
   - Success metrics
   - Exit criteria (when someone leaves the sequence)

4. **Subject Line Formulas** - Provide:
   - 10 proven subject line templates
   - Personalization strategies
   - A/B testing recommendations
   - What to avoid (spam triggers)
   - Examples for your business

5. **Email Copywriting Framework** - Teach:
   - Opening hook formulas
   - Body structure (AIDA, PAS, etc.)
   - Storytelling techniques
   - Benefit-focused writing
   - Call-to-action best practices
   - Email length guidelines
   - Formatting for readability

6. **Design & Layout Guidelines** - Recommend:
   - Email template structure
   - Visual hierarchy
   - Mobile optimization
   - Image vs. text balance
   - Button design and placement
   - Signature and footer elements

7. **Deliverability Best Practices** - Ensure:
   - List hygiene practices
   - Authentication setup (SPF, DKIM, DMARC)
   - Spam score optimization
   - Engagement tactics to improve deliverability
   - Re-engagement strategies for inactive subscribers
   - When to remove subscribers

8. **Testing & Optimization Plan** - Create:
   - What to A/B test (subject lines, send times, content, CTAs)
   - How to analyze results
   - Optimization cycle (how often to test and iterate)
   - Benchmarks to aim for

**Output Format:**
Please provide a comprehensive email marketing strategy document with clear frameworks, templates, and actionable recommendations I can implement immediately.`,
        promptZh: `我需要建立一个有效的电子邮件营销策略，推动参与和转化。

**我的业务：**
- 产品/服务：[你提供什么]
- 目标受众：[你给谁发电子邮件]
- 电子邮件列表大小：[当前订阅者，或从零开始]
- 业务目标：[销售、参与、教育、保留等]
- 当前电子邮件设置：[你使用的 ESP，如果有的话]

**我需要的电子邮件类型：**
- [ ] 欢迎序列（针对新订阅者）
- [ ] 培育序列（建立关系）
- [ ] 销售/促销电子邮件
- [ ] 新闻通讯
- [ ] 重新参与活动
- [ ] 购买后序列
- [ ] 其他：[指定]

**请提供：**

1. **电子邮件营销策略框架** - 定义：
   - 整体电子邮件营销目标
   - 关键绩效指标（打开率、点击率、转化率目标）
   - 电子邮件频率策略（多久发送一次）
   - 内容组合（教育性 vs. 促销性比例）
   - 电子邮件的品牌声音和语气
   - 合规考虑（GDPR、CAN-SPAM 等）

2. **受众细分策略** - 创建细分：
   - 细分 1：[名称、特征、需求、电子邮件方法]
   - 细分 2：[名称、特征、需求、电子邮件方法]
   - 细分 3：[名称、特征、需求、电子邮件方法]
   - 细分的行为触发器
   - 如何为每个细分个性化
   - 何时在细分之间移动订阅者

3. **电子邮件序列架构** - 对于你需要的每种电子邮件类型：
   - 序列目的和目标
   - 序列中的电子邮件数量
   - 电子邮件之间的时间
   - 成功指标
   - 退出标准（某人何时离开序列）

4. **主题行公式** - 提供：
   - 10 个经过验证的主题行模板
   - 个性化策略
   - A/B 测试建议
   - 要避免的内容（垃圾邮件触发器）
   - 你的业务示例

5. **电子邮件文案框架** - 教授：
   - 开头钩子公式
   - 正文结构（AIDA、PAS 等）
   - 讲故事技巧
   - 以利益为中心的写作
   - 行动号召最佳实践
   - 电子邮件长度指南
   - 可读性格式

6. **设计与布局指南** - 推荐：
   - 电子邮件模板结构
   - 视觉层次
   - 移动优化
   - 图像 vs. 文本平衡
   - 按钮设计和放置
   - 签名和页脚元素

7. **可送达性最佳实践** - 确保：
   - 列表卫生实践
   - 身份验证设置（SPF、DKIM、DMARC）
   - 垃圾邮件分数优化
   - 改善可送达性的参与策略
   - 针对不活跃订阅者的重新参与策略
   - 何时删除订阅者

8. **测试与优化计划** - 创建：
   - 要 A/B 测试什么（主题行、发送时间、内容、CTA）
   - 如何分析结果
   - 优化周期（多久测试和迭代一次）
   - 要达到的基准

**输出格式：**
请提供一个全面的电子邮件营销策略文档，包含清晰的框架、模板和我可以立即实施的可操作建议。`,
      },
    ],
  },
  "5": {
    id: 5,
    title: "SEO Content Optimization Framework",
    titleZh: "SEO 内容优化框架",
    category: "Marketing",
    tier: "Core",
    description:
      "Optimize your content for search engines with keyword research, on-page SEO, and content structure strategies.",
    descriptionZh: "通过关键词研究、页面 SEO 和内容结构策略优化你的搜索引擎内容。",
    steps: [
      {
        title: "Keyword Research & Search Intent Analysis",
        titleZh: "关键词研究与搜索意图分析",
        description: "Discover high-value keywords and understand what searchers really want.",
        descriptionZh: "发现高价值关键词并了解搜索者真正想要什么。",
        prompt: `I need to optimize my content for search engines and drive organic traffic.

**My Business:**
- Industry/Niche: [Your industry]
- Target audience: [Who you want to reach]
- Current website: [URL if you have one]
- Main topics: [What you write about]
- Business goals: [Traffic, leads, sales, authority]
- Competitors: [3-5 competitor websites]

**My SEO Situation:**
- Current organic traffic: [Monthly visitors, or "starting from zero"]
- Existing content: [Number of pages/posts]
- Domain age: [How old is your site]
- Backlink profile: [Strong, weak, or unknown]

**Please provide:**

1. **Keyword Research Strategy** - Identify:
   - Primary keywords (high volume, high competition)
   - Secondary keywords (medium volume, medium competition)
   - Long-tail keywords (low volume, low competition, high intent)
   - Question-based keywords (what people ask)
   - Comparison keywords (X vs Y)
   - Local keywords (if applicable)
   - Seasonal keywords (if applicable)
   - For each keyword category, provide 10-20 examples

2. **Search Intent Analysis** - For your main keywords, analyze:
   - Informational intent (learning/research)
   - Navigational intent (finding specific site)
   - Transactional intent (ready to buy)
   - Commercial investigation (comparing options)
   - What type of content ranks for each keyword
   - What format works best (guide, listicle, comparison, etc.)
   - What depth is required (word count, comprehensiveness)

3. **Keyword Difficulty & Opportunity Assessment** - Evaluate:
   - Which keywords you can realistically rank for
   - Quick win opportunities (low competition, decent volume)
   - Long-term targets (high value, high competition)
   - Keyword gaps (what competitors rank for that you don't)
   - Content opportunities (keywords with weak existing content)

4. **Content Cluster Strategy** - Design:
   - Pillar page topics (comprehensive, authoritative content)
   - Cluster topics for each pillar (supporting content)
   - Internal linking structure
   - How to build topical authority
   - Content creation priority order

5. **On-Page SEO Checklist** - Provide guidelines for:
   - Title tag optimization (formulas and examples)
   - Meta description writing (templates)
   - Header structure (H1, H2, H3 hierarchy)
   - Keyword placement (where and how often)
   - Image optimization (alt text, file names, compression)
   - URL structure (best practices)
   - Internal linking (how many, where, anchor text)
   - External linking (when and how)
   - Schema markup recommendations
   - Page speed considerations

6. **Content Structure for SEO** - Recommend:
   - Optimal content length for different keyword types
   - Introduction formulas that hook readers and satisfy search intent
   - How to structure body content (sections, subsections)
   - How to use bullet points and lists effectively
   - How to incorporate keywords naturally
   - How to add semantic keywords and LSI terms
   - How to create compelling conclusions with CTAs

7. **Featured Snippet Optimization** - Strategies for:
   - Identifying snippet opportunities
   - Formatting content for snippets (paragraphs, lists, tables)
   - Question-and-answer formatting
   - Definition formatting
   - Step-by-step formatting

8. **Content Optimization Workflow** - Create a process:
   - Pre-writing: keyword research and outline creation
   - During writing: SEO best practices to follow
   - Post-writing: optimization checklist
   - Publishing: technical SEO checks
   - Post-publishing: monitoring and updating

9. **Competitive Content Analysis** - For your top 3 competitors:
   - What keywords they rank for
   - What content formats they use
   - What's working for them
   - What gaps you can exploit
   - How to differentiate your content

10. **SEO Metrics & Tracking** - Define:
   - What to track (rankings, traffic, conversions)
   - Tools to use (free and paid options)
   - How often to check metrics
   - When to update/refresh content
   - Success benchmarks

**Output Format:**
Please provide a comprehensive SEO content optimization guide with specific keyword recommendations, templates, checklists, and actionable strategies I can implement immediately.`,
        promptZh: `我需要为搜索引擎优化我的内容并推动自然流量。

**我的业务：**
- 行业/细分市场：[你的行业]
- 目标受众：[你想接触谁]
- 当前网站：[如果你有的话，URL]
- 主要主题：[你写什么]
- 业务目标：[流量、潜在客户、销售、权威]
- 竞争对手：[3-5 个竞争对手网站]

**我的 SEO 情况：**
- 当前自然流量：[每月访问者，或"从零开始"]
- 现有内容：[页面/帖子数量]
- 域名年龄：[你的网站有多老]
- 反向链接配置文件：[强、弱或未知]

**请提供：**

1. **关键词研究策略** - 识别：
   - 主要关键词（高搜索量、高竞争）
   - 次要关键词（中等搜索量、中等竞争）
   - 长尾关键词（低搜索量、低竞争、高意图）
   - 基于问题的关键词（人们问什么）
   - 比较关键词（X vs Y）
   - 本地关键词（如适用）
   - 季节性关键词（如适用）
   - 对于每个关键词类别，提供 10-20 个示例

2. **搜索意图分析** - 对于你的主要关键词，分析：
   - 信息意图（学习/研究）
   - 导航意图（查找特定网站）
   - 交易意图（准备购买）
   - 商业调查（比较选项）
   - 每个关键词排名的内容类型
   - 最有效的格式（指南、列表、比较等）
   - 所需的深度（字数、全面性）

3. **关键词难度与机会评估** - 评估：
   - 你可以实际排名的关键词
   - 快速获胜机会（低竞争、不错的搜索量）
   - 长期目标（高价值、高竞争）
   - 关键词空白（竞争对手排名但你没有的）
   - 内容机会（现有内容薄弱的关键词）

4. **内容集群策略** - 设计：
   - 支柱页面主题（全面、权威的内容）
   - 每个支柱的集群主题（支持内容）
   - 内部链接结构
   - 如何建立主题权威
   - 内容创建优先顺序

5. **页面 SEO 检查清单** - 提供指南：
   - 标题标签优化（公式和示例）
   - 元描述撰写（模板）
   - 标题结构（H1、H2、H3 层次结构）
   - 关键词放置（在哪里以及多久一次）
   - 图像优化（alt 文本、文件名、压缩）
   - URL 结构（最佳实践）
   - 内部链接（多少个、在哪里、锚文本）
   - 外部链接（何时以及如何）
   - Schema 标记建议
   - 页面速度考虑

6. **SEO 内容结构** - 推荐：
   - 不同关键词类型的最佳内容长度
   - 吸引读者并满足搜索意图的介绍公式
   - 如何构建正文内容（部分、子部分）
   - 如何有效使用项目符号和列表
   - 如何自然地融入关键词
   - 如何添加语义关键词和 LSI 术语
   - 如何创建带有 CTA 的引人注目的结论

7. **精选片段优化** - 策略：
   - 识别片段机会
   - 为片段格式化内容（段落、列表、表格）
   - 问答格式
   - 定义格式
   - 分步格式

8. **内容优化工作流** - 创建流程：
   - 写作前：关键词研究和大纲创建
   - 写作期间：要遵循的 SEO 最佳实践
   - 写作后：优化检查清单
   - 发布：技术 SEO 检查
   - 发布后：监控和更新

9. **竞争内容分析** - 对于你的前 3 个竞争对手：
   - 他们排名的关键词
   - 他们使用的内容格式
   - 什么对他们有效
   - 你可以利用的空白
   - 如何区分你的内容

10. **SEO 指标与跟踪** - 定义：
   - 要跟踪什么（排名、流量、转化）
   - 要使用的工具（免费和付费选项）
   - 多久检查一次指标
   - 何时更新/刷新内容
   - 成功基准

**输出格式：**
请提供一个全面的 SEO 内容优化指南，包含具体的关键词建议、模板、检查清单和我可以立即实施的可操作策略。`,
      },
    ],
  },
  "6": {
    id: 6,
    title: "Product Launch Strategy & Execution Plan",
    titleZh: "产品发布策略与执行计划",
    category: "Strategy",
    tier: "Plus",
    description:
      "Plan and execute a successful product launch with pre-launch, launch day, and post-launch strategies.",
    descriptionZh: "通过预发布、发布日和发布后策略规划并执行成功的产品发布。",
    steps: [
      {
        title: "Pre-Launch Strategy & Audience Building",
        titleZh: "预发布策略与受众建设",
        description: "Build anticipation and gather an audience before your product launch.",
        descriptionZh: "在产品发布前建立期待并聚集受众。",
        prompt: `I'm preparing to launch a new product and need a comprehensive launch strategy.

**My Product:**
- Product name: [Your product name]
- What it does: [Core functionality/benefit]
- Target audience: [Who it's for]
- Price point: [Pricing strategy]
- Unique selling proposition: [What makes it different]
- Launch date: [Target date or timeframe]

**My Current Situation:**
- Audience size: [Email list, social followers, etc.]
- Budget: [Available budget for launch]
- Team: [Solo, small team, etc.]
- Competition: [Main competitors]
- Previous launches: [Any experience or lessons learned]

**Please provide:**

1. **Launch Timeline & Milestones** - Create a detailed timeline:
   - 90 days before launch: [Key activities]
   - 60 days before launch: [Key activities]
   - 30 days before launch: [Key activities]
   - 14 days before launch: [Key activities]
   - 7 days before launch: [Key activities]
   - Launch day: [Hour-by-hour plan]
   - Week 1 post-launch: [Key activities]
   - Week 2-4 post-launch: [Key activities]
   - Critical milestones and deadlines

2. **Pre-Launch Audience Building** - Strategies for:
   - Building an email waitlist (tactics and tools)
   - Creating buzz on social media
   - Content marketing approach (what to publish)
   - Partnership and collaboration opportunities
   - Beta testing program (how to recruit and manage)
   - Early access/VIP program design
   - Referral incentives
   - Community building activities

3. **Launch Messaging & Positioning** - Develop:
   - Core launch message (the big idea)
   - Value proposition statement
   - Key benefits to emphasize
   - Objection handling (common concerns and responses)
   - Comparison positioning (vs. competitors or alternatives)
   - Pricing justification
   - Urgency and scarcity elements
   - Social proof strategy

4. **Launch Day Execution Plan** - Hour-by-hour:
   - Pre-launch checklist (what to verify before going live)
   - Launch sequence (what to do in what order)
   - Email campaign schedule
   - Social media posting schedule
   - Partner/affiliate activation
   - PR and media outreach
   - Community engagement plan
   - Customer support readiness
   - Technical monitoring (what to watch)

5. **Multi-Channel Launch Strategy** - For each channel:
   - Email: sequence structure and content
   - Social media: platform-specific tactics
   - Website: landing page optimization
   - Paid ads: targeting and creative strategy (if budget allows)
   - PR: media pitch and press release
   - Partnerships: collaboration activation
   - Community: engagement tactics
   - Content: blog posts, videos, podcasts

6. **Launch Incentives & Offers** - Design:
   - Early bird pricing strategy
   - Launch bonuses (what to include)
   - Limited-time offers
   - Tiered pricing options
   - Bundle opportunities
   - Referral rewards
   - Guarantee/risk reversal
   - Payment plans (if applicable)

7. **Social Proof & Credibility Building** - Gather:
   - Beta tester testimonials
   - Case studies and results
   - Expert endorsements
   - Media mentions
   - Social proof elements (user counts, ratings, etc.)
   - Trust badges and certifications
   - Behind-the-scenes content

8. **Post-Launch Momentum Strategy** - Maintain excitement:
   - Week 1 activities (keeping energy high)
   - Week 2-4 activities (sustaining momentum)
   - Content calendar for first month
   - Customer onboarding excellence
   - Feedback collection and iteration
   - Case study development
   - Referral program activation
   - Upsell/cross-sell opportunities

9. **Launch Metrics & Success Tracking** - Define:
   - Pre-launch metrics (waitlist growth, engagement)
   - Launch day metrics (sales, traffic, conversions)
   - Post-launch metrics (retention, satisfaction, referrals)
   - Daily tracking dashboard
   - When to pivot or adjust
   - Success benchmarks

10. **Risk Mitigation & Contingency Plans** - Prepare for:
   - Technical issues (website crash, payment problems)
   - Low initial response (backup tactics)
   - Negative feedback (response protocol)
   - Competitor reactions (counter-strategies)
   - Supply/capacity issues (if applicable)
   - Communication breakdowns (backup plans)

**Output Format:**
Please provide a comprehensive product launch playbook with detailed timelines, checklists, templates, and specific tactics I can execute for a successful launch.`,
        promptZh: `我正在准备发布一个新产品，需要一个全面的发布策略。

**我的产品：**
- 产品名称：[你的产品名称]
- 它做什么：[核心功能/好处]
- 目标受众：[它是为谁设计的]
- 价格点：[定价策略]
- 独特卖点：[是什么让它与众不同]
- 发布日期：[目标日期或时间框架]

**我的当前情况：**
- 受众规模：[电子邮件列表、社交粉丝等]
- 预算：[可用于发布的预算]
- 团队：[独立、小团队等]
- 竞争：[主要竞争对手]
- 以前的发布：[任何经验或教训]

**请提供：**

1. **发布时间表与里程碑** - 创建详细的时间表：
   - 发布前 90 天：[关键活动]
   - 发布前 60 天：[关键活动]
   - 发布前 30 天：[关键活动]
   - 发布前 14 天：[关键活动]
   - 发布前 7 天：[关键活动]
   - 发布日：[逐小时计划]
   - 发布后第 1 周：[关键活动]
   - 发布后第 2-4 周：[关键活动]
   - 关键里程碑和截止日期

2. **预发布受众建设** - 策略：
   - 建立电子邮件等待列表（策略和工具）
   - 在社交媒体上制造话题
   - 内容营销方法（发布什么）
   - 合作伙伴和协作机会
   - Beta 测试计划（如何招募和管理）
   - 早期访问/VIP 计划设计
   - 推荐激励
   - 社区建设活动

3. **发布信息与定位** - 开发：
   - 核心发布信息（大创意）
   - 价值主张声明
   - 要强调的关键好处
   - 异议处理（常见问题和回应）
   - 比较定位（vs. 竞争对手或替代品）
   - 定价理由
   - 紧迫性和稀缺性元素
   - 社会证明策略

4. **发布日执行计划** - 逐小时：
   - 预发布检查清单（上线前要验证什么）
   - 发布顺序（按什么顺序做什么）
   - 电子邮件活动时间表
   - 社交媒体发布时间表
   - 合作伙伴/联盟激活
   - PR 和媒体外展
   - 社区参与计划
   - 客户支持准备
   - 技术监控（要观察什么）

5. **多渠道发布策略** - 对于每个渠道：
   - 电子邮件：序列结构和内容
   - 社交媒体：平台特定策略
   - 网站：着陆页优化
   - 付费广告：定位和创意策略（如果预算允许）
   - PR：媒体推介和新闻稿
   - 合作伙伴关系：协作激活
   - 社区：参与策略
   - 内容：博客文章、视频、播客

6. **发布激励与优惠** - 设计：
   - 早鸟定价策略
   - 发布奖金（包含什么）
   - 限时优惠
   - 分层定价选项
   - 捆绑机会
   - 推荐奖励
   - 保证/风险逆转
   - 付款计划（如适用）

7. **社会证明与可信度建设** - 收集：
   - Beta 测试者推荐
   - 案例研究和结果
   - 专家背书
   - 媒体提及
   - 社会证明元素（用户数量、评分等）
   - 信任徽章和认证
   - 幕后内容

8. **发布后动力策略** - 保持兴奋：
   - 第 1 周活动（保持高能量）
   - 第 2-4 周活动（维持动力）
   - 第一个月的内容日历
   - 客户入职卓越
   - 反馈收集和迭代
   - 案例研究开发
   - 推荐计划激活
   - 追加销售/交叉销售机会

9. **发布指标与成功跟踪** - 定义：
   - 预发布指标（等待列表增长、参与度）
   - 发布日指标（销售、流量、转化）
   - 发布后指标（保留、满意度、推荐）
   - 每日跟踪仪表板
   - 何时调整或调整
   - 成功基准

10. **风险缓解与应急计划** - 准备：
   - 技术问题（网站崩溃、支付问题）
   - 初始响应低（备用策略）
   - 负面反馈（响应协议）
   - 竞争对手反应（反策略）
   - 供应/容量问题（如适用）
   - 沟通故障（备用计划）

**输出格式：**
请提供一个全面的产品发布手册，包含详细的时间表、检查清单、模板和我可以执行的具体策略，以实现成功的发布。`,
      },
    ],
  },
  "7": {
    id: 7,
    title: "User Growth Hacking Playbook",
    titleZh: "用户增长黑客手册",
    category: "Marketing",
    tier: "Plus",
    description:
      "Implement proven growth hacking tactics to rapidly acquire and retain users with creative, low-cost strategies.",
    descriptionZh: "实施经过验证的增长黑客策略，通过创意、低成本策略快速获取和保留用户。",
    steps: [
      {
        title: "Growth Funnel Analysis & Optimization",
        titleZh: "增长漏斗分析与优化",
        description:
          "Map your growth funnel and identify the highest-impact optimization opportunities.",
        descriptionZh: "绘制你的增长漏斗并识别最高影响的优化机会。",
        prompt: `I need to rapidly grow my user base using creative, data-driven growth hacking strategies.

**My Product/Business:**
- What you offer: [Product/service description]
- Target users: [Who you want to acquire]
- Current user base: [Number of users/customers]
- Business model: [How you make money]
- Key metrics: [What success looks like]
- Growth stage: [Early, growth, scale]

**My Current Funnel:**
- Awareness: [How people discover you]
- Acquisition: [How they sign up/buy]
- Activation: [First valuable action]
- Retention: [How you keep them]
- Revenue: [How you monetize]
- Referral: [How they spread the word]

**My Constraints:**
- Budget: [Available for growth experiments]
- Team: [Size and skills]
- Time: [Urgency of growth]
- Technical capabilities: [What you can build]

**Please provide:**

1. **Growth Funnel Audit** - Analyze each stage:
   - Awareness: Current channels, reach, cost per impression
   - Acquisition: Conversion rates, cost per acquisition, drop-off points
   - Activation: Aha moment, time to value, activation rate
   - Retention: Churn rate, engagement metrics, retention curves
   - Revenue: ARPU, LTV, monetization rate
   - Referral: Viral coefficient, referral rate, sharing behavior
   - Identify the biggest bottleneck (where to focus first)

2. **Quick Win Growth Hacks** - Tactics you can implement this week:
   - 10 low-cost, high-impact experiments
   - For each: what it is, why it works, how to implement, expected impact
   - Prioritized by effort vs. impact
   - Examples: viral loops, referral programs, content hacks, distribution tricks

3. **Viral Growth Mechanisms** - Design:
   - Product-led growth features (built-in virality)
   - Referral program structure (incentives, mechanics, messaging)
   - Social sharing triggers (when and why users share)
   - Network effects (how to create them)
   - Viral coefficient calculation and optimization
   - K-factor improvement tactics

4. **Acquisition Channel Experiments** - Test these channels:
   - Content marketing hacks (SEO shortcuts, viral content formulas)
   - Social media growth tactics (platform-specific hacks)
   - Community infiltration (where your users hang out)
   - Partnership and integration opportunities
   - PR and media hacking (how to get coverage)
   - Paid acquisition experiments (if budget allows)
   - Unconventional channels (creative ideas specific to your niche)

5. **Activation Optimization** - Improve first experience:
   - Onboarding flow optimization (reduce friction, increase value)
   - Aha moment engineering (get users to value faster)
   - Empty state design (what users see before they have data)
   - Progressive disclosure (don't overwhelm)
   - Gamification elements (make it engaging)
   - Personalization tactics (tailor to user type)
   - Success milestones (celebrate early wins)

6. **Retention & Engagement Hacks** - Keep users coming back:
   - Email re-engagement campaigns (win-back sequences)
   - Push notification strategies (when and what to send)
   - Habit formation tactics (build routine usage)
   - Feature discovery (help users find value)
   - Community building (create belonging)
   - Streak mechanics (don't break the chain)
   - Churn prediction and prevention

7. **Referral & Word-of-Mouth Amplification** - Make sharing easy:
   - Referral program design (double-sided incentives)
   - Social proof integration (show popularity)
   - Shareable moments (when users want to share)
   - Referral messaging templates (what to say)
   - Tracking and attribution (measure referrals)
   - Ambassador/advocate programs (power users)
   - User-generated content strategies

8. **Growth Experimentation Framework** - Systematic testing:
   - How to generate growth ideas (brainstorming frameworks)
   - How to prioritize experiments (ICE score: Impact, Confidence, Ease)
   - How to design experiments (hypothesis, metrics, success criteria)
   - How to run experiments (duration, sample size, controls)
   - How to analyze results (statistical significance, learnings)
   - How to scale winners (from test to full rollout)
   - Experiment velocity (how many tests per week/month)

9. **Data-Driven Growth Tactics** - Use analytics:
   - Key metrics dashboard (what to track daily)
   - Cohort analysis (understand user behavior over time)
   - Funnel analysis (where users drop off)
   - A/B testing priorities (what to test first)
   - User segmentation (different tactics for different users)
   - Predictive analytics (who will churn, who will convert)
   - Growth accounting (new, retained, resurrected, churned)

10. **Unconventional Growth Hacks** - Creative tactics:
   - Platform arbitrage (exploit new platforms early)
   - Controversy marketing (calculated risk-taking)
   - Scarcity and exclusivity (FOMO tactics)
   - Trojan horse strategies (enter through side door)
   - Aggregation plays (become the hub)
   - API and integration hacks (piggyback on others)
   - Community takeovers (strategic infiltration)

11. **Growth Stack & Tools** - Recommend:
   - Analytics tools (free and paid)
   - A/B testing tools
   - Email and automation tools
   - Referral program tools
   - User research tools
   - Growth experiment tracking
   - Budget allocation by tool

12. **30-Day Growth Sprint Plan** - Week-by-week:
   - Week 1: Audit and quick wins
   - Week 2: Acquisition experiments
   - Week 3: Activation and retention
   - Week 4: Referral and scale
   - Daily activities and milestones
   - Success metrics for each week

**Output Format:**
Please provide a comprehensive growth hacking playbook with specific tactics, experiment designs, implementation guides, and a prioritized action plan I can execute immediately to drive rapid user growth.`,
        promptZh: `我需要使用创意、数据驱动的增长黑客策略快速增长我的用户群。

**我的产品/业务：**
- 你提供什么：[产品/服务描述]
- 目标用户：[你想获取谁]
- 当前用户群：[用户/客户数量]
- 商业模式：[你如何赚钱]
- 关键指标：[成功是什么样子]
- 增长阶段：[早期、增长、规模]

**我的当前漏斗：**
- 意识：[人们如何发现你]
- 获取：[他们如何注册/购买]
- 激活：[第一个有价值的行动]
- 保留：[你如何留住他们]
- 收入：[你如何变现]
- 推荐：[他们如何传播]

**我的限制：**
- 预算：[可用于增长实验]
- 团队：[规模和技能]
- 时间：[增长的紧迫性]
- 技术能力：[你可以构建什么]

**请提供：**

1. **增长漏斗审计** - 分析每个阶段：
   - 意识：当前渠道、覆盖、每次展示成本
   - 获取：转化率、每次获取成本、流失点
   - 激活：啊哈时刻、价值时间、激活率
   - 保留：流失率、参与度指标、保留曲线
   - 收入：ARPU、LTV、变现率
   - 推荐：病毒系数、推荐率、分享行为
   - 识别最大的瓶颈（首先关注哪里）

2. **快速获胜增长黑客** - 你本周可以实施的策略：
   - 10 个低成本、高影响的实验
   - 对于每个：它是什么、为什么有效、如何实施、预期影响
   - 按努力 vs. 影响优先排序
   - 示例：病毒循环、推荐计划、内容黑客、分发技巧

3. **病毒增长机制** - 设计：
   - 产品主导的增长功能（内置病毒性）
   - 推荐计划结构（激励、机制、信息传递）
   - 社交分享触发器（用户何时以及为什么分享）
   - 网络效应（如何创建它们）
   - 病毒系数计算和优化
   - K 因子改进策略

4. **获取渠道实验** - 测试这些渠道：
   - 内容营销黑客（SEO 捷径、病毒内容公式）
   - 社交媒体增长策略（平台特定黑客）
   - 社区渗透（你的用户在哪里闲逛）
   - 合作伙伴和集成机会
   - PR 和媒体黑客（如何获得报道）
   - 付费获取实验（如果预算允许）
   - 非常规渠道（特定于你的细分市场的创意想法）

5. **激活优化** - 改善第一次体验：
   - 入职流程优化（减少摩擦、增加价值）
   - 啊哈时刻工程（让用户更快地获得价值）
   - 空状态设计（用户在拥有数据之前看到什么）
   - 渐进式披露（不要压倒）
   - 游戏化元素（使其引人入胜）
   - 个性化策略（根据用户类型定制）
   - 成功里程碑（庆祝早期胜利）

6. **保留与参与黑客** - 让用户回来：
   - 电子邮件重新参与活动（赢回序列）
   - 推送通知策略（何时以及发送什么）
   - 习惯形成策略（建立常规使用）
   - 功能发现（帮助用户找到价值）
   - 社区建设（创造归属感）
   - 连续机制（不要打破链条）
   - 流失预测和预防

7. **推荐与口碑放大** - 使分享变得容易：
   - 推荐计划设计（双边激励）
   - 社会证明集成（显示受欢迎程度）
   - 可分享时刻（用户何时想分享）
   - 推荐信息模板（要说什么）
   - 跟踪和归因（衡量推荐）
   - 大使/倡导者计划（超级用户）
   - 用户生成内容策略

8. **增长实验框架** - 系统测试：
   - 如何产生增长想法（头脑风暴框架）
   - 如何优先考虑实验（ICE 分数：影响、信心、容易）
   - 如何设计实验（假设、指标、成功标准）
   - 如何运行实验（持续时间、样本大小、对照）
   - 如何分析结果（统计显著性、学习）
   - 如何扩展获胜者（从测试到全面推出）
   - 实验速度（每周/月多少次测试）

9. **数据驱动的增长策略** - 使用分析：
   - 关键指标仪表板（每天跟踪什么）
   - 队列分析（随时间了解用户行为）
   - 漏斗分析（用户在哪里流失）
   - A/B 测试优先级（首先测试什么）
   - 用户细分（不同用户的不同策略）
   - 预测分析（谁会流失、谁会转化）
   - 增长会计（新、保留、复活、流失）

10. **非常规增长黑客** - 创意策略：
   - 平台套利（早期利用新平台）
   - 争议营销（经过计算的冒险）
   - 稀缺性和排他性（FOMO 策略）
   - 特洛伊木马策略（通过侧门进入）
   - 聚合玩法（成为中心）
   - API 和集成黑客（搭便车）
   - 社区接管（战略渗透）

11. **增长堆栈与工具** - 推荐：
   - 分析工具（免费和付费）
   - A/B 测试工具
   - 电子邮件和自动化工具
   - 推荐计划工具
   - 用户研究工具
   - 增长实验跟踪
   - 按工具的预算分配

12. **30 天增长冲刺计划** - 逐周：
   - 第 1 周：审计和快速获胜
   - 第 2 周：获取实验
   - 第 3 周：激活和保留
   - 第 4 周：推荐和规模
   - 每日活动和里程碑
   - 每周的成功指标

**输出格式：**
请提供一个全面的增长黑客手册，包含具体策略、实验设计、实施指南和我可以立即执行的优先行动计划，以推动快速的用户增长。`,
      },
    ],
  },
  "8": {
    id: 8,
    title: "Brand Story & Messaging Framework",
    titleZh: "品牌故事与信息传递框架",
    category: "Content",
    tier: "Core",
    description:
      "Craft a compelling brand story and messaging framework that resonates with your audience and differentiates you from competitors.",
    descriptionZh:
      "打造引人入胜的品牌故事和信息传递框架，与你的受众产生共鸣并使你与竞争对手区分开来。",
    steps: [
      {
        title: "Brand Story Development",
        titleZh: "品牌故事开发",
        description:
          "Create your authentic brand story that connects emotionally with your audience.",
        descriptionZh: "创建与你的受众情感连接的真实品牌故事。",
        prompt: `I need to develop a compelling brand story and messaging framework that resonates with my audience.

**My Business:**
- Company/Brand name: [Your name]
- What you do: [Products/services]
- Target audience: [Who you serve]
- Mission: [Why you exist]
- Values: [What you stand for]
- Unique qualities: [What makes you different]

**My Story Elements:**
- Origin story: [How you started, why you started]
- Challenges overcome: [Obstacles you've faced]
- Key milestones: [Important achievements]
- Customer impact: [How you've helped people]
- Future vision: [Where you're going]

**Please create:**

1. **Brand Story Framework** - Develop:
   - Origin story (the founding moment)
   - The problem you discovered (what you saw that others didn't)
   - Your unique insight (your aha moment)
   - The solution you created (your approach)
   - The transformation you enable (customer outcomes)
   - Your mission and vision (why you exist, where you're going)
   - Your values in action (what you stand for, with examples)

2. **Messaging Architecture** - Build:
   - Brand positioning statement (one sentence)
   - Value proposition (what you offer and why it matters)
   - Elevator pitch (30 seconds)
   - Extended pitch (2 minutes)
   - Tagline options (5-10 memorable phrases)
   - Key messages (3-5 core messages to repeat)
   - Proof points (evidence that supports your claims)

3. **Audience-Specific Messaging** - Tailor for each segment:
   - Segment 1: [Name, their pain points, your message to them]
   - Segment 2: [Name, their pain points, your message to them]
   - Segment 3: [Name, their pain points, your message to them]
   - How to adapt core story for each audience

4. **Brand Voice & Tone Guidelines** - Define:
   - Brand personality (3-5 adjectives)
   - Voice characteristics (how you always sound)
   - Tone variations (how you adapt to context)
   - Language do's and don'ts
   - Example phrases that fit your voice
   - Example phrases that don't fit

5. **Storytelling Templates** - Provide:
   - Customer success story template
   - Product/feature announcement template
   - Behind-the-scenes story template
   - Challenge/solution story template
   - Vision/future story template
   - Personal story template

**Output Format:**
Please provide a comprehensive brand story and messaging guide with specific examples, templates, and guidelines I can use across all communications.`,
        promptZh: `我需要开发一个引人入胜的品牌故事和信息传递框架，与我的受众产生共鸣。

**我的业务：**
- 公司/品牌名称：[你的名称]
- 你做什么：[产品/服务]
- 目标受众：[你服务谁]
- 使命：[你为什么存在]
- 价值观：[你代表什么]
- 独特品质：[是什么让你与众不同]

**我的故事元素：**
- 起源故事：[你如何开始、为什么开始]
- 克服的挑战：[你面临的障碍]
- 关键里程碑：[重要成就]
- 客户影响：[你如何帮助人们]
- 未来愿景：[你要去哪里]

**请创建：**

1. **品牌故事框架** - 开发：
   - 起源故事（创立时刻）
   - 你发现的问题（你看到了别人没看到的）
   - 你的独特见解（你的啊哈时刻）
   - 你创建的解决方案（你的方法）
   - 你实现的转变（客户成果）
   - 你的使命和愿景（你为什么存在、你要去哪里）
   - 你的价值观在行动中（你代表什么，带示例）

2. **信息传递架构** - 构建：
   - 品牌定位声明（一句话）
   - 价值主张（你提供什么以及为什么重要）
   - 电梯演讲（30 秒）
   - 扩展演讲（2 分钟）
   - 标语选项（5-10 个令人难忘的短语）
   - 关键信息（3-5 个要重复的核心信息）
   - 证明点（支持你的主张的证据）

3. **受众特定信息传递** - 为每个细分定制：
   - 细分 1：[名称、他们的痛点、你给他们的信息]
   - 细分 2：[名称、他们的痛点、你给他们的信息]
   - 细分 3：[名称、他们的痛点、你给他们的信息]
   - 如何为每个受众调整核心故事

4. **品牌声音与语气指南** - 定义：
   - 品牌个性（3-5 个形容词）
   - 声音特征（你总是如何听起来）
   - 语气变化（你如何适应上下文）
   - 语言该做和不该做的事
   - 适合你声音的示例短语
   - 不适合的示例短语

5. **讲故事模板** - 提供：
   - 客户成功故事模板
   - 产品/功能公告模板
   - 幕后故事模板
   - 挑战/解决方案故事模板
   - 愿景/未来故事模板
   - 个人故事模板

**输出格式：**
请提供一个全面的品牌故事和信息传递指南，包含我可以在所有沟通中使用的具体示例、模板和指南。`,
      },
    ],
  },
  "9": {
    id: 9,
    title: "Business Plan & Financial Projections",
    titleZh: "商业计划书与财务预测",
    category: "Strategy",
    tier: "Pro",
    description:
      "Create a comprehensive business plan with market analysis, strategy, operations plan, and detailed financial projections.",
    descriptionZh: "创建一个全面的商业计划书，包含市场分析、策略、运营计划和详细的财务预测。",
    steps: [
      {
        title: "Executive Summary & Business Model",
        titleZh: "执行摘要与商业模式",
        description: "Craft a compelling executive summary and define your business model.",
        descriptionZh: "撰写引人注目的执行摘要并定义你的商业模式。",
        prompt: `I need to create a comprehensive business plan for my venture.

**My Business:**
- Business name: [Your company name]
- Industry: [Your industry/sector]
- Business stage: [Idea, startup, growth, expansion]
- Products/Services: [What you offer]
- Target market: [Who you serve]
- Business model: [How you make money]
- Funding need: [If seeking investment, how much]

**My Team:**
- Founders: [Names, backgrounds, roles]
- Key team members: [Current team]
- Advisors: [If any]
- Gaps to fill: [Roles you need]

**My Traction (if any):**
- Revenue: [Current revenue or projections]
- Customers: [Number of customers/users]
- Growth rate: [Month-over-month or year-over-year]
- Key metrics: [Important numbers]

**Please create:**

1. **Executive Summary** - Write a compelling 1-2 page summary:
   - Business concept (what you do in one paragraph)
   - Problem and solution (what problem you solve and how)
   - Market opportunity (size and growth of market)
   - Competitive advantage (why you'll win)
   - Business model (how you make money)
   - Traction and milestones (what you've achieved)
   - Financial highlights (revenue projections, funding needs)
   - Team overview (who's building this)
   - The ask (if seeking funding, what you need and why)

2. **Business Model Canvas** - Complete all 9 blocks:
   - Customer segments (who you serve)
   - Value propositions (what you offer each segment)
   - Channels (how you reach and deliver to customers)
   - Customer relationships (how you interact and retain)
   - Revenue streams (how you make money)
   - Key resources (what you need to operate)
   - Key activities (what you do)
   - Key partnerships (who you work with)
   - Cost structure (your main costs)

3. **Market Analysis** - Research and present:
   - Market size (TAM, SAM, SOM)
   - Market trends (growth drivers, changes)
   - Customer segments (detailed profiles)
   - Customer needs and pain points
   - Buying behavior and decision process
   - Market gaps and opportunities

4. **Competitive Analysis** - Analyze:
   - Direct competitors (who they are, what they offer)
   - Indirect competitors (alternative solutions)
   - Competitive advantages (your differentiators)
   - Barriers to entry (what protects you)
   - Competitive positioning map

5. **Marketing & Sales Strategy** - Define:
   - Go-to-market strategy (how you'll launch and grow)
   - Customer acquisition channels
   - Customer acquisition cost (CAC) targets
   - Sales process and cycle
   - Pricing strategy
   - Marketing budget allocation
   - Growth projections

6. **Operations Plan** - Detail:
   - Product/service delivery process
   - Technology and infrastructure needs
   - Supply chain (if applicable)
   - Key partnerships and vendors
   - Quality control
   - Scalability plan

7. **Financial Projections (3-5 years)** - Project:
   - Revenue projections (by product/service line)
   - Cost of goods sold (COGS)
   - Operating expenses (detailed breakdown)
   - EBITDA and net income
   - Cash flow projections
   - Break-even analysis
   - Key assumptions (what drives the numbers)
   - Sensitivity analysis (best/worst case scenarios)

8. **Funding Requirements** - If seeking investment:
   - Total funding needed
   - Use of funds (detailed breakdown)
   - Funding timeline (when you need it)
   - Milestones to achieve with funding
   - Exit strategy (for investors)
   - Return projections (for investors)

9. **Risk Analysis & Mitigation** - Identify:
   - Market risks
   - Competitive risks
   - Operational risks
   - Financial risks
   - Regulatory risks
   - Mitigation strategies for each

10. **Milestones & Timeline** - Plan:
   - 6-month milestones
   - 12-month milestones
   - 24-month milestones
   - Key metrics to track
   - Success criteria

**Output Format:**
Please provide a comprehensive business plan structure with detailed guidance for each section, financial projection templates, and specific examples relevant to my business. Make it investor-ready if seeking funding, or execution-ready if bootstrapping.`,
        promptZh: `我需要为我的企业创建一个全面的商业计划书。

**我的业务：**
- 企业名称：[你的公司名称]
- 行业：[你的行业/部门]
- 业务阶段：[想法、创业、成长、扩张]
- 产品/服务：[你提供什么]
- 目标市场：[你服务谁]
- 商业模式：[你如何赚钱]
- 资金需求：[如果寻求投资，多少]

**我的团队：**
- 创始人：[姓名、背景、角色]
- 关键团队成员：[当前团队]
- 顾问：[如果有的话]
- 要填补的空白：[你需要的角色]

**我的牵引力（如果有的话）：**
- 收入：[当前收入或预测]
- 客户：[客户/用户数量]
- 增长率：[月环比或年同比]
- 关键指标：[重要数字]

**请创建：**

1. **执行摘要** - 撰写引人注目的 1-2 页摘要：
   - 业务概念（一段话说明你做什么）
   - 问题和解决方案（你解决什么问题以及如何解决）
   - 市场机会（市场规模和增长）
   - 竞争优势（你为什么会赢）
   - 商业模式（你如何赚钱）
   - 牵引力和里程碑（你已经实现了什么）
   - 财务亮点（收入预测、资金需求）
   - 团队概览（谁在建设这个）
   - 请求（如果寻求资金，你需要什么以及为什么）

2. **商业模式画布** - 完成所有 9 个模块：
   - 客户细分（你服务谁）
   - 价值主张（你为每个细分提供什么）
   - 渠道（你如何接触和交付给客户）
   - 客户关系（你如何互动和保留）
   - 收入流（你如何赚钱）
   - 关键资源（你需要什么来运营）
   - 关键活动（你做什么）
   - 关键合作伙伴关系（你与谁合作）
   - 成本结构（你的主要成本）

3. **市场分析** - 研究并呈现：
   - 市场规模（TAM、SAM、SOM）
   - 市场趋势（增长驱动因素、变化）
   - 客户细分（详细档案）
   - 客户需求和痛点
   - 购买行为和决策过程
   - 市场空白和机会

4. **竞争分析** - 分析：
   - 直接竞争对手（他们是谁、他们提供什么）
   - 间接竞争对手（替代解决方案）
   - 竞争优势（你的差异化因素）
   - 进入壁垒（什么保护你）
   - 竞争定位图

5. **营销与销售策略** - 定义：
   - 进入市场策略（你将如何启动和成长）
   - 客户获取渠道
   - 客户获取成本（CAC）目标
   - 销售流程和周期
   - 定价策略
   - 营销预算分配
   - 增长预测

6. **运营计划** - 详细说明：
   - 产品/服务交付流程
   - 技术和基础设施需求
   - 供应链（如适用）
   - 关键合作伙伴关系和供应商
   - 质量控制
   - 可扩展性计划

7. **财务预测（3-5 年）** - 预测：
   - 收入预测（按产品/服务线）
   - 销售成本（COGS）
   - 运营费用（详细细分）
   - EBITDA 和净收入
   - 现金流预测
   - 盈亏平衡分析
   - 关键假设（什么驱动数字）
   - 敏感性分析（最佳/最坏情况）

8. **资金要求** - 如果寻求投资：
   - 所需总资金
   - 资金用途（详细细分）
   - 资金时间表（你何时需要）
   - 用资金实现的里程碑
   - 退出策略（对投资者）
   - 回报预测（对投资者）

9. **风险分析与缓解** - 识别：
   - 市场风险
   - 竞争风险
   - 运营风险
   - 财务风险
   - 监管风险
   - 每个的缓解策略

10. **里程碑与时间表** - 计划：
   - 6 个月里程碑
   - 12 个月里程碑
   - 24 个月里程碑
   - 要跟踪的关键指标
   - 成功标准

**输出格式：**
请提供一个全面的商业计划书结构，包含每个部分的详细指导、财务预测模板和与我的业务相关的具体示例。如果寻求资金，使其适合投资者；如果自筹资金，使其适合执行。`,
      },
    ],
  },
  "10": {
    id: 10,
    title: "Customer Research & Validation Framework",
    titleZh: "客户研究与验证框架",
    category: "Research",
    tier: "Plus",
    description:
      "Conduct systematic customer research to validate your ideas, understand needs, and build products people actually want.",
    descriptionZh: "进行系统的客户研究以验证你的想法、了解需求并构建人们真正想要的产品。",
    steps: [
      {
        title: "Customer Discovery & Interview Strategy",
        titleZh: "客户发现与访谈策略",
        description:
          "Design and conduct effective customer interviews to uncover real needs and validate assumptions.",
        descriptionZh: "设计并进行有效的客户访谈以发现真实需求并验证假设。",
        prompt: `I need to conduct customer research to validate my business idea and understand my target customers deeply.

**My Business Idea:**
- Product/Service concept: [What you're building]
- Target customers: [Who you think will use it]
- Problem you're solving: [The pain point]
- Your solution: [How you solve it]
- Key assumptions: [What you believe to be true but haven't validated]

**My Research Goals:**
- [ ] Validate the problem exists
- [ ] Understand customer needs deeply
- [ ] Test solution concepts
- [ ] Identify willingness to pay
- [ ] Discover unexpected insights
- [ ] Other: [specify]

**My Current Knowledge:**
- What I know about customers: [Current understanding]
- What I'm unsure about: [Gaps in knowledge]
- Biggest risks: [What could invalidate the idea]

**Please provide:**

1. **Customer Research Strategy** - Design:
   - Research objectives (what you need to learn)
   - Key questions to answer
   - Hypotheses to test
   - Success criteria (what validates your idea)
   - Research methods to use (interviews, surveys, observation, etc.)
   - Sample size needed
   - Timeline and milestones

2. **Customer Segmentation for Research** - Identify:
   - Primary segment to research first
   - Secondary segments
   - How to find and recruit participants
   - Screening criteria (who qualifies)
   - Incentives to offer
   - How many interviews per segment

3. **Customer Interview Guide** - Create:
   - Interview structure (opening, body, closing)
   - Warm-up questions (build rapport)
   - Problem exploration questions (understand pain points)
   - Current solution questions (what they do now)
   - Solution validation questions (test your concept)
   - Willingness to pay questions (pricing research)
   - Closing questions (referrals, follow-up)
   - Questions to avoid (leading questions, pitching)

4. **Interview Best Practices** - Teach:
   - How to recruit participants
   - How to schedule and prepare
   - How to build rapport quickly
   - How to ask open-ended questions
   - How to dig deeper (follow-up techniques)
   - How to listen actively
   - How to take notes effectively
   - How to avoid bias
   - Red flags to watch for (false positives)

5. **Problem Validation Framework** - Test:
   - Does the problem exist? (evidence to look for)
   - How painful is it? (severity assessment)
   - How frequently does it occur? (frequency assessment)
   - What's the current workaround? (existing solutions)
   - What's the cost of the problem? (quantify impact)
   - Is it a "must-have" or "nice-to-have"? (priority assessment)

6. **Solution Validation Framework** - Test:
   - Does your solution address the problem? (fit assessment)
   - Is it better than alternatives? (competitive assessment)
   - Would they use it? (intent assessment)
   - Would they pay for it? (willingness to pay)
   - What would make it a "must-have"? (feature priorities)
   - What concerns do they have? (objections)

7. **Data Analysis Framework** - Organize findings:
   - How to transcribe and organize notes
   - How to identify patterns and themes
   - How to quantify qualitative data
   - How to create customer personas from research
   - How to map customer journeys
   - How to prioritize insights
   - How to present findings to team/stakeholders

8. **Validation Metrics & Criteria** - Define:
   - What constitutes validation (success criteria)
   - What would invalidate the idea (failure criteria)
   - Key metrics to track
   - How many positive signals needed
   - Red flags that mean pivot or stop

9. **Continuous Research Plan** - Establish:
   - How often to conduct research
   - How to build a research panel
   - How to stay close to customers
   - How to test new features/ideas
   - How to track evolving needs
   - How to build research into product development

10. **Research Documentation Template** - Provide:
   - Interview summary template
   - Insight tracking spreadsheet
   - Customer persona template
   - Journey map template
   - Research report template
   - Decision-making framework

**Output Format:**
Please provide a comprehensive customer research guide with interview scripts, analysis frameworks, templates, and specific tactics I can use to validate my business idea and deeply understand my customers.`,
        promptZh: `我需要进行客户研究以验证我的商业想法并深入了解我的目标客户。

**我的商业想法：**
- 产品/服务概念：[你正在构建什么]
- 目标客户：[你认为谁会使用它]
- 你正在解决的问题：[痛点]
- 你的解决方案：[你如何解决它]
- 关键假设：[你相信是真的但尚未验证的]

**我的研究目标：**
- [ ] 验证问题存在
- [ ] 深入了解客户需求
- [ ] 测试解决方案概念
- [ ] 识别支付意愿
- [ ] 发现意外见解
- [ ] 其他：[指定]

**我当前的知识：**
- 我对客户的了解：[当前理解]
- 我不确定的：[知识空白]
- 最大风险：[什么可能使想法无效]

**请提供：**

1. **客户研究策略** - 设计：
   - 研究目标（你需要学习什么）
   - 要回答的关键问题
   - 要测试的假设
   - 成功标准（什么验证你的想法）
   - 要使用的研究方法（访谈、调查、观察等）
   - 所需样本量
   - 时间表和里程碑

2. **研究的客户细分** - 识别：
   - 首先研究的主要细分
   - 次要细分
   - 如何找到和招募参与者
   - 筛选标准（谁符合条件）
   - 要提供的激励
   - 每个细分多少次访谈

3. **客户访谈指南** - 创建：
   - 访谈结构（开场、正文、结束）
   - 热身问题（建立融洽关系）
   - 问题探索问题（了解痛点）
   - 当前解决方案问题（他们现在做什么）
   - 解决方案验证问题（测试你的概念）
   - 支付意愿问题（定价研究）
   - 结束问题（推荐、跟进）
   - 要避免的问题（引导性问题、推销）

4. **访谈最佳实践** - 教授：
   - 如何招募参与者
   - 如何安排和准备
   - 如何快速建立融洽关系
   - 如何提出开放式问题
   - 如何深入挖掘（跟进技巧）
   - 如何积极倾听
   - 如何有效记笔记
   - 如何避免偏见
   - 要注意的危险信号（假阳性）

5. **问题验证框架** - 测试：
   - 问题存在吗？（要寻找的证据）
   - 有多痛苦？（严重性评估）
   - 发生频率如何？（频率评估）
   - 当前的解决方法是什么？（现有解决方案）
   - 问题的成本是多少？（量化影响）
   - 它是"必备"还是"不错"？（优先级评估）

6. **解决方案验证框架** - 测试：
   - 你的解决方案解决问题了吗？（适合度评估）
   - 它比替代品更好吗？（竞争评估）
   - 他们会使用它吗？（意图评估）
   - 他们会为它付费吗？（支付意愿）
   - 什么会使它成为"必备"？（功能优先级）
   - 他们有什么顾虑？（异议）

7. **数据分析框架** - 组织发现：
   - 如何转录和组织笔记
   - 如何识别模式和主题
   - 如何量化定性数据
   - 如何从研究中创建客户画像
   - 如何绘制客户旅程
   - 如何优先考虑见解
   - 如何向团队/利益相关者展示发现

8. **验证指标与标准** - 定义：
   - 什么构成验证（成功标准）
   - 什么会使想法无效（失败标准）
   - 要跟踪的关键指标
   - 需要多少积极信号
   - 意味着转向或停止的危险信号

9. **持续研究计划** - 建立：
   - 多久进行一次研究
   - 如何建立研究小组
   - 如何与客户保持密切联系
   - 如何测试新功能/想法
   - 如何跟踪不断变化的需求
   - 如何将研究融入产品开发

10. **研究文档模板** - 提供：
   - 访谈摘要模板
   - 见解跟踪电子表格
   - 客户画像模板
   - 旅程地图模板
   - 研究报告模板
   - 决策框架

**输出格式：**
请提供一个全面的客户研究指南，包含访谈脚本、分析框架、模板和我可以用来验证我的商业想法并深入了解我的客户的具体策略。`,
      },
    ],
  },
  "11": {
    id: 11,
    title: "LinkedIn Personal Branding Strategy",
    titleZh: "LinkedIn 个人品牌策略",
    category: "Marketing",
    tier: "Core",
    description:
      "Build a powerful LinkedIn presence with optimized profile, content strategy, and networking tactics to establish thought leadership.",
    descriptionZh:
      "通过优化的个人资料、内容策略和网络策略建立强大的 LinkedIn 存在，以建立思想领导力。",
    steps: [
      {
        title: "LinkedIn Profile Optimization",
        titleZh: "LinkedIn 个人资料优化",
        description:
          "Optimize every section of your LinkedIn profile to attract opportunities and showcase expertise.",
        descriptionZh: "优化你的 LinkedIn 个人资料的每个部分，以吸引机会并展示专业知识。",
        prompt: `I want to build a powerful LinkedIn presence that attracts opportunities and establishes me as a thought leader.

**My Professional Background:**
- Current role: [Your position and company]
- Industry: [Your industry/niche]
- Years of experience: [Your experience level]
- Key expertise: [What you're known for]
- Target audience: [Who you want to reach - recruiters, clients, partners, etc.]
- Goals: [What you want LinkedIn to do for you - jobs, clients, speaking, etc.]

**Please help me optimize:**

1. **Headline Optimization** - Create 5 compelling headline options:
   - Use all 220 characters effectively
   - Include keywords for searchability
   - Communicate value proposition clearly
   - Show personality and differentiation
   - Target your ideal audience

2. **About Section Strategy** - Write a compelling About section:
   - Hook (grab attention in first 2 lines)
   - Your story (background and journey)
   - Your expertise (what you do and for whom)
   - Your unique approach (how you're different)
   - Social proof (achievements, results, credentials)
   - Call-to-action (what you want readers to do)
   - Contact information
   - Optimal length: 1300-2000 characters

3. **Experience Section Optimization** - For each role:
   - Achievement-focused descriptions (not just duties)
   - Quantified results (numbers, percentages, impact)
   - Keywords for SEO
   - Media attachments (work samples, presentations)
   - Recommendations strategy

4. **Skills & Endorsements Strategy** - Prioritize:
   - Top 3 skills to feature (most important for your goals)
   - 47 additional skills to list (for searchability)
   - How to get endorsements strategically
   - Skills to remove (outdated or irrelevant)

5. **Featured Section Curation** - Showcase:
   - Best content to feature (articles, posts, media)
   - Portfolio pieces or case studies
   - Testimonials or recommendations
   - Speaking engagements or media appearances
   - Optimal order and presentation

**Output Format:**
Provide specific, copy-paste ready text for each section, with multiple options where appropriate. Include keyword suggestions and optimization tips.`,
        promptZh: `我想建立一个强大的 LinkedIn 存在，吸引机会并将我确立为思想领袖。

**我的专业背景：**
- 当前角色：[你的职位和公司]
- 行业：[你的行业/细分市场]
- 经验年限：[你的经验水平]
- 关键专业知识：[你以什么闻名]
- 目标受众：[你想接触谁 - 招聘人员、客户、合作伙伴等]
- 目标：[你希望 LinkedIn 为你做什么 - 工作、客户、演讲等]

**请帮我优化：**

1. **标题优化** - 创建 5 个引人注目的标题选项：
   - 有效使用所有 220 个字符
   - 包含可搜索性的关键词
   - 清楚地传达价值主张
   - 展示个性和差异化
   - 针对你的理想受众

2. **关于部分策略** - 撰写引人注目的关于部分：
   - 钩子（在前 2 行抓住注意力）
   - 你的故事（背景和旅程）
   - 你的专业知识（你为谁做什么）
   - 你的独特方法（你有何不同）
   - 社会证明（成就、结果、证书）
   - 行动号召（你希望读者做什么）
   - 联系信息
   - 最佳长度：1300-2000 字符

3. **经验部分优化** - 对于每个角色：
   - 以成就为重点的描述（不仅仅是职责）
   - 量化结果（数字、百分比、影响）
   - SEO 关键词
   - 媒体附件（工作样本、演示文稿）
   - 推荐策略

4. **技能与背书策略** - 优先考虑：
   - 要展示的前 3 项技能（对你的目标最重要）
   - 要列出的 47 项额外技能（用于可搜索性）
   - 如何战略性地获得背书
   - 要删除的技能（过时或不相关）

5. **精选部分策划** - 展示：
   - 要展示的最佳内容（文章、帖子、媒体）
   - 作品集或案例研究
   - 推荐或建议
   - 演讲活动或媒体露面
   - 最佳顺序和呈现

**输出格式：**
为每个部分提供具体的、可复制粘贴的文本，在适当的地方提供多个选项。包含关键词建议和优化技巧。`,
      },
    ],
  },
  "12": {
    id: 12,
    title: "Video Content Production System",
    titleZh: "视频内容制作系统",
    category: "Content",
    tier: "Core",
    description:
      "Create a systematic video content production workflow from ideation to publishing for YouTube, TikTok, or Instagram.",
    descriptionZh: "为 YouTube、TikTok 或 Instagram 创建从构思到发布的系统化视频内容制作工作流。",
    steps: [
      {
        title: "Video Content Strategy & Planning",
        titleZh: "视频内容策略与规划",
        description:
          "Develop a strategic approach to video content that drives views, engagement, and business results.",
        descriptionZh: "制定推动观看、参与和业务成果的视频内容战略方法。",
        prompt: `I want to create a systematic video content production system that consistently produces engaging videos.

**My Video Goals:**
- Platform focus: [YouTube, TikTok, Instagram, LinkedIn, etc.]
- Content niche: [What topics you cover]
- Target audience: [Who watches your videos]
- Business goals: [Brand awareness, leads, sales, education, etc.]
- Current situation: [Starting from scratch or have existing channel]
- Resources: [Equipment, team, budget, time available]

**Please create:**

1. **Video Content Strategy** - Define:
   - Content pillars (3-5 main themes)
   - Video formats (tutorials, vlogs, interviews, shorts, etc.)
   - Publishing frequency (realistic schedule)
   - Content mix (educational, entertaining, promotional ratio)
   - Unique angle (what makes your videos different)
   - Success metrics (views, watch time, engagement, conversions)

2. **Video Ideation System** - Generate ideas:
   - 30 video topic ideas across your pillars
   - Trending topic research methods
   - Keyword research for video SEO
   - Competitor analysis (what's working for others)
   - Audience question mining (what they want to know)
   - Evergreen vs. trending content balance
   - Content calendar template

3. **Video Script Framework** - Structure:
   - Hook formulas (first 3-5 seconds)
   - Introduction structure
   - Main content organization
   - Engagement tactics (pattern interrupts, questions)
   - Call-to-action placement
   - Outro structure
   - Script templates for different video types

4. **Production Workflow** - Systematize:
   - Pre-production checklist
   - Filming setup and process
   - B-roll and supplementary footage needs
   - Audio recording best practices
   - Lighting setup
   - Equipment recommendations (budget-friendly options)
   - Time estimates for each phase

5. **Editing Workflow** - Streamline:
   - Editing software recommendations
   - Editing checklist and process
   - Pacing and retention optimization
   - Graphics and text overlay strategy
   - Music and sound effects
   - Color grading basics
   - Export settings for each platform

6. **Optimization & Publishing** - Maximize reach:
   - Title formulas (clickable but not clickbait)
   - Thumbnail design principles
   - Description optimization (keywords, links, timestamps)
   - Tags and hashtags strategy
   - Publishing time optimization
   - Playlist organization
   - End screen and cards strategy

7. **Promotion & Distribution** - Amplify:
   - Cross-platform promotion tactics
   - Community engagement strategy
   - Collaboration opportunities
   - Email list integration
   - Social media snippets creation
   - Paid promotion strategies (if budget allows)

8. **Analytics & Iteration** - Improve:
   - Key metrics to track
   - What good performance looks like
   - How to analyze retention graphs
   - A/B testing ideas
   - When to double down vs. pivot
   - Monthly review process

**Output Format:**
Provide a comprehensive video production system with templates, checklists, and specific tactics I can implement immediately to create consistent, engaging video content.`,
        promptZh: `我想创建一个系统化的视频内容制作系统，持续制作引人入胜的视频。

**我的视频目标：**
- 平台重点：[YouTube、TikTok、Instagram、LinkedIn 等]
- 内容细分市场：[你涵盖什么主题]
- 目标受众：[谁观看你的视频]
- 业务目标：[品牌知名度、潜在客户、销售、教育等]
- 当前情况：[从零开始或有现有频道]
- 资源：[设备、团队、预算、可用时间]

**请创建：**

1. **视频内容策略** - 定义：
   - 内容支柱（3-5 个主要主题）
   - 视频格式（教程、vlog、访谈、短视频等）
   - 发布频率（现实的时间表）
   - 内容组合（教育性、娱乐性、促销性比例）
   - 独特角度（是什么让你的视频与众不同）
   - 成功指标（观看次数、观看时间、参与度、转化）

2. **视频构思系统** - 生成想法：
   - 跨支柱的 30 个视频主题想法
   - 趋势主题研究方法
   - 视频 SEO 的关键词研究
   - 竞争对手分析（什么对其他人有效）
   - 受众问题挖掘（他们想知道什么）
   - 常青内容 vs. 趋势内容平衡
   - 内容日历模板

3. **视频脚本框架** - 结构：
   - 钩子公式（前 3-5 秒）
   - 介绍结构
   - 主要内容组织
   - 参与策略（模式中断、问题）
   - 行动号召放置
   - 结尾结构
   - 不同视频类型的脚本模板

4. **制作工作流** - 系统化：
   - 前期制作检查清单
   - 拍摄设置和流程
   - B-roll 和补充镜头需求
   - 音频录制最佳实践
   - 照明设置
   - 设备建议（预算友好选项）
   - 每个阶段的时间估计

5. **编辑工作流** - 简化：
   - 编辑软件建议
   - 编辑检查清单和流程
   - 节奏和保留优化
   - 图形和文本叠加策略
   - 音乐和音效
   - 调色基础
   - 每个平台的导出设置

6. **优化与发布** - 最大化覆盖：
   - 标题公式（可点击但不是标题党）
   - 缩略图设计原则
   - 描述优化（关键词、链接、时间戳）
   - 标签和主题标签策略
   - 发布时间优化
   - 播放列表组织
   - 片尾画面和卡片策略

7. **推广与分发** - 放大：
   - 跨平台推广策略
   - 社区参与策略
   - 合作机会
   - 电子邮件列表集成
   - 社交媒体片段创建
   - 付费推广策略（如果预算允许）

8. **分析与迭代** - 改进：
   - 要跟踪的关键指标
   - 良好表现是什么样子
   - 如何分析保留图
   - A/B 测试想法
   - 何时加倍 vs. 转向
   - 月度审查流程

**输出格式：**
提供一个全面的视频制作系统，包含模板、检查清单和我可以立即实施的具体策略，以创建一致、引人入胜的视频内容。`,
      },
    ],
  },
  "13": {
    id: 13,
    title: "Conversion Rate Optimization (CRO) Framework",
    titleZh: "转化率优化 (CRO) 框架",
    category: "Marketing",
    tier: "Plus",
    description:
      "Systematically improve your website conversion rates through data analysis, testing, and optimization.",
    descriptionZh: "通过数据分析、测试和优化系统地提高你的网站转化率。",
    steps: [
      {
        title: "CRO Audit & Optimization Plan",
        titleZh: "CRO 审计与优化计划",
        description:
          "Analyze your conversion funnel and create a prioritized optimization roadmap.",
        descriptionZh: "分析你的转化漏斗并创建优先优化路线图。",
        prompt: `I need to improve my website conversion rates through systematic optimization.

**My Website:**
- URL: [Your website]
- Primary goal: [Sales, leads, signups, etc.]
- Current conversion rate: [If known]
- Monthly traffic: [Visitor count]
- Target audience: [Who visits]
- Main conversion pages: [Landing pages, checkout, signup, etc.]

**Please provide:**

1. **Conversion Funnel Analysis** - Map and analyze each stage
2. **Quick Win Optimizations** - 10 high-impact changes to test immediately
3. **A/B Testing Roadmap** - Prioritized experiments with hypotheses
4. **Copywriting Optimization** - Headlines, CTAs, value propositions
5. **Design & UX Improvements** - Layout, navigation, trust signals
6. **Mobile Optimization** - Mobile-specific conversion tactics
7. **Analytics Setup** - What to track and how to measure success

**Output Format:**
Provide a comprehensive CRO action plan with specific tests, copy suggestions, and implementation guidance.`,
        promptZh: `我需要通过系统优化提高我的网站转化率。

**我的网站：**
- URL：[你的网站]
- 主要目标：[销售、潜在客户、注册等]
- 当前转化率：[如果知道]
- 月流量：[访问者数量]
- 目标受众：[谁访问]
- 主要转化页面：[着陆页、结账、注册等]

**请提供：**

1. **转化漏斗分析** - 映射和分析每个阶段
2. **快速获胜优化** - 立即测试的 10 个高影响变化
3. **A/B 测试路线图** - 带假设的优先实验
4. **文案优化** - 标题、CTA、价值主张
5. **设计与 UX 改进** - 布局、导航、信任信号
6. **移动优化** - 移动特定转化策略
7. **分析设置** - 要跟踪什么以及如何衡量成功

**输出格式：**
提供一个全面的 CRO 行动计划，包含具体测试、文案建议和实施指导。`,
      },
    ],
  },
  "14": {
    id: 14,
    title: "Podcast Launch & Growth Strategy",
    titleZh: "播客启动与增长策略",
    category: "Content",
    tier: "Core",
    description: "Launch and grow a successful podcast from concept to consistent audience growth.",
    descriptionZh: "从概念到持续的受众增长，启动并发展成功的播客。",
    steps: [
      {
        title: "Podcast Strategy & Launch Plan",
        titleZh: "播客策略与启动计划",
        description: "Plan your podcast concept, format, and launch strategy.",
        descriptionZh: "规划你的播客概念、格式和启动策略。",
        prompt: `I want to launch a podcast that attracts listeners and achieves my business goals.

**My Podcast Idea:**
- Topic/Niche: [What your podcast is about]
- Target audience: [Who will listen]
- Format: [Interview, solo, co-hosted, narrative, etc.]
- Goals: [Audience building, authority, leads, monetization, etc.]
- Unique angle: [What makes it different]
- Resources: [Equipment, budget, time available]

**Please create:**

1. **Podcast Concept Development** - Define positioning and differentiation
2. **Format & Structure** - Episode structure, length, frequency
3. **Launch Strategy** - First 10 episodes plan and promotion tactics
4. **Production Workflow** - Recording, editing, publishing system
5. **Growth Tactics** - Listener acquisition and retention strategies
6. **Monetization Options** - Revenue streams when ready

**Output Format:**
Provide a complete podcast launch playbook with templates, checklists, and growth tactics.`,
        promptZh: `我想启动一个吸引听众并实现我的业务目标的播客。

**我的播客想法：**
- 主题/细分市场：[你的播客是关于什么的]
- 目标受众：[谁会听]
- 格式：[访谈、独白、共同主持、叙事等]
- 目标：[受众建设、权威、潜在客户、变现等]
- 独特角度：[是什么让它与众不同]
- 资源：[设备、预算、可用时间]

**请创建：**

1. **播客概念开发** - 定义定位和差异化
2. **格式与结构** - 剧集结构、长度、频率
3. **启动策略** - 前 10 集计划和推广策略
4. **制作工作流** - 录制、编辑、发布系统
5. **增长策略** - 听众获取和保留策略
6. **变现选项** - 准备好时的收入流

**输出格式：**
提供一个完整的播客启动手册，包含模板、检查清单和增长策略。`,
      },
    ],
  },
  "15": {
    id: 15,
    title: "Affiliate Marketing System",
    titleZh: "联盟营销系统",
    category: "Marketing",
    tier: "Plus",
    description:
      "Build a profitable affiliate marketing business with product selection, content strategy, and conversion optimization.",
    descriptionZh: "通过产品选择、内容策略和转化优化建立盈利的联盟营销业务。",
    steps: [
      {
        title: "Affiliate Strategy & Product Selection",
        titleZh: "联盟策略与产品选择",
        description:
          "Choose profitable affiliate products and build a sustainable promotion strategy.",
        descriptionZh: "选择盈利的联盟产品并建立可持续的推广策略。",
        prompt: `I want to build a profitable affiliate marketing business.

**My Situation:**
- Niche/Industry: [Your focus area]
- Audience: [Who you reach or want to reach]
- Platform: [Blog, YouTube, social media, email, etc.]
- Current traffic: [If any]
- Experience level: [Beginner, intermediate, advanced]

**Please provide:**

1. **Niche Selection & Validation** - Find profitable opportunities
2. **Product Research** - High-converting affiliate programs to join
3. **Content Strategy** - What content drives affiliate sales
4. **SEO for Affiliates** - Ranking for buyer-intent keywords
5. **Conversion Optimization** - Tactics to increase click-through and sales
6. **Disclosure & Compliance** - Legal requirements and best practices

**Output Format:**
Provide a complete affiliate marketing system with product recommendations, content templates, and monetization strategies.`,
        promptZh: `我想建立一个盈利的联盟营销业务。

**我的情况：**
- 细分市场/行业：[你的重点领域]
- 受众：[你接触或想接触谁]
- 平台：[博客、YouTube、社交媒体、电子邮件等]
- 当前流量：[如果有的话]
- 经验水平：[初学者、中级、高级]

**请提供：**

1. **细分市场选择与验证** - 找到盈利机会
2. **产品研究** - 要加入的高转化联盟计划
3. **内容策略** - 什么内容推动联盟销售
4. **联盟 SEO** - 为买家意图关键词排名
5. **转化优化** - 增加点击率和销售的策略
6. **披露与合规** - 法律要求和最佳实践

**输出格式：**
提供一个完整的联盟营销系统，包含产品建议、内容模板和变现策略。`,
      },
    ],
  },
  "16": {
    id: 16,
    title: "Community Building & Management",
    titleZh: "社区建设与管理",
    category: "Operations",
    tier: "Core",
    description: "Build and manage an engaged online community that drives business value.",
    descriptionZh: "建立并管理一个推动业务价值的参与在线社区。",
    steps: [
      {
        title: "Community Strategy & Launch",
        titleZh: "社区策略与启动",
        description: "Design your community strategy and launch plan.",
        descriptionZh: "设计你的社区策略和启动计划。",
        prompt: `I want to build an engaged community around my brand or topic.

**My Community Vision:**
- Topic/Focus: [What brings people together]
- Target members: [Who you want to attract]
- Platform: [Discord, Slack, Circle, Facebook Group, etc.]
- Goals: [Support, networking, education, feedback, etc.]
- Current audience: [If any]

**Please create:**

1. **Community Strategy** - Purpose, values, and structure
2. **Launch Plan** - First 100 members acquisition
3. **Engagement Tactics** - Keep members active and participating
4. **Moderation Guidelines** - Rules and conflict resolution
5. **Growth Strategies** - Scale from 100 to 1000+ members
6. **Monetization Options** - Premium tiers, sponsorships, etc.

**Output Format:**
Provide a complete community building playbook with templates, engagement tactics, and growth strategies.`,
        promptZh: `我想围绕我的品牌或主题建立一个参与的社区。

**我的社区愿景：**
- 主题/重点：[什么让人们聚在一起]
- 目标成员：[你想吸引谁]
- 平台：[Discord、Slack、Circle、Facebook 群组等]
- 目标：[支持、网络、教育、反馈等]
- 当前受众：[如果有的话]

**请创建：**

1. **社区策略** - 目的、价值观和结构
2. **启动计划** - 前 100 名成员获取
3. **参与策略** - 保持成员活跃和参与
4. **审核指南** - 规则和冲突解决
5. **增长策略** - 从 100 扩展到 1000+ 成员
6. **变现选项** - 高级层级、赞助等

**输出格式：**
提供一个完整的社区建设手册，包含模板、参与策略和增长策略。`,
      },
    ],
  },
  "17": {
    id: 17,
    title: "Personal Productivity System",
    titleZh: "个人生产力系统",
    category: "Operations",
    tier: "Core",
    description:
      "Design a personalized productivity system that helps you accomplish more with less stress.",
    descriptionZh: "设计一个个性化的生产力系统，帮助你以更少的压力完成更多工作。",
    steps: [
      {
        title: "Productivity System Design",
        titleZh: "生产力系统设计",
        description: "Create your custom productivity workflow.",
        descriptionZh: "创建你的自定义生产力工作流。",
        prompt: `I need a productivity system that helps me accomplish my goals without burnout.

**My Situation:**
- Role: [Your work/business]
- Main responsibilities: [What you need to accomplish]
- Biggest challenges: [Time management, focus, overwhelm, etc.]
- Tools you use: [Apps, systems currently using]
- Work style: [Deep work, meetings, creative, etc.]

**Please create:**

1. **Task Management System** - Capture, organize, prioritize
2. **Time Blocking Strategy** - Daily and weekly scheduling
3. **Focus & Deep Work** - Eliminate distractions, maximize output
4. **Energy Management** - Work with your natural rhythms
5. **Review & Reflection** - Daily, weekly, monthly systems
6. **Automation & Delegation** - What to automate or outsource

**Output Format:**
Provide a personalized productivity system with templates, routines, and tool recommendations.`,
        promptZh: `我需要一个生产力系统，帮助我在不倦怠的情况下实现我的目标。

**我的情况：**
- 角色：[你的工作/业务]
- 主要职责：[你需要完成什么]
- 最大挑战：[时间管理、专注、不堪重负等]
- 你使用的工具：[当前使用的应用程序、系统]
- 工作风格：[深度工作、会议、创意等]

**请创建：**

1. **任务管理系统** - 捕获、组织、优先排序
2. **时间块策略** - 每日和每周安排
3. **专注与深度工作** - 消除干扰、最大化产出
4. **能量管理** - 与你的自然节奏一起工作
5. **审查与反思** - 每日、每周、每月系统
6. **自动化与委派** - 要自动化或外包什么

**输出格式：**
提供一个个性化的生产力系统，包含模板、例程和工具建议。`,
      },
    ],
  },
  "18": {
    id: 18,
    title: "Webinar Funnel Builder",
    titleZh: "网络研讨会漏斗构建器",
    category: "Marketing",
    tier: "Plus",
    description: "Create high-converting webinar funnels that generate leads and sales.",
    descriptionZh: "创建高转化的网络研讨会漏斗，产生潜在客户和销售。",
    steps: [
      {
        title: "Webinar Strategy & Script",
        titleZh: "网络研讨会策略与脚本",
        description: "Design your webinar content and conversion strategy.",
        descriptionZh: "设计你的网络研讨会内容和转化策略。",
        prompt: `I want to create a webinar that generates leads and sales.

**My Offer:**
- Product/Service: [What you're selling]
- Price point: [Cost]
- Target audience: [Who needs this]
- Main benefit: [Core transformation]
- Webinar topic: [Educational angle]

**Please create:**

1. **Webinar Structure** - Proven framework for conversions
2. **Registration Page** - Copy and design that drives signups
3. **Webinar Script** - Minute-by-minute presentation outline
4. **Offer & Close** - How to pitch without being pushy
5. **Follow-up Sequence** - Post-webinar email automation
6. **Promotion Strategy** - Fill your webinar with qualified attendees

**Output Format:**
Provide a complete webinar funnel with scripts, templates, and promotion tactics.`,
        promptZh: `我想创建一个产生潜在客户和销售的网络研讨会。

**我的报价：**
- 产品/服务：[你在销售什么]
- 价格点：[成本]
- 目标受众：[谁需要这个]
- 主要好处：[核心转变]
- 网络研讨会主题：[教育角度]

**请创建：**

1. **网络研讨会结构** - 经过验证的转化框架
2. **注册页面** - 推动注册的文案和设计
3. **网络研讨会脚本** - 逐分钟演示大纲
4. **报价与成交** - 如何在不强迫的情况下推销
5. **跟进序列** - 网络研讨会后电子邮件自动化
6. **推广策略** - 用合格的参与者填满你的网络研讨会

**输出格式：**
提供一个完整的网络研讨会漏斗，包含脚本、模板和推广策略。`,
      },
    ],
  },
  "19": {
    id: 19,
    title: "Influencer Outreach & Partnership Strategy",
    titleZh: "影响者外展与合作策略",
    category: "Marketing",
    tier: "Plus",
    description:
      "Build relationships with influencers and create mutually beneficial partnerships.",
    descriptionZh: "与影响者建立关系并创建互惠互利的合作伙伴关系。",
    steps: [
      {
        title: "Influencer Partnership Strategy",
        titleZh: "影响者合作策略",
        description: "Identify, reach out to, and partner with relevant influencers.",
        descriptionZh: "识别、接触并与相关影响者合作。",
        prompt: `I want to partner with influencers to grow my brand.

**My Brand:**
- Product/Service: [What you offer]
- Target audience: [Who you want to reach]
- Budget: [Available for partnerships]
- Goals: [Awareness, sales, content, etc.]
- Current reach: [Your audience size]

**Please create:**

1. **Influencer Research** - Find the right partners for your brand
2. **Outreach Strategy** - Cold email templates that get responses
3. **Partnership Structures** - Paid, affiliate, gifting, content swaps
4. **Campaign Briefs** - What to send influencers for best results
5. **Tracking & ROI** - Measure partnership effectiveness
6. **Relationship Building** - Long-term influencer relationships

**Output Format:**
Provide a complete influencer partnership playbook with templates, outreach scripts, and campaign structures.`,
        promptZh: `我想与影响者合作以发展我的品牌。

**我的品牌：**
- 产品/服务：[你提供什么]
- 目标受众：[你想接触谁]
- 预算：[可用于合作伙伴关系]
- 目标：[知名度、销售、内容等]
- 当前覆盖：[你的受众规模]

**请创建：**

1. **影响者研究** - 为你的品牌找到合适的合作伙伴
2. **外展策略** - 获得回应的冷电子邮件模板
3. **合作结构** - 付费、联盟、赠送、内容交换
4. **活动简报** - 发送给影响者以获得最佳结果的内容
5. **跟踪与 ROI** - 衡量合作伙伴关系的有效性
6. **关系建设** - 长期影响者关系

**输出格式：**
提供一个完整的影响者合作手册，包含模板、外展脚本和活动结构。`,
      },
    ],
  },
  "20": {
    id: 20,
    title: "Sales Funnel Architecture",
    titleZh: "销售漏斗架构",
    category: "Marketing",
    tier: "Pro",
    description: "Design and build complete sales funnels from awareness to purchase and beyond.",
    descriptionZh: "从意识到购买及以后设计并构建完整的销售漏斗。",
    steps: [
      {
        title: "Funnel Strategy & Design",
        titleZh: "漏斗策略与设计",
        description: "Map out your complete customer journey and conversion path.",
        descriptionZh: "绘制你的完整客户旅程和转化路径。",
        prompt: `I need to design a complete sales funnel that converts cold traffic into customers.

**My Business:**
- Product/Service: [What you sell]
- Price point: [Cost]
- Target customer: [Who buys]
- Current conversion rate: [If known]
- Traffic sources: [Where visitors come from]

**Please create:**

1. **Funnel Architecture** - Complete customer journey map
2. **Lead Magnet Strategy** - Irresistible free offers
3. **Landing Page Framework** - High-converting page structure
4. **Email Sequences** - Nurture and sales automation
5. **Upsell/Downsell Strategy** - Maximize customer value
6. **Retargeting Plan** - Bring back lost visitors

**Output Format:**
Provide a complete funnel blueprint with page templates, email sequences, and optimization tactics.`,
        promptZh: `我需要设计一个完整的销售漏斗，将冷流量转化为客户。

**我的业务：**
- 产品/服务：[你销售什么]
- 价格点：[成本]
- 目标客户：[谁购买]
- 当前转化率：[如果知道]
- 流量来源：[访问者来自哪里]

**请创建：**

1. **漏斗架构** - 完整的客户旅程地图
2. **潜在客户磁铁策略** - 不可抗拒的免费优惠
3. **着陆页框架** - 高转化页面结构
4. **电子邮件序列** - 培育和销售自动化
5. **追加销售/降级销售策略** - 最大化客户价值
6. **重定向计划** - 带回失去的访问者

**输出格式：**
提供一个完整的漏斗蓝图，包含页面模板、电子邮件序列和优化策略。`,
      },
    ],
  },
  "21": {
    id: 21,
    title: "Crisis Management & PR Response",
    titleZh: "危机管理与公关响应",
    category: "Operations",
    tier: "Pro",
    description: "Prepare for and respond to business crises with strategic communication plans.",
    descriptionZh: "通过战略沟通计划准备和应对业务危机。",
    steps: [
      {
        title: "Crisis Response Framework",
        titleZh: "危机响应框架",
        description: "Build a crisis management playbook for your business.",
        descriptionZh: "为你的业务构建危机管理手册。",
        prompt: `I need a crisis management plan to protect my brand reputation.

**My Business:** [Industry, size, public profile]
**Potential Risks:** [What could go wrong]
**Stakeholders:** [Customers, employees, investors, media, etc.]

**Please create:**
1. **Crisis Identification** - Types of crises and warning signs
2. **Response Team Structure** - Roles and responsibilities
3. **Communication Templates** - Statements for different scenarios
4. **Social Media Protocol** - How to respond online
5. **Media Relations** - Press statement templates
6. **Recovery Plan** - Rebuilding trust and reputation

**Output:** Crisis management playbook with templates and response protocols.`,
        promptZh: `我需要一个危机管理计划来保护我的品牌声誉。

**我的业务：** [行业、规模、公众形象]
**潜在风险：** [可能出什么问题]
**利益相关者：** [客户、员工、投资者、媒体等]

**请创建：**
1. **危机识别** - 危机类型和警告信号
2. **响应团队结构** - 角色和职责
3. **沟通模板** - 不同场景的声明
4. **社交媒体协议** - 如何在线响应
5. **媒体关系** - 新闻声明模板
6. **恢复计划** - 重建信任和声誉

**输出：** 危机管理手册，包含模板和响应协议。`,
      },
    ],
  },
  "22": {
    id: 22,
    title: "Customer Onboarding Excellence",
    titleZh: "客户入职卓越",
    category: "Operations",
    tier: "Plus",
    description: "Design an onboarding experience that activates users and reduces churn.",
    descriptionZh: "设计一个激活用户并减少流失的入职体验。",
    steps: [
      {
        title: "Onboarding Flow Design",
        titleZh: "入职流程设计",
        description: "Create a seamless onboarding experience.",
        descriptionZh: "创建无缝的入职体验。",
        prompt: `I need to improve my customer onboarding to increase activation and reduce churn.

**My Product:** [What you offer]
**User Journey:** [Current onboarding steps]
**Activation Goal:** [What defines an activated user]
**Current Metrics:** [Activation rate, time to value, churn rate]

**Please create:**
1. **Onboarding Flow Map** - Step-by-step user journey
2. **Welcome Sequence** - Email automation for new users
3. **In-App Guidance** - Tooltips, tutorials, progressive disclosure
4. **Success Milestones** - Celebrate early wins
5. **Support Strategy** - Proactive help and resources
6. **Churn Prevention** - Early warning signs and interventions

**Output:** Complete onboarding system with flows, emails, and optimization tactics.`,
        promptZh: `我需要改进我的客户入职以提高激活率并减少流失。

**我的产品：** [你提供什么]
**用户旅程：** [当前入职步骤]
**激活目标：** [什么定义了激活的用户]
**当前指标：** [激活率、价值时间、流失率]

**请创建：**
1. **入职流程图** - 分步用户旅程
2. **欢迎序列** - 新用户的电子邮件自动化
3. **应用内指导** - 工具提示、教程、渐进式披露
4. **成功里程碑** - 庆祝早期胜利
5. **支持策略** - 主动帮助和资源
6. **流失预防** - 早期警告信号和干预

**输出：** 完整的入职系统，包含流程、电子邮件和优化策略。`,
      },
    ],
  },
  "23": {
    id: 23,
    title: "Content Repurposing System",
    titleZh: "内容重新利用系统",
    category: "Content",
    tier: "Core",
    description:
      "Maximize content ROI by systematically repurposing one piece into multiple formats.",
    descriptionZh: "通过系统地将一件内容重新利用为多种格式来最大化内容 ROI。",
    steps: [
      {
        title: "Content Repurposing Strategy",
        titleZh: "内容重新利用策略",
        description: "Turn one piece of content into 10+ assets.",
        descriptionZh: "将一件内容转化为 10+ 个资产。",
        prompt: `I want to maximize my content ROI by repurposing effectively.

**My Content:** [Type of content you create - blog, video, podcast, etc.]
**Platforms:** [Where you distribute]
**Resources:** [Team, tools, time available]

**Please create:**
1. **Repurposing Matrix** - One piece → 10+ formats
2. **Platform Adaptation Guide** - How to adjust for each platform
3. **Workflow & Timeline** - When to repurpose and publish
4. **Quality Standards** - Maintain value across formats
5. **Automation Opportunities** - Tools and systems to streamline

**Output:** Complete repurposing system with templates and workflows.`,
        promptZh: `我想通过有效的重新利用来最大化我的内容 ROI。

**我的内容：** [你创建的内容类型 - 博客、视频、播客等]
**平台：** [你在哪里分发]
**资源：** [团队、工具、可用时间]

**请创建：**
1. **重新利用矩阵** - 一件内容 → 10+ 种格式
2. **平台调整指南** - 如何为每个平台调整
3. **工作流与时间表** - 何时重新利用和发布
4. **质量标准** - 跨格式保持价值
5. **自动化机会** - 简化的工具和系统

**输出：** 完整的重新利用系统，包含模板和工作流。`,
      },
    ],
  },
  "24": {
    id: 24,
    title: "Pricing Strategy & Optimization",
    titleZh: "定价策略与优化",
    category: "Strategy",
    tier: "Plus",
    description:
      "Develop optimal pricing strategy with psychological pricing, tiering, and testing frameworks.",
    descriptionZh: "通过心理定价、分层和测试框架开发最佳定价策略。",
    steps: [
      {
        title: "Strategic Pricing Framework",
        titleZh: "战略定价框架",
        description: "Design your pricing strategy based on value, competition, and psychology.",
        descriptionZh: "基于价值、竞争和心理学设计你的定价策略。",
        prompt: `I need to develop a pricing strategy that maximizes revenue and customer value.

**My Product/Service:** [What you offer]
**Target Market:** [Who buys]
**Costs:** [COGS, overhead, etc.]
**Competitors:** [Their pricing]
**Value Delivered:** [Customer outcomes]

**Please create:**
1. **Value-Based Pricing Analysis** - What customers will pay
2. **Competitive Pricing Review** - Market positioning
3. **Pricing Psychology** - Anchoring, framing, decoys
4. **Tiered Pricing Structure** - Good, better, best options
5. **Testing Framework** - How to test price points
6. **Discount Strategy** - When and how to discount

**Output:** Complete pricing strategy with specific recommendations and testing plans.`,
        promptZh: `我需要制定一个最大化收入和客户价值的定价策略。

**我的产品/服务：** [你提供什么]
**目标市场：** [谁购买]
**成本：** [COGS、开销等]
**竞争对手：** [他们的定价]
**交付的价值：** [客户成果]

**请创建：**
1. **基于价值的定价分析** - 客户愿意支付什么
2. **竞争定价审查** - 市场定位
3. **定价心理学** - 锚定、框架、诱饵
4. **分层定价结构** - 好、更好、最好的选项
5. **测试框架** - 如何测试价格点
6. **折扣策略** - 何时以及如何折扣

**输出：** 完整的定价策略，包含具体建议和测试计划。`,
      },
    ],
  },
  "25": {
    id: 25,
    title: "Partnership & Collaboration Strategy",
    titleZh: "合作伙伴与协作策略",
    category: "Strategy",
    tier: "Plus",
    description: "Identify, approach, and structure strategic partnerships that accelerate growth.",
    descriptionZh: "识别、接触并构建加速增长的战略合作伙伴关系。",
    steps: [
      {
        title: "Partnership Strategy Development",
        titleZh: "合作伙伴策略开发",
        description: "Find and build mutually beneficial partnerships.",
        descriptionZh: "找到并建立互惠互利的合作伙伴关系。",
        prompt: `I want to build strategic partnerships that accelerate my business growth.

**My Business:** [What you do]
**Goals:** [What partnerships should achieve]
**Assets:** [What you bring to partnerships]
**Ideal Partners:** [Types of companies/people]

**Please create:**
1. **Partner Identification** - Who to target and why
2. **Value Proposition** - What you offer partners
3. **Outreach Strategy** - How to initiate conversations
4. **Partnership Structures** - Revenue share, co-marketing, integration, etc.
5. **Agreement Framework** - Key terms and protections
6. **Relationship Management** - Maintain and grow partnerships

**Output:** Partnership playbook with templates, outreach scripts, and agreement frameworks.`,
        promptZh: `我想建立加速我的业务增长的战略合作伙伴关系。

**我的业务：** [你做什么]
**目标：** [合作伙伴关系应该实现什么]
**资产：** [你为合作伙伴关系带来什么]
**理想合作伙伴：** [公司/人的类型]

**请创建：**
1. **合作伙伴识别** - 要定位谁以及为什么
2. **价值主张** - 你为合作伙伴提供什么
3. **外展策略** - 如何发起对话
4. **合作结构** - 收入分成、联合营销、集成等
5. **协议框架** - 关键条款和保护
6. **关系管理** - 维护和发展合作伙伴关系

**输出：** 合作伙伴手册，包含模板、外展脚本和协议框架。`,
      },
    ],
  },
  "26": {
    id: 26,
    title: "Customer Retention & Loyalty Program",
    titleZh: "客户保留与忠诚度计划",
    category: "Operations",
    tier: "Plus",
    description: "Build systems to retain customers, reduce churn, and increase lifetime value.",
    descriptionZh: "建立系统以保留客户、减少流失并增加生命周期价值。",
    steps: [
      {
        title: "Retention Strategy Design",
        titleZh: "保留策略设计",
        description: "Create a comprehensive customer retention system.",
        descriptionZh: "创建全面的客户保留系统。",
        prompt: `I need to improve customer retention and reduce churn.

**My Business:** [Product/service]
**Current Churn Rate:** [If known]
**Customer Lifecycle:** [Typical customer journey]
**Retention Challenges:** [Why customers leave]

**Please create:**
1. **Churn Analysis** - Why customers leave and when
2. **Retention Tactics** - Strategies to keep customers engaged
3. **Loyalty Program Design** - Rewards and incentives structure
4. **Win-Back Campaigns** - Re-engage churned customers
5. **Customer Success Program** - Proactive support and value delivery
6. **LTV Optimization** - Increase customer lifetime value

**Output:** Complete retention system with programs, campaigns, and metrics.`,
        promptZh: `我需要提高客户保留率并减少流失。

**我的业务：** [产品/服务]
**当前流失率：** [如果知道]
**客户生命周期：** [典型客户旅程]
**保留挑战：** [客户为什么离开]

**请创建：**
1. **流失分析** - 客户为什么以及何时离开
2. **保留策略** - 保持客户参与的策略
3. **忠诚度计划设计** - 奖励和激励结构
4. **赢回活动** - 重新吸引流失的客户
5. **客户成功计划** - 主动支持和价值交付
6. **LTV 优化** - 增加客户生命周期价值

**输出：** 完整的保留系统，包含计划、活动和指标。`,
      },
    ],
  },
  "27": {
    id: 27,
    title: "Thought Leadership Content Strategy",
    titleZh: "思想领导力内容策略",
    category: "Content",
    tier: "Pro",
    description:
      "Establish yourself as an industry thought leader through strategic content and positioning.",
    descriptionZh: "通过战略内容和定位将自己确立为行业思想领袖。",
    steps: [
      {
        title: "Thought Leadership Framework",
        titleZh: "思想领导力框架",
        description: "Build authority and influence in your industry.",
        descriptionZh: "在你的行业中建立权威和影响力。",
        prompt: `I want to establish myself as a thought leader in my industry.

**My Expertise:** [Your area of knowledge]
**Target Audience:** [Who you want to influence]
**Current Authority:** [Your current standing]
**Goals:** [Speaking, consulting, book deal, etc.]

**Please create:**
1. **Unique POV Development** - Your distinctive perspective
2. **Signature Framework** - Proprietary methodology or model
3. **Content Pillars** - Topics that showcase expertise
4. **Publishing Strategy** - Where and how often to publish
5. **Speaking & Media** - Get on stages and in publications
6. **Network Building** - Connect with other thought leaders

**Output:** Thought leadership roadmap with content strategy and positioning tactics.`,
        promptZh: `我想在我的行业中将自己确立为思想领袖。

**我的专业知识：** [你的知识领域]
**目标受众：** [你想影响谁]
**当前权威：** [你当前的地位]
**目标：** [演讲、咨询、图书交易等]

**请创建：**
1. **独特观点开发** - 你的独特视角
2. **签名框架** - 专有方法论或模型
3. **内容支柱** - 展示专业知识的主题
4. **发布策略** - 在哪里以及多久发布一次
5. **演讲与媒体** - 登上舞台和出版物
6. **网络建设** - 与其他思想领袖联系

**输出：** 思想领导力路线图，包含内容策略和定位策略。`,
      },
    ],
  },
  "28": {
    id: 28,
    title: "Product-Market Fit Validation",
    titleZh: "产品市场契合度验证",
    category: "Strategy",
    tier: "Pro",
    description:
      "Systematically test and validate product-market fit with customer feedback and metrics.",
    descriptionZh: "通过客户反馈和指标系统地测试和验证产品市场契合度。",
    steps: [
      {
        title: "PMF Testing Framework",
        titleZh: "PMF 测试框架",
        description: "Validate that you've achieved product-market fit.",
        descriptionZh: "验证你已经实现了产品市场契合度。",
        prompt: `I need to validate whether I've achieved product-market fit.

**My Product:** [What you've built]
**Target Market:** [Who it's for]
**Current Traction:** [Users, revenue, growth]
**Hypothesis:** [What you believe about PMF]

**Please create:**
1. **PMF Metrics Framework** - How to measure fit
2. **Customer Survey Design** - Sean Ellis test and beyond
3. **Cohort Analysis** - Retention and engagement patterns
4. **Feedback Collection** - Systematic user research
5. **Iteration Plan** - How to improve based on data
6. **Pivot Criteria** - When to change direction

**Output:** PMF validation framework with surveys, metrics, and decision criteria.`,
        promptZh: `我需要验证我是否已经实现了产品市场契合度。

**我的产品：** [你构建了什么]
**目标市场：** [它是为谁设计的]
**当前牵引力：** [用户、收入、增长]
**假设：** [你对 PMF 的看法]

**请创建：**
1. **PMF 指标框架** - 如何衡量契合度
2. **客户调查设计** - Sean Ellis 测试及更多
3. **队列分析** - 保留和参与模式
4. **反馈收集** - 系统的用户研究
5. **迭代计划** - 如何基于数据改进
6. **转向标准** - 何时改变方向

**输出：** PMF 验证框架，包含调查、指标和决策标准。`,
      },
    ],
  },
  "29": {
    id: 29,
    title: "Freelance Business System",
    titleZh: "自由职业业务系统",
    category: "Operations",
    tier: "Core",
    description:
      "Build a sustainable freelance business with client acquisition, project management, and scaling strategies.",
    descriptionZh: "通过客户获取、项目管理和扩展策略建立可持续的自由职业业务。",
    steps: [
      {
        title: "Freelance Business Framework",
        titleZh: "自由职业业务框架",
        description: "Systematize your freelance business for growth and sustainability.",
        descriptionZh: "系统化你的自由职业业务以实现增长和可持续性。",
        prompt: `I want to build a sustainable, profitable freelance business.

**My Services:** [What you offer]
**Target Clients:** [Who you want to work with]
**Current Situation:** [Starting out, growing, scaling]
**Goals:** [Income, lifestyle, impact]

**Please create:**
1. **Service Positioning** - Package and price your offerings
2. **Client Acquisition** - Systematic lead generation
3. **Proposal System** - Win more projects
4. **Project Management** - Deliver consistently
5. **Client Retention** - Build long-term relationships
6. **Scaling Strategy** - Grow beyond trading time for money

**Output:** Complete freelance business system with templates, processes, and growth tactics.`,
        promptZh: `我想建立一个可持续、盈利的自由职业业务。

**我的服务：** [你提供什么]
**目标客户：** [你想与谁合作]
**当前情况：** [刚开始、成长、扩展]
**目标：** [收入、生活方式、影响]

**请创建：**
1. **服务定位** - 打包和定价你的产品
2. **客户获取** - 系统的潜在客户生成
3. **提案系统** - 赢得更多项目
4. **项目管理** - 持续交付
5. **客户保留** - 建立长期关系
6. **扩展策略** - 超越用时间换金钱的增长

**输出：** 完整的自由职业业务系统，包含模板、流程和增长策略。`,
      },
    ],
  },
  "30": {
    id: 30,
    title: "AI-Powered Workflow Automation",
    titleZh: "AI 驱动的工作流自动化",
    category: "Operations",
    tier: "Pro",
    description:
      "Identify and automate repetitive tasks using AI tools to save time and increase efficiency.",
    descriptionZh: "使用 AI 工具识别和自动化重复任务以节省时间并提高效率。",
    steps: [
      {
        title: "Automation Opportunity Analysis",
        titleZh: "自动化机会分析",
        description: "Identify which tasks to automate and which AI tools to use.",
        descriptionZh: "识别要自动化哪些任务以及使用哪些 AI 工具。",
        prompt: `I want to use AI to automate repetitive tasks and increase my productivity.

**My Work:**
- Role/Business: [What you do]
- Daily tasks: [List your regular activities]
- Time wasters: [What takes too long]
- Tools you use: [Current software stack]
- Technical skill: [Beginner, intermediate, advanced]

**Please create:**
1. **Task Audit** - Identify automation opportunities
2. **AI Tool Recommendations** - Best tools for each task type
3. **Automation Workflows** - Step-by-step implementation
4. **Integration Strategy** - Connect tools and systems
5. **ROI Calculation** - Time and cost savings
6. **Maintenance Plan** - Keep automations running smoothly

**Output:** Complete automation strategy with tool recommendations, workflows, and implementation guides.`,
        promptZh: `我想使用 AI 自动化重复任务并提高我的生产力。

**我的工作：**
- 角色/业务：[你做什么]
- 日常任务：[列出你的常规活动]
- 时间浪费者：[什么花费太长时间]
- 你使用的工具：[当前软件堆栈]
- 技术技能：[初学者、中级、高级]

**请创建：**
1. **任务审计** - 识别自动化机会
2. **AI 工具建议** - 每种任务类型的最佳工具
3. **自动化工作流** - 分步实施
4. **集成策略** - 连接工具和系统
5. **ROI 计算** - 时间和成本节省
6. **维护计划** - 保持自动化顺利运行

**输出：** 完整的自动化策略，包含工具建议、工作流和实施指南。`,
      },
    ],
  },
};
