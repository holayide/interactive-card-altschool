import { z } from "zod";

export const cardSchema = z.object({
  cardName: z.string().min(1, "Cardholder name is required"),
  cardNumber: z
    .string()
    .min(1, "Card Number is required")
    .transform((val) => val.replace(/\s/g, ""))
    .refine((val) => /^\d+$/.test(val), {
      message: "Must contain only numbers",
    })
    .refine((val) => val.length === 16, {
      message: "Must be exactly 16 digits",
    }),

  expMonth: z
    .string()
    .min(1, "Can't be blank")
    .length(2, "Must be 2 digits")
    .regex(/^\d{2}$/, "Must be numbers only"),

  expYear: z
    .string()
    .min(1, "Can't be blank")
    .length(2, "Must be 2 digits")
    .regex(/^\d{2}$/, "Must be numbers only"),

  cvc: z
    .string()
    .min(1, "Can't be blank")
    .max(3)
    .regex(/^\d+$/, "Must contain only numbers"),
});

export type CardFormData = z.infer<typeof cardSchema>;
