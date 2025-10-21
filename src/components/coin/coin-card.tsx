import Image from 'next/image';
import Link from 'next/link';
import type { Coin } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlaceholderImageById } from '@/lib/placeholder-images';
import { AddToCartButton } from '@/components/cart/add-to-cart-button';

interface CoinCardProps {
  coin: Coin;
}

export default function CoinCard({ coin }: CoinCardProps) {
  const image = getPlaceholderImageById(coin.imageId);
  
  return (
    <Card className="flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <Link href={`/coins/${coin.id}`}>
          <div className="aspect-square relative w-full overflow-hidden rounded-md">
            {image && (
              <Image
                src={image.imageUrl}
                alt={coin.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="font-headline text-xl mb-2">
            <Link href={`/coins/${coin.id}`} className="hover:text-primary transition-colors">{coin.name}</Link>
        </CardTitle>
        <p className="text-foreground/70">{coin.origin}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-lg font-semibold text-primary">
          ${coin.price.toFixed(2)}
        </p>
        <AddToCartButton coin={coin} />
      </CardFooter>
    </Card>
  );
}
