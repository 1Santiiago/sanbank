import { EyeIcon } from "lucide-react";
import ButtonComponent from "../Button";
import { useState } from "react";

export const Balance = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-md text-gray-600">Saldo em conta</h2>
        <ButtonComponent
          btnClass="focus:outline-none text-gray-500 hover:text-blue-600"
          icons={<EyeIcon className="text-2xl" />}
          onClick={() => setBalanceVisible(!balanceVisible)}
        />
      </div>
      <div className="mt-1">
        <span className="text-3xl font-bold">
          {balanceVisible ? "5.847,22" : "***"}
        </span>
      </div>
    </section>
  );
};
