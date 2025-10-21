'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { getPlaceholderImageById } from '@/lib/placeholder-images';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-headline mb-8">Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(({ coin, quantity }) => {
              const image = getPlaceholderImageById(coin.imageId);
              return (
                <Card key={coin.id} className="flex items-start p-4 gap-4">
                  <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={coin.name}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="flex-grow">
                    <Link href={`/coins/${coin.id}`} className="font-semibold hover:text-primary transition-colors">{coin.name}</Link>
                    <p className="text-sm text-muted-foreground">${coin.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                       <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(coin.id, quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input type="number" value={quantity} readOnly className="h-8 w-14 text-center" />
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(coin.id, quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${(coin.price * quantity).toFixed(2)}</p>
                    <Button variant="ghost" size="sm" onClick={() => removeFromCart(coin.id)} className="text-muted-foreground hover:text-destructive mt-2">
                      <Trash2 className="h-4 w-4 mr-1" /> Remove
                    </Button>
                  </div>
                </Card>
              );
            })}
             <Button variant="outline" onClick={clearCart} className="mt-4">
              Clear Cart
            </Button>
          </div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal ({cartCount} items)</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Button asChild className="w-full mt-4">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed rounded-lg">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <p className="text-muted-foreground mt-2">Looks like you haven't added any coins yet.</p>
          <Button asChild className="mt-6">
            <Link href="/">Explore Collection</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
