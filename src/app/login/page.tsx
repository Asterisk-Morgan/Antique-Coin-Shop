import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-12">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">ログイン</CardTitle>
          <CardDescription>
            アカウントにログインするために、以下にメールアドレスを入力してください
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">パスワード</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  パスワードをお忘れですか？
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              ログイン
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            アカウントをお持ちではありませんか？{" "}
            <Link href="/signup" className="underline">
              サインアップ
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
