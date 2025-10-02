import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

export const Activites = () => {
  const transactions = [
    {
      id: 1,
      type: "in",
      description: "Pix Recebido - Maria S.",
      amount: "250,00",
      date: "Hoje",
    },
    {
      id: 2,
      type: "out",
      description: "Pagamento Boleto - Energia",
      amount: "180,50",
      date: "Hoje",
    },
    {
      id: 3,
      type: "out",
      description: "Compra Débito - Supermercado",
      amount: "345,78",
      date: "Ontem",
    },
    {
      id: 4,
      type: "in",
      description: "Salário",
      amount: "4.500,00",
      date: "2 dias atrás",
    },
  ];

  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Atividades recentes</h1>
      <div className="bg-white rounded-2xl shadow-md space-y-1">
        {transactions.slice(0, 3).map((t, index) => (
          <div
            key={t.id}
            className={`flex items-center justify-between p-3 ${
              index < 2 ? "border-b border-gray-100" : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-full ${
                  t.type === "in"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {t.type === "in" ? <ArrowDownIcon /> : <ArrowUpIcon />}
              </div>
              <div>
                <p className="font-semibold text-sm">{t.description}</p>
                <p className="text-xs text-gray-500">{t.date}</p>
              </div>
            </div>
            <span
              className={`font-bold text-sm ${
                t.type === "in" ? "text-green-600" : "text-red-600"
              }`}
            >
              {t.type === "in" ? "+" : "-"} R$ {t.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
