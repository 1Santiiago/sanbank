import {
  BanknoteIcon,
  ChartLine,
  LockKeyholeIcon,
  ReceiptIcon,
  SparkleIcon,
} from "lucide-react";

export const PageCard = () => {
  const cardActions = [
    { name: "Bloquear Cartão", icon: <LockKeyholeIcon className="text-xl" /> },
    { name: "Cartão Virtual", icon: <SparkleIcon className="text-xl" /> },
    { name: "Ajustar Limite", icon: <ChartLine className="text-xl" /> },
    { name: "Ver Fatura", icon: <ReceiptIcon className="text-xl" /> },
  ];
  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto space-y-8 ">
      <h1 className="mb-8 font-bold text-2xl">Meus Cartões</h1>
      <section className="p-6 text-white bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg ">
        <div className="flex justify-between">
          <BanknoteIcon size={32} />
          <p>Platinum</p>
        </div>
        <div className="text-center mb-8">
          <p>**** **** **** 1234</p>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-70">NOME</p>
            <p className="font-semibold">Santiago F. Melo</p>
          </div>
          <div>
            <p className="text-xs opacity-70">VALIDADE</p>
            <p className="font-semibold">12/28</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md">
        <p className="text-gray-500">Fatura atual</p>
        <p className="text-3xl font-bold text-blue-500">R$ 1.250,90</p>
        <p className="text-sm text-gray-500 mt-1">Vencimento em 10/11/2025</p>
        <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Pagar Fatura
        </button>
      </section>

      <section className="grid grid-cols-4 gap-4">
        {cardActions.map((item) => (
          <button
            key={item.name}
            className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-3 hover:bg-gray-100 transition-colors text-gray-700"
          >
            <span className="text-blue-600">{item.icon}</span>
            <span className="font-semibold text-sm">{item.name}</span>
          </button>
        ))}
      </section>
    </div>
  );
};
