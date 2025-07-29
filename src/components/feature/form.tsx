import { useContext, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cardSchema, type CardFormData } from "../../hooks/cardSchema";
import { CardContext } from "../../context/cardContent";
import { formatCardNumber } from "../../hooks/helper";

import Input from "../ui/input";
import Label from "../ui/label";
import type { FormProps } from "./type";

export default function Form({ handleIsConfirm }: FormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [cardNumberInput, setCardNumberInput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
  });

  // context
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("CardForm must be used within a CardProvider");
  }
  const { setCardData } = context;

  // format card number
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumberInput(formatted);
    setValue("cardNumber", formatted);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      setCardData({
        cardName: value.cardName || "Jane Appleseed",
        cardNumber: value.cardNumber || "0000 0000 0000 0000",
        expMonth: value.expMonth || "00",
        expYear: value.expYear || "00",
        cvc: value.cvc || "000",
      });
    });

    return () => subscription.unsubscribe();
  }, [watch, setCardData]);

  const onSubmit = (data: CardFormData) => {
    setIsLoading(true);

    console.log("Form submitted!", data);

    setTimeout(() => {
      handleIsConfirm?.();
      setIsLoading(false);
    }, 1000);

    setCardData({
      cardName: "Jane Appleseed",
      cardNumber: "0000 0000 0000 0000",
      expMonth: "00",
      expYear: "00",
      cvc: "000",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 lg:gap-3"
    >
      <div>
        <Label name="cardName" text="CARDHOLDER NAME" />
        <Input
          {...register("cardName")}
          name="cardName"
          placeholder="e.g. Jane Appleseed"
          error={!!errors.cardName}
          autoFocus={true}
        />
        {errors.cardName && (
          <p className="text-xxs mt-0.5 text-red-400">
            {errors.cardName.message}
          </p>
        )}
      </div>

      <div>
        <Label name="cardNumber" text="CARDHOLDER NUMBER" />
        <Input
          {...register("cardNumber")}
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
          value={cardNumberInput}
          onChange={handleCardNumberChange}
          error={!!errors.cardNumber}
        />
        {errors.cardNumber && (
          <p className="text-xxs mt-0.5 text-red-400">
            {errors.cardNumber.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label name="expMonth" text="EXP. DATE(MM/YY)" />

          <div className="grid grid-cols-2 gap-1">
            <Input
              {...register("expMonth")}
              name="expMonth"
              placeholder="MM"
              maxLength={2}
              error={!!errors.expMonth}
            />
            <Input
              {...register("expYear")}
              name="expYear"
              placeholder="YY"
              maxLength={2}
              error={!!errors.expYear}
            />
          </div>
          {(errors.expMonth || errors.expYear) && (
            <p className="text-xxs mt-0.5 text-red-400">
              {errors.expMonth?.message || errors.expYear?.message}
            </p>
          )}
        </div>

        <div>
          <Label name="cvc" text="CVC" />
          <Input
            {...register("cvc")}
            name="cvc"
            placeholder="e.g. 123"
            maxLength={3}
            error={!!errors.cvc}
          />
          {errors.cvc && (
            <p className="text-xxs mt-0.5 text-red-400">{errors.cvc.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 py-3 bg-purple-950 text-white rounded-[7px] cursor-pointer transition-all ease-in hover:bg-[#372244]"
      >
        {isLoading ? (
          <span className="flex items-center gap-2 justify-center">
            <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Confirming...
          </span>
        ) : (
          "Confirm"
        )}
      </button>
    </form>
  );
}
