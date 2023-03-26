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
  source: string | boolean;
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
  cardCreated: boolean;
};

export type IFormCardData = {
  id: number;
  title: string | boolean;
  date: string | boolean;
  reason: string | boolean | undefined;
  concent: boolean;
  radio: string | boolean;
  inputFile: string | boolean;
};

export type IFormPageState = {
  formCards: IFormCardData[];
  validationErrors: string[];
};

export type IFormContainerProps = {
  addCard: (data: IFormCardData) => void;
  addValErr: (data: string[]) => void;
};

export type InputRadioProps = {
  htmlFor: string;
  content: string;
  ref1: React.RefObject<HTMLInputElement>;
  id: string;
};

export type CardContainerState = {
  cardCreated: boolean;
};
