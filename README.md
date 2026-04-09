# Fullstack Monorepo

基于 **pnpm + Turborepo + Next.js 15 + Supabase + shadcn/ui + Tailwind CSS + Vite** 构建的全栈 Monorepo 项目模板。

## 技术栈

| 技术 | 说明 |
|------|------|
| [pnpm](https://pnpm.io) | 高性能包管理器 |
| [Turborepo](https://turbo.build) | Monorepo 构建系统，支持智能缓存 |
| [Next.js 15](https://nextjs.org) | React 全栈框架 (App Router) |
| [Vite](https://vitejs.dev) | 下一代前端构建工具 |
| [Supabase](https://supabase.com) | 开源 BaaS (PostgreSQL + Auth + Storage) |
| [shadcn/ui](https://ui.shadcn.com) | 可复用 UI 组件库 |
| [Tailwind CSS](https://tailwindcss.com) | 原子化 CSS 框架 |
| [TypeScript](https://typescriptlang.org) | 类型安全 |

## 项目结构

```
fullstack-monorepo/
├── apps/
│   ├── web/          # Next.js 15 主应用 (端口 3000)
│   └── admin/        # Vite + React 管理后台 (端口 3001)
├── packages/
│   ├── ui/           # 共享 UI 组件 (shadcn/ui)
│   ├── database/     # Supabase 客户端 & TypeScript 类型
│   └── config/       # 共享配置 (tailwind, typescript, eslint)
├── supabase/
│   ├── migrations/   # 数据库迁移文件
│   └── config.toml   # Supabase 本地开发配置
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

```bash
# 复制环境变量示例文件
cp .env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local
```

在 [Supabase](https://supabase.com) 创建项目后，填入：
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### 3. 初始化数据库（本地开发）

```bash
# 安装 Supabase CLI
npm install -g supabase

# 启动本地 Supabase
supabase start

# 运行迁移
supabase db push
```

### 4. 启动开发服务器

```bash
# 同时启动所有应用
pnpm dev

# 或单独启动
pnpm --filter @repo/web dev      # Next.js (http://localhost:3000)
pnpm --filter @repo/admin dev    # Vite (http://localhost:3001)
```

### 5. 构建

```bash
pnpm build
```

## 常用命令

```bash
# 类型检查
pnpm typecheck

# 代码检查
pnpm lint

# 清理构建产物
pnpm clean

# 生成 Supabase 类型
pnpm --filter @repo/database generate-types
```

## 数据库表结构

- **profiles** - 用户资料（与 auth.users 关联，注册时自动创建）
- **posts** - 文章（支持草稿/发布状态）

所有表均启用了 Row Level Security (RLS)。

## 路由结构

### Web (Next.js)
- `/` - 首页
- `/login` - 登录
- `/register` - 注册
- `/dashboard` - 用户控制台（需认证）
- `/api/auth/callback` - OAuth 回调

### Admin (Vite + React)
- `/login` - 管理员登录
- `/dashboard` - 管理控制台（需认证）
