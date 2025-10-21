export type Coin = {
  id: string;
  name: string;
  year: string;
  origin: string;
  description: string;
  price: number;
  imageId: string;
};

export type CartItem = {
  coin: Coin;
  quantity: number;
};
