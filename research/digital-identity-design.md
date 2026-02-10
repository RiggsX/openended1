# OPENENDED 数字身份系统设计方案

**日期**: 2026-02-10

---

## 一、功能设计

### 1. 注册时生成数字身份

用户注册后通过 3 步引导生成初始身份：

**Step 1 — 风格测试（5 道选择题）**

- 选择喜欢的穿搭风格图片（街头/极简/暗黑/Y2K/赛博）
- 选择喜欢的颜色组合
- 选择音乐偏好
- 选择生活方式关键词
- 选择潮流 icon（人物/品牌）

**Step 2 — AI 生成头像**

- 基于风格测试结果，AI 生成 4 个候选头像
- 用户选择一个或重新生成

**Step 3 — 身份卡生成**

- 自动生成个人「潮流身份卡」
- 包含头像、风格标签、潮流指数

### 2. 数字身份元素

| 元素                | 说明                                                 |
| ------------------- | ---------------------------------------------------- |
| **Avatar**          | AI 生成的潮流头像（可更换）                          |
| **Style DNA**       | 风格基因标签，如 "Street 45% / Dark 30% / Cyber 25%" |
| **Vibe Score**      | 潮流指数（0-999），根据活跃度和购买行为增长          |
| **Badges**          | 成就徽章（首单、连续签到、限量抢购等）               |
| **Collection Wall** | 购买过的产品展示墙                                   |
| **Taste Graph**     | 品味雷达图（5 维：街头、极简、暗黑、Y2K、赛博）      |

### 3. 身份进化机制

**行为 → 积分 → 进化**

| 行为           | Vibe Points |
| -------------- | ----------- |
| 每日签到       | +5          |
| 浏览商品       | +1/次       |
| 加入收藏       | +3          |
| 购买商品       | +20-50      |
| 购买数字内容   | +30         |
| 分享到社交媒体 | +15         |
| 邀请好友注册   | +50         |
| 发布穿搭       | +25         |

**等级体系：**

- 0-99: 🌱 Newbie
- 100-299: 🔥 Explorer
- 300-599: ⚡ Trendsetter
- 600-899: 💎 Icon
- 900-999: 👑 Legend

每升一级，头像自动进化（增加特效/边框/光环）

### 4. 社交功能

- **Profile 页面** — 公开的个人潮流主页，可分享链接
- **排行榜** — Vibe Score 周榜/月榜
- **穿搭 Feed** — 用户上传穿搭照片，社区互动
- **身份卡分享** — 一键生成精美分享图到 Instagram/TikTok

---

## 二、技术实现方案

### 1. AI 头像生成

**MVP 方案：Stable Diffusion API**

- 使用 Stability AI API 或 Replicate
- 预设 5 套风格 prompt 模板（对应 5 种风格）
- 成本：~$0.01/张，可控

**备选：**

- DiceBear（开源 SVG 头像，零成本，风格有限）
- Ready Player Me（3D avatar，免费额度）

**推荐 MVP 用 DiceBear 起步，后期升级 AI 生成。**

### 2. 数据模型

```prisma
model DigitalIdentity {
  id          String   @id @default(cuid())
  userId      String   @unique
  user        User     @relation(fields: [userId], references: [id])

  // Avatar
  avatarUrl   String?
  avatarStyle String   @default("street") // street/minimal/dark/y2k/cyber

  // Style DNA
  streetScore  Int     @default(0)  // 0-100
  minimalScore Int     @default(0)
  darkScore    Int     @default(0)
  y2kScore     Int     @default(0)
  cyberScore   Int     @default(0)

  // Vibe Score & Level
  vibeScore   Int      @default(0)
  level       String   @default("newbie") // newbie/explorer/trendsetter/icon/legend

  // Badges
  badges      Badge[]

  // Social
  bio         String?
  isPublic    Boolean  @default(true)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Badge {
  id          String   @id @default(cuid())
  name        String   // "first_purchase", "streak_7", etc.
  icon        String   // emoji or icon name
  earnedAt    DateTime @default(now())
  identityId  String
  identity    DigitalIdentity @relation(fields: [identityId], references: [id])
}

model VibeActivity {
  id          String   @id @default(cuid())
  userId      String
  action      String   // "purchase", "browse", "share", etc.
  points      Int
  metadata    String?  // JSON string for extra data
  createdAt   DateTime @default(now())
}
```

### 3. 前端展示方案

**MVP：SVG 头像 + CSS 动效**

- DiceBear SVG 头像（即时生成，零延迟）
- CSS/Framer Motion 动效（光环、粒子、渐变边框）
- 身份卡用 Canvas API 生成分享图

**V2：AI 生成头像**

- Stable Diffusion 生成高质量头像
- 3D 旋转展示（Three.js / React Three Fiber）

**V3：3D Avatar**

- Ready Player Me 集成
- 全身 3D 形象
- 可穿戴购买的虚拟服饰

---

## 三、MVP 版本规划

### MVP（第一版）— 2 周开发

**核心功能：**

1. ✅ 注册时 3 步风格测试
2. ✅ DiceBear SVG 头像自动生成
3. ✅ Style DNA 雷达图展示
4. ✅ Vibe Score 基础积分系统
5. ✅ 个人 Profile 页面
6. ✅ 身份卡分享图生成

**不做：**

- ❌ AI 生成头像（V2）
- ❌ 3D Avatar（V3）
- ❌ 排行榜（V2）
- ❌ 穿搭 Feed（V2）

### 迭代路线图

**V2（上线后 1-2 月）**

- AI 生成头像
- 排行榜系统
- 徽章系统完善
- 穿搭 Feed

**V3（上线后 3-6 月）**

- 3D Avatar
- 虚拟试穿
- NFT 身份卡
- 社交互动（关注、点赞）

---

## 四、参考案例

| 产品                   | 特点               | 可借鉴          |
| ---------------------- | ------------------ | --------------- |
| **Bitmoji (Snapchat)** | 卡通头像，表情丰富 | 头像自定义流程  |
| **Ready Player Me**    | 3D 全身 avatar     | 3D 展示技术     |
| **Nike .SWOOSH**       | 数字藏品 + 身份    | 品牌 × 数字身份 |
| **Strava**             | 运动积分和成就系统 | 积分进化机制    |
| **Discord Profile**    | 徽章 + 个性化      | 徽章系统设计    |
| **Spotify Wrapped**    | 年度数据可视化分享 | 身份卡分享机制  |

---

## 五、成本估算

| 项目               | MVP 成本            |
| ------------------ | ------------------- |
| DiceBear 头像      | 免费（开源）        |
| Stability AI（V2） | ~$0.01/张           |
| 数据库存储         | Supabase 免费层够用 |
| 分享图生成         | 前端 Canvas，零成本 |
| **总计**           | **$0（MVP 阶段）**  |

---

**结论：数字身份系统是 OPENENDED 的核心差异化，MVP 可以零成本实现，后续逐步升级到 AI 头像和 3D Avatar。**
