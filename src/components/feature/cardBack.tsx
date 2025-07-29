import { useContext } from "react";
import { CardContext } from "../../context/cardContent";

export default function CardBack() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("CardBack must be used within a CardProvider");
  }
  const { cardData } = context;

  return (
    <article className="w-[300px] h-[160px] xxs:w-[400px] xxs:h-[200px] order-1 lg:order-2 rounded-[7px] bg-[url(./assets/bg-card-back.png)] bg-no-repeat bg-center bg-cover translate-x-5 lg:translate-x-20 shadow-2xl">
      <div className="h-full relative">
        <p className="absolute top-[69px] xxs:top-[86px] right-10 xxs:right-12 text-sm xxs:text-base">
          {cardData.cvc || "000"}
        </p>
      </div>
    </article>
  );
}
