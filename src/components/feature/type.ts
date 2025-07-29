import { type Dispatch, type ReactNode, type SetStateAction } from "react";

export type CardProviderProps = {
  children: ReactNode;
};

export type CardContextType = {
  cardData: CardDataProps;
  setCardData: Dispatch<SetStateAction<CardDataProps>>;
  // a way to describe the setstate fxn i get from usestate
};

export type InputProps = {
  name: string;
  placeholder: string;
  maxLength?: number;
  error?: boolean;
  autoFocus?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type LabelProps = {
  name: string;
  text: string;
};

export type CardDataProps = {
  cardName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
};

export type FormProps = {
  isconfirm?: boolean;
  handleIsConfirm?: () => void;
};
