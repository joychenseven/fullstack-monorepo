import type { User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { supabase } from "../lib/supabase";

interface DashboardPageProps {
  user: User;
}

export function DashboardPage({ user }: DashboardPageProps) {
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">管理后台</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              退出登录
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>用户管理</CardTitle>
              <CardDescription>管理所有注册用户</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">-</p>
              <p className="text-sm text-muted-foreground mt-1">总用户数</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>内容管理</CardTitle>
              <CardDescription>管理所有发布内容</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">-</p>
              <p className="text-sm text-muted-foreground mt-1">总文章数</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>系统状态</CardTitle>
              <CardDescription>Supabase 连接状态</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-500">正常</p>
              <p className="text-sm text-muted-foreground mt-1">所有服务运行中</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
