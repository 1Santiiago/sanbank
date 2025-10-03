import { Activites } from "../Activites";
import { Balance } from "../Balance";
import { FastChange } from "../FastingChange";
import { MyCard } from "../Mycard";
import Suggestion from "../Suggestion";

function HomeScreen() {
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
  return (
    <main className="p-4 md:p-6 max-w-4xl mx-auto space-y-8 flex-grow mb-20">
      <Balance />
      <FastChange />
      <MyCard />
      <Suggestion />
      <Activites transactions={transactions} />
    </main>
  );
}

export default HomeScreen;
