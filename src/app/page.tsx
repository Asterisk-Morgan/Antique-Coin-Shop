import Image from "next/image";
import Link from "next/link";
import CoinList from "@/components/coin/coin-list";
import { Button } from "@/components/ui/button";
import { getPlaceholderImageById } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = getPlaceholderImageById("hero-image");

  return (
    <div className="space-y-12">
      <section className="relative h-[400px] w-full overflow-hidden rounded-lg bg-card shadow-lg">
        {heroImage && (
           <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 drop-shadow-lg">A Collector's Treasury</h1>
          <p className="max-w-xl text-lg mb-6 drop-shadow-md">
            Journey through time with our curated collection of rare and historical coins. Each piece tells a story.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/identify">Identify a Coin</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Our Collection</h2>
        <CoinList />
      </section>
    </div>
  );
}
