import Link from "next/link";
import { Button } from "@repo/ui";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Fullstack Monorepo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              基于 Next.js 15 + Supabase + shadcn/ui + Tailwind CSS + Turborepo 构建的全栈项目
            </p>
          </div>

          <div className="flex gap-4">
            {user ? (
              <Button asChild size="lg">
                <Link href="/dashboard">进入控制台</Link>
              </Button>
            ) : (
              <>
                <Button asChild size="lg">
                  <Link href="/login">登录</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/register">注册</Link>
                </Button>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Next.js 15</CardTitle>
                <CardDescription>App Router + Server Components</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  使用最新的 React 19 和 Next.js 15，支持流式渲染和服务端组件
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Supabase</CardTitle>
                <CardDescription>数据库 + 认证 + 存储</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  开源的 Firebase 替代方案，内置 PostgreSQL、实时订阅和文件存储
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Turborepo</CardTitle>
                <CardDescription>高性能 Monorepo 构建系统</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  智能缓存和并行任务执行，大幅提升 CI/CD 构建速度
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
