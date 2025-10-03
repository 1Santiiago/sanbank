import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface Transaction {
  id: number;
  type: any;
  description: string;
  amount: string;
  date: string;
}

interface ActivitesProps {
  title?: string;
  transactions: Transaction[];
  limit?: number;
}

export const Activites = ({
  title = "Atividades recentes",
  transactions,
  limit = 3,
}: ActivitesProps) => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-3">{title}</h1>
      <div className="bg-white rounded-2xl shadow-md space-y-1">
        {transactions.slice(0, limit).map((t, index) => (
          <div
            key={t.id}
            className={`flex items-center justify-between p-3 ${
              index < limit - 1 ? "border-b border-gray-100" : ""
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
