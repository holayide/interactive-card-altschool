import { useState } from "react";

import CardAdded from "./cardAdded";
import Form from "./form";

export default function CardForm() {
  const [isConfirm, setIsConfirm] = useState(false);

  const handleIsConfirm = () => {
    setIsConfirm((prev) => !prev);
  };

  return (
    <div className="h-auto lg:h-screen xl:ml-6 lg:ml-8 mt-20 xs:mt-10 lg:mt-0 flex items-center justify-center xl:justify-start">
      <div className="max-w-[330px] w-full">
        {!isConfirm ? (
          <Form handleIsConfirm={handleIsConfirm} />
        ) : (
          <CardAdded handleIsConfirm={handleIsConfirm} />
        )}
      </div>
    </div>
  );
}
