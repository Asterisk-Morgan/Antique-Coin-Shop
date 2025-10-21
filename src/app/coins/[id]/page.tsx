import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getCoinById } from '@/lib/coins';
import { getPlaceholderImageById } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AddToCartButton } from '@/components/cart/add-to-cart-button';
import { Badge } from '@/components/ui/badge';

export default function CoinDetailPage({ params }: { params: { id: string } }) {
  const coin = getCoinById(params.id);

  if (!coin) {
    notFound();
  }

  const image = getPlaceholderImageById(coin.imageId);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-4">
             {image && (
              <div className="aspect-square relative w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={coin.name}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
          </div>
          <div className="p-6 flex flex-col justify-center">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-headline text-4xl mb-2">{coin.name}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{coin.origin}</Badge>
                <Badge variant="secondary">{coin.year}</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex-grow">
              <p className="text-foreground/80 text-base leading-relaxed">{coin.description}</p>
            </CardContent>

            <Separator className="my-6" />

            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-primary">${coin.price.toFixed(2)}</p>
              <AddToCartButton coin={coin} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
