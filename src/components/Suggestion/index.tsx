import { ChartLineIcon, HandCoinsIcon, ShieldCheckIcon } from "lucide-react";

function Suggestion() {
  const suggestion = [
    {
      name: "Investimentos",
      icon: <ChartLineIcon className="text-2xl" />,
      desc: "Faça seu dinheiro render.",
    },
    {
      name: "Seguros",
      icon: <ShieldCheckIcon className="text-2xl" />,
      desc: "Proteja o que importa.",
    },
    {
      name: "Empréstimos",
      icon: <HandCoinsIcon className="text-2xl" />,
      desc: "Crédito para seus planos.",
    },
  ];
  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Sugestões para você</h2>
      <section className="flex space-x-4 pb-4 w-full justify-between overflow-x-auto ">
        {suggestion.map((item) => (
          <button
            key={item.name}
            className="bg-white p-4 rounded-2xl shadow-md flex-shrink-0 w-40 flex flex-col items-start space-y-3 hover:shadow-lg transition-shadow"
          >
            <span className="text-blue-600">{item.icon}</span>
            <div className="text-left">
              <p className="font-bold">{item.name}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </button>
        ))}
      </section>
    </div>
  );
}

export default Suggestion;
