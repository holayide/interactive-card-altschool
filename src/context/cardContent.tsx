import { createContext, useState } from "react";

import type {
  CardContextType,
  CardProviderProps,
} from "../components/feature/type";

const CardContext = createContext<CardContextType | null>(null);

const CardProvider = ({ children }: CardProviderProps) => {
  const initialCard = {
    cardName: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    expMonth: "00",
    expYear: "00",
    cvc: "000",
  };
  const [cardData, setCardData] = useState(initialCard);

  return (
    <CardContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
