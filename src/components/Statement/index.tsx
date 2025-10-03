import { useState } from "react";
import { Activites } from "../Activites/index";

export const Statement = () => {
  const [filter, setFilter] = useState<"all" | "in" | "out">("all");

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
    {
      id: 5,
      type: "out",
      description: "Transferência - João P.",
      amount: "120,00",
      date: "3 dias atrás",
    },
    {
      id: 6,
      type: "in",
      description: "Venda Marketplace",
      amount: "980,00",
      date: "3 dias atrás",
    },
    {
      id: 7,
      type: "out",
      description: "Assinatura Netflix",
      amount: "55,90",
      date: "5 dias atrás",
    },
    {
      id: 8,
      type: "in",
      description: "Reembolso",
      amount: "300,00",
      date: "6 dias atrás",
    },
  ];

  const filteredTransactions = transactions.filter((t) => {
    if (filter === "all") return true;
    return t.type === filter;
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800">Extrato da Conta</h1>

      {/* Botões de filtro */}
      <div className="flex space-x-2 bg-gray-200 p-1 rounded-lg">
        <button
          onClick={() => setFilter("all")}
          className={`w-full py-2 text-sm font-semibold rounded-md transition-colors ${
            filter === "all" ? "bg-white text-blue-600 shadow" : "text-gray-600"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter("in")}
          className={`w-full py-2 text-sm font-semibold rounded-md transition-colors ${
            filter === "in" ? "bg-white text-blue-600 shadow" : "text-gray-600"
          }`}
        >
          Entradas
        </button>
        <button
          onClick={() => setFilter("out")}
          className={`w-full py-2 text-sm font-semibold rounded-md transition-colors ${
            filter === "out" ? "bg-white text-blue-600 shadow" : "text-gray-600"
          }`}
        >
          Saídas
        </button>
      </div>

      {/* Aqui passa as transações já filtradas */}
      <Activites title="" transactions={filteredTransactions} limit={8} />
    </div>
  );
};
