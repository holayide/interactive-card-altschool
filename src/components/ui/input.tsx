import { useState } from "react";
import type { InputProps } from "../feature/type";

export default function Input({
  name,
  placeholder,
  maxLength,
  error,
  autoFocus,
  value,
  onChange,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative rounded-lg p-[1px] transition-all duration-300
    ${
      isFocused
        ? "bg-gradient-to-r from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)]"
        : "bg-gray-200"
    }
    `}
    >
      <input
        {...rest}
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className={`w-full py-1 px-2 rounded-[7px] bg-white outline-none transition-all duration-300 placeholder:text-sm placeholder:text-gray-400 ${
          error ? "border-red-400" : "border-gray-200"
        } focus:shadow-lg`}
        value={value}
        maxLength={maxLength}
        autoFocus={autoFocus}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
