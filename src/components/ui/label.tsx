import type { LabelProps } from "../feature/type";

export default function Label({ name, text }: LabelProps) {
  return (
    <label
      htmlFor={name}
      className="text-xxs block mb-1 font-medium tracking-widest"
    >
      {text}
    </label>
  );
}
