import { coins } from '@/lib/coins';
import CoinCard from './coin-card';

export default function CoinList() {
  const allCoins = coins;

  return (
    <div id="collection" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {allCoins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
