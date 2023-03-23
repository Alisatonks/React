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

export type ICardProps1 = Pick<ICardProps, 'name' | 'brand'>;

export type ICardProps2 = Pick<
  ICardProps,
  'category' | 'discount' | 'rating' | 'stock'
>;

export interface IState {
  inputText: string;
}

export type IProps = {
  key: string;
};

export type IH1Content = {
  content: string;
};

export type ImgProps = {
  source: string;
  alt: string;
  myClass: string;
};

export type IFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputText: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  inputDrop: React.RefObject<HTMLSelectElement>;
  concent: React.RefObject<HTMLInputElement>;
  radioReturn: React.RefObject<HTMLInputElement>;
  radioExchange: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;
};

export type IFormCardData = {
  id: number;
  title: string;
  date: string;
  reason: string;
  concent: boolean;
  radioReturn: boolean;
  radioExchange: boolean;
  inputFile: string;
};

export type IFormPageState = {
  formCards: IFormCardData[];
};

export type IFormContainerProps = {
  addCard: (data: IFormCardData) => void;
};

export type InputRadioProps = {
  htmlFor: string;
  content: string;
  ref1: React.RefObject<HTMLInputElement>;
  id: string;
};
