import { CreditCardIcon } from "lucide-react";
import { Link } from "react-router";

export const MyCard = () => {
  return (
    <section className="flex items-center space-x-4 shadow-md rounded-2xl p-4 ">
      <CreditCardIcon className="text-3xl text-blue-600" />
      <div className="flex-grow">
        <h2 className="font-bold">Meus Cartões</h2>
        <p className="text-sm text-gray-500">Fatura atual: R$ 1259,90</p>
        <p className="text-sm text-gray-500">Limite disponivel: R$ 7554,90</p>
      </div>

      <button className="bg-blue-50 text-blue-700 text-xs font-bold py-1 px-3 rounded-full hover:bg-blue-100">
        <Link to={"/card"}>VER</Link>
      </button>
    </section>
  );
};
