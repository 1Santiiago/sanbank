import {
  ArrowsUpFromLine,
  BarcodeIcon,
  ReceiptIcon,
  SparkleIcon,
} from "lucide-react";

export const FastChange = () => {
  const quickActions = [
    { name: "Área Pix", icon: <SparkleIcon className="text-2xl" /> },
    { name: "Pagar", icon: <BarcodeIcon className="text-2xl" /> },
    { name: "Transferir", icon: <ArrowsUpFromLine className="text-2xl" /> },
    { name: "Extrato", icon: <ReceiptIcon className="text-2xl" /> },
  ];

  return (
    <section className="grid grid-cols-4 text-center">
      {quickActions.map((item) => (
        <button
          key={item.name}
          className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span className="bg-gray-200 p-3 rounded-full text-blue-600">
            {item.icon}
          </span>
          <span className="text-xs font-semibold text-gray-700">
            {item.name}
          </span>
        </button>
      ))}
    </section>
  );
};
