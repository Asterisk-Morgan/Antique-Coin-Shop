import type { Coin } from './types';

export const coins: Coin[] = [
  {
    id: '1',
    name: 'ローマ デナリウス',
    year: 'c. 117-138 AD',
    origin: 'ローマ帝国',
    description: 'ハドリアヌス帝の治世の銀貨デナリウス。表面には皇帝の肖像、裏面にはガレー船が描かれています。ローマ帝国の貨幣の素晴らしい例です。',
    price: 150.00,
    imageId: 'coin1'
  },
  {
    id: '2',
    name: 'アテネ テトラドラクマ',
    year: 'c. 449-413 BC',
    origin: '古代ギリシャ、アテネ',
    description: 'アテネの古典的な「フクロウ」テトラドラクマ。この象徴的な銀貨は、表面にアテナの兜をかぶった頭部、裏面には聖なるフクロウが描かれています。アテネの知恵と力の象徴です。',
    price: 850.00,
    imageId: 'coin2'
  },
  {
    id: '3',
    name: 'イングランド金貨ノーブル',
    year: 'c. 1361-1369 AD',
    origin: 'イングランド王国',
    description: 'エドワード3世の治世の美しい金貨ノーブル。表面には剣と盾を持った船上の王が描かれています。中世イングランドの鋳造技術の頂点を表しています。',
    price: 3200.00,
    imageId: 'coin3'
  },
  {
    id: '4',
    name: 'スペイン 8レアル銀貨',
    year: 'c. 1772-1783 AD',
    origin: 'スペイン帝国',
    description: '「8レアル銀貨」として有名な銀貨。チャールズ3世の下で鋳造されました。このコインは何世紀にもわたって世界通貨として流通し、海賊の伝説と関連付けられることが多いです。',
    price: 275.00,
    imageId: 'coin4'
  },
  {
    id: '5',
    name: 'ビザンチン ソリドゥス',
    year: 'c. 976-1025 AD',
    origin: 'ビザンチン帝国',
    description: 'バシレイオス2世皇帝の金貨ソリドゥス。表面にはキリスト・パントクラトールの正面胸像、裏面にはバシレイオス2世と弟コンスタンティノス8世の冠を戴いた姿が描かれています。',
    price: 950.00,
    imageId: 'coin5'
  },
  {
    id: '6',
    name: '日本 小判',
    year: 'c. 1860-1867',
    origin: '日本、江戸時代',
    description: '江戸時代後期の独特な楕円形の金貨、万延小判。価値を示す文字と鋳造師の印が刻印されています。',
    price: 1800.00,
    imageId: 'coin6'
  },
];

export const getCoinById = (id: string | number): Coin | undefined => {
  return coins.find(coin => coin.id === String(id));
};
