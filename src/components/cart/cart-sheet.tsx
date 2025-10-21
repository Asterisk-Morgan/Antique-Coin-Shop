'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { getPlaceholderImageById } from '@/lib/placeholder-images';

export function CartSheet({ children }: { children: React.ReactNode }) {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  return (
    <Sheet>
      {children}
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline">ショッピングカート ({cartCount})</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map(({ coin, quantity }) => {
                const imageUrl = getPlaceholderImageById(coin.imageId)?.imageUrl || getPlaceholderImageById("coin-placeholder")?.imageUrl || '';
                return (
                  <div key={coin.id} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={imageUrl}
                        alt={coin.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{coin.name}</h3>
                      <p className="text-sm text-muted-foreground">${coin.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(coin.id, quantity - 1)}
                        disabled={quantity === 1}
                      >
                        -
                      </Button>
                      <span>{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(coin.id, quantity + 1)}
                      >
                        +
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => removeFromCart(coin.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-lg font-semibold">カートは空です</p>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="border-t pt-4">
            <div className="mb-4 flex justify-between text-base font-medium">
              <span>合計</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href="/cart">カートを見る</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href="/checkout">チェックアウト</Link>
                </Button>
              </SheetClose>
            </SheetFooter>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
