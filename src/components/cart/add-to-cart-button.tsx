'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import type { Coin } from '@/lib/types';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AddToCartButtonProps {
  coin: Coin;
}

export function AddToCartButton({ coin }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isPending, startTransition] = React.useTransition();
  const { toast } = useToast();

  const handleClick = () => {
    startTransition(() => {
      addToCart(coin);
      toast({
        title: "カートに追加しました",
        description: `${coin.name}がカートに追加されました。`,
      });
    });
  };

  return (
    <Button onClick={handleClick} disabled={isPending}>
      {isPending ? (
        <span className="flex items-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          追加中...
        </span>
      ) : (
        "カートに追加"
      )}
    </Button>
  );
}
