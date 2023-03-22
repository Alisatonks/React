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

export type IProps = {
  key: string;
};

export type IH1Content = {
  content: string;
};

export type IFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputText: React.RefObject<HTMLInputElement>;
};

export type IFormCardData = {
  title: string;
};

export type IFormPageState = {
  formCards: IFormCardData[];
};

export type IFormContainerProps = {
  addCard: (data: IFormCardData) => void;
};
