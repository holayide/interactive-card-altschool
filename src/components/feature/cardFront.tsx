import { useContext } from "react";

import { CardContext } from "../../context/cardContent";
import cardLogo from "../../assets/card-logo.svg";

export default function CardFront() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("CardFront must be used within a CardProvider");
  }
  const { cardData } = context;

  return (
    <article className="w-[300px] h-[160px] xxs:w-[400px] xxs:h-[200px] p-6 order-2 lg:order-1 z-5 rounded-[7px] bg-[url(./assets/bg-card-front.png)] bg-no-repeat bg-center bg-cover shadow-2xl -translate-y-[100.5px] -translate-x-5 xxs:-translate-y-[116.5px] lg:-translate-y-0 lg:-translate-x-0">
      <div className="h-full flex flex-col">
        <div>
          <img src={cardLogo} alt="card Logo" className="h-7 xxs:h-auto" />
        </div>

        <div className="mt-auto flex flex-col gap-3 tracking-widest">
          <h3 className="text-base xxs:text-2xl tracking-[.2rem]">
            {cardData.cardNumber || "0000 0000 0000 0000"}
          </h3>
          <div className="flex justify-between text-[11px]">
            <p>{cardData.cardName.toUpperCase() || "Jane Appleseed"}</p>
            <p>{`${cardData.expMonth || "00"}/${cardData.expYear || "00"}`}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
