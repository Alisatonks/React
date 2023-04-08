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
  image: string | boolean;
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

export type ICharacter = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
};

export type IReceivedData = {
  data: ICharacter[];
};

export type IGeneralCard = {
  name: string;
  status: string;
  image: string;
  id: number;
};

export interface ISearchBarProps {
  setCardsData: React.Dispatch<React.SetStateAction<ICharacter[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cardsData: ICharacter[] | ICharacter;
}

export interface IModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

export type IModalCard = {
  name: string;
  status: string;
  gender: string;
  species: string;
  location: {
    name: string;
    url: string;
  };
  image: string;
};

export interface ModalCardProps {
  id: number;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
