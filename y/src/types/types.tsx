export type ICardProps = {
  source: string;
  price: number;
  name: string;
  brand: string;
  category: string;
  discount: number;
  rating: number;
  stock: number;
};

export type ICardProps1 = {
  name: string;
  brand: string;
};

export type ICardProps2 = {
  category: string;
  discount: number;
  rating: number;
  stock: number;
};

export interface IState {
  inputText: string;
}
