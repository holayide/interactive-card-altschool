import check from "../../assets/icon-complete.svg";
import type { FormProps } from "./type";

function CardAdded({ handleIsConfirm }: FormProps) {
  return (
    <div className="flex flex-col text-center">
      <div className="mb-6 flex items-center justify-center">
        <img src={check} alt="check" className="" />
      </div>
      <h3 className="text-2xl text-purple-950 tracking-wider font-medium uppercase">
        Thank you!
      </h3>
      <p className="text-sm text-gray-400 font-medium">
        We've added your card details
      </p>
      <button
        onClick={handleIsConfirm}
        className="w-full mt-8 py-3 bg-purple-950 text-white rounded-[7px] cursor-pointer transition-all ease-in hover:bg-[#372244]"
      >
        Continue
      </button>
    </div>
  );
}

export default CardAdded;
