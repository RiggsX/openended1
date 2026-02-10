# OPENENDED 订阅系统设置指南

## 已完成的开发工作

✅ **认证系统**
- NextAuth.js 集成（Google OAuth）
- 用户登录/登出
- Session 管理

✅ **订阅系统**
- PayPal 订阅集成
- 三档定价（Core/Plus/Pro）
- 月付/年付切换
- Webhook 处理订阅状态

✅ **数据库 Schema**
- PostgreSQL schema（用户、订阅、工作流）
- Prisma ORM 配置

✅ **前端页面**
- 产品页（带订阅按钮）
- 登录页
- Dashboard（会员区）

---

## 需要配置的服务

### 1. 数据库（PostgreSQL）

**推荐：Supabase（免费额度足够）**

1. 访问 https://supabase.com
2. 创建新项目
3. 获取 Database URL（Settings → Database → Connection string）
4. 复制到 `.env` 的 `DATABASE_URL`

**或者本地 PostgreSQL：**
```bash
# 安装 PostgreSQL
sudo apt install postgresql

# 创建数据库
sudo -u postgres createdb openended

# 连接字符串
DATABASE_URL="postgresql://postgres:password@localhost:5432/openended"
```

### 2. Google OAuth（用户登录）

1. 访问 https://console.cloud.google.com
2. 创建新项目或选择现有项目
3. 启用 Google+ API
4. 创建 OAuth 2.0 凭据：
   - 应用类型：Web 应用
   - 授权重定向 URI：`http://localhost:3001/api/auth/callback/google`
   - 生产环境：`https://yourdomain.com/api/auth/callback/google`
5. 复制 Client ID 和 Client Secret 到 `.env`

### 3. PayPal 订阅

#### 3.1 创建 PayPal 开发者账号

1. 访问 https://developer.paypal.com
2. 登录你的 PayPal 账号
3. Dashboard → My Apps & Credentials
4. 创建 App（Sandbox 测试 + Live 生产）
5. 复制 Client ID 和 Secret 到 `.env`

#### 3.2 创建订阅计划（Billing Plans）

**重要：需要在 PayPal Dashboard 创建 6 个订阅计划**

1. 访问 https://www.paypal.com/billing/plans
2. 创建以下计划：

**Core Monthly**
- 名称：OPENENDED Core (Monthly)
- 价格：$19/月
- 复制 Plan ID → `PAYPAL_PLAN_CORE_MONTHLY`

**Core Yearly**
- 名称：OPENENDED Core (Yearly)
- 价格：$149/年
- 复制 Plan ID → `PAYPAL_PLAN_CORE_YEARLY`

**Plus Monthly**
- 名称：OPENENDED Plus (Monthly)
- 价格：$29/月
- 复制 Plan ID → `PAYPAL_PLAN_PLUS_MONTHLY`

**Plus Yearly**
- 名称：OPENENDED Plus (Yearly)
- 价格：$199/年
- 复制 Plan ID → `PAYPAL_PLAN_PLUS_YEARLY`

**Pro Monthly**
- 名称：OPENENDED Pro (Monthly)
- 价格：$49/月
- 复制 Plan ID → `PAYPAL_PLAN_PRO_MONTHLY`

**Pro Yearly**
- 名称：OPENENDED Pro (Yearly)
- 价格：$399/年
- 复制 Plan ID → `PAYPAL_PLAN_PRO_YEARLY`

#### 3.3 配置 Webhook

1. PayPal Dashboard → Webhooks
2. 创建新 Webhook
3. URL：`https://yourdomain.com/api/webhooks/paypal`
4. 选择事件：
   - `BILLING.SUBSCRIPTION.ACTIVATED`
   - `BILLING.SUBSCRIPTION.CANCELLED`
   - `BILLING.SUBSCRIPTION.SUSPENDED`
   - `BILLING.SUBSCRIPTION.EXPIRED`
   - `BILLING.SUBSCRIPTION.UPDATED`

### 4. NextAuth Secret

生成随机密钥：
```bash
openssl rand -base64 32
```
复制到 `.env` 的 `NEXTAUTH_SECRET`

---

## 环境变量配置

创建 `.env` 文件（参考 `.env.example`）：

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/openended"

# NextAuth
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="your-generated-secret"

# Google OAuth
GOOGLE_CLIENT_ID="xxx.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-xxx"

# PayPal
PAYPAL_CLIENT_ID="your-paypal-client-id"
PAYPAL_CLIENT_SECRET="your-paypal-secret"

# PayPal Plan IDs
PAYPAL_PLAN_CORE_MONTHLY="P-xxx"
PAYPAL_PLAN_CORE_YEARLY="P-xxx"
PAYPAL_PLAN_PLUS_MONTHLY="P-xxx"
PAYPAL_PLAN_PLUS_YEARLY="P-xxx"
PAYPAL_PLAN_PRO_MONTHLY="P-xxx"
PAYPAL_PLAN_PRO_YEARLY="P-xxx"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3001"
```

---

## 初始化数据库

```bash
cd /home/riggs/.openclaw/workspace/open-ended

# 生成 Prisma Client
npx prisma generate

# 运行数据库迁移
npx prisma migrate dev --name init

# （可选）打开 Prisma Studio 查看数据
npx prisma studio
```

---

## 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3001

---

## 测试流程

1. **注册/登录**
   - 访问 `/auth/signin`
   - 使用 Google 登录

2. **选择订阅**
   - 访问 `/product`
   - 选择 Core/Plus/Pro
   - 点击订阅按钮
   - 跳转到 PayPal 支付页面
   - 完成支付

3. **查看 Dashboard**
   - 支付成功后自动跳转到 `/dashboard`
   - 查看订阅状态
   - 访问工作流库

---

## 生产部署注意事项

### 1. 环境变量
- 更新 `NEXTAUTH_URL` 为生产域名
- 更新 `NEXT_PUBLIC_APP_URL` 为生产域名
- 使用 PayPal Live 凭据（不是 Sandbox）

### 2. Google OAuth
- 添加生产域名到授权重定向 URI

### 3. PayPal Webhook
- 更新 Webhook URL 为生产域名
- 实现 Webhook 签名验证（当前代码中已标注 TODO）

### 4. 数据库
- 使用生产级 PostgreSQL（Supabase/Railway/Render）
- 定期备份

---

## 下一步开发

1. **内容管理**
   - 工作流上传/编辑界面
   - 按订阅等级控制访问

2. **用户体验**
   - 订阅管理页面（升级/降级/取消）
   - 邮件通知（订阅确认、续费提醒）

3. **分析**
   - 订阅转化率追踪
   - 用户行为分析

---

## 问题排查

### 订阅按钮无响应
- 检查浏览器控制台错误
- 确认 PayPal Plan IDs 正确
- 检查用户是否已登录

### Webhook 未触发
- 检查 PayPal Webhook 配置
- 查看服务器日志
- 确认 URL 可公开访问（本地开发用 ngrok）

### 数据库连接失败
- 检查 `DATABASE_URL` 格式
- 确认数据库服务运行中
- 运行 `npx prisma migrate dev`

---

**当前状态**：代码已完成，等待配置服务和测试 🚀
