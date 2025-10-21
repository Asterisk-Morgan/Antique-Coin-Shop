import type { Coin } from './types';

export const coins: Coin[] = [
  {
    id: '1',
    name: 'Roman Denarius',
    year: 'c. 117-138 AD',
    origin: 'Roman Empire',
    description: 'A silver denarius from the reign of Emperor Hadrian, featuring a portrait of the emperor on the obverse and a depiction of a galley on the reverse. A fine example of Roman Imperial coinage.',
    price: 150.00,
    imageId: 'coin1'
  },
  {
    id: '2',
    name: 'Athenian Tetradrachm',
    year: 'c. 449-413 BC',
    origin: 'Ancient Greece, Athens',
    description: 'Classic "Owl" tetradrachm of Athens. This iconic silver coin features the helmeted head of Athena on the obverse and her sacred owl on the reverse. A symbol of Athenian wisdom and power.',
    price: 850.00,
    imageId: 'coin2'
  },
  {
    id: '3',
    name: 'English Gold Noble',
    year: 'c. 1361-1369 AD',
    origin: 'Kingdom of England',
    description: 'A beautiful gold noble from the reign of Edward III. The obverse depicts the king in a ship, holding a sword and shield. It represents the pinnacle of medieval English minting.',
    price: 3200.00,
    imageId: 'coin3'
  },
  {
    id: '4',
    name: 'Spanish Piece of Eight',
    year: 'c. 1772-1783 AD',
    origin: 'Spanish Empire',
    description: 'A silver 8 reales, famously known as a "piece of eight." Minted under Charles III. This coin was a global currency for centuries and is often associated with pirate lore.',
    price: 275.00,
    imageId: 'coin4'
  },
  {
    id: '5',
    name: 'Byzantine Solidus',
    year: 'c. 976-1025 AD',
    origin: 'Byzantine Empire',
    description: 'A gold solidus of Emperor Basil II. The coin shows a facing bust of Christ Pantocrator on the obverse and the crowned figures of Basil II and his brother Constantine VIII on the reverse.',
    price: 950.00,
    imageId: 'coin5'
  },
  {
    id: '6',
    name: 'Japanese Koban',
    year: 'c. 1860-1867',
    origin: 'Japan, Edo Period',
    description: 'A Man\'en koban, a distinctive oval-shaped gold coin from the late Edo period. Stamped with characters indicating its value and the mint master\'s seal.',
    price: 1800.00,
    imageId: 'coin6'
  },
];

export const getCoinById = (id: string | number): Coin | undefined => {
  return coins.find(coin => coin.id === String(id));
};
