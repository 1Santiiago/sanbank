import {
  ArrowRightIcon,
  BellIcon,
  FileQuestionIcon,
  LockKeyholeIcon,
  PencilIcon,
  UserCircleIcon,
} from "lucide-react";

export const Profile = () => {
  const profileOptions = [
    { name: "Meus Dados", icon: <PencilIcon className="text-2xl" /> },
    {
      name: "Alterar Senha de Acesso",
      icon: <LockKeyholeIcon className="text-2xl" />,
    },
    { name: "Notificações", icon: <BellIcon className="text-2xl" /> },
    {
      name: "Central de Ajuda",
      icon: <FileQuestionIcon className="text-2xl" />,
    },
  ];
  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">Meu Perfil</h1>

      <section className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
        <UserCircleIcon className="text-7xl text-gray-400 mb-3" />
        <h2 className="text-xl font-bold">Santiago F. Melo</h2>
        <p className="text-gray-600">Agência: 0001 | Conta: 12345-6</p>
      </section>

      <section className="bg-white rounded-2xl shadow-md divide-y divide-gray-100">
        {profileOptions.map((item) => (
          <button
            key={item.name}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
          >
            <div className="flex items-center space-x-4">
              <span className="text-blue-600">{item.icon}</span>
              <span className="font-semibold text-gray-700">{item.name}</span>
            </div>
            <ArrowRightIcon className="text-gray-400 text-xl" />
          </button>
        ))}
      </section>
    </div>
  );
};
