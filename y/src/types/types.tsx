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

export type ImgProps = {
  source: string | boolean;
  alt: string;
  myClass: string;
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

export type IFormValues = {
  title: string;
  date: string;
  reason: string;
  concent: boolean;
  radio: string;
  inputFile: File[];
};

export type IPropsFormComponentHook = {
  updateFormCards: (object: IObjectValues) => void;
};

export type IObjectsCardList = {
  formCards: IObjectValues[];
};

export type IObjectValues = {
  id: number;
  title: string;
  date: string;
  reason: string;
  concent: boolean;
  radio: string;
  inputFile: string;
};
