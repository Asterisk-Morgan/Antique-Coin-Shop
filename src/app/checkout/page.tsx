'use client';

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '注文完了！',
      description: 'ご購入ありがとうございます。ご注文は処理中です。',
    });
    clearCart();
    router.push('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-semibold">カートは空です。</h1>
        <p className="text-muted-foreground">チェックアウトする前に、カートに商品を追加してください。</p>
        <Button onClick={() => router.push('/')} className="mt-4">
          買い物を続ける
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-headline mb-8 text-center">チェックアウト</h1>
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>配送先情報</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="name">氏名</Label>
                <Input id="name" required />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="address">住所</Label>
                <Input id="address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">市区町村</Label>
                <Input id="city" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">都道府県</Label>
                <Input id="state" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">郵便番号</Label>
                <Input id="zip" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">国</Label>
                <Input id="country" required />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>支払い詳細</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">カード番号</Label>
                <Input id="card-number" placeholder="•••• •••• •••• ••••" required />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="expiry-date">有効期限</Label>
                  <Input id="expiry-date" placeholder="MM / YY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="•••" required />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>注文概要</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cartItems.map(({ coin, quantity }) => (
              <div key={coin.id} className="flex justify-between items-center text-sm">
                <p>{coin.name} <span className="text-muted-foreground">x{quantity}</span></p>
                <p>${(coin.price * quantity).toFixed(2)}</p>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>合計</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Button type="submit" className="w-full mt-4">
              注文を確定する
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
