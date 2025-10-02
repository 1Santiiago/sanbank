import {
  CreditCardIcon,
  HouseIcon,
  ReceiptIcon,
  UserCircleIcon,
} from "lucide-react";
import ButtonComponent from "../Button";
import { Link, useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  const pathLocation = location.pathname;
  const footerMenu = [
    {
      name: "Início",
      icon: <HouseIcon className="text-2xl" />,
      active: pathLocation === "/" ? true : false,
      path: "/",
    },
    {
      name: "Cartões",
      icon: <CreditCardIcon className="text-2xl" />,
      active: pathLocation === "/card" ? true : false,
      path: "/card",
    },
    {
      name: "Extrato",
      icon: <ReceiptIcon className="text-2xl" />,
      active: false,
      path: "/",
    },
    {
      name: "Perfil",
      icon: <UserCircleIcon className="text-2xl" />,
      active: false,
      path: "/",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 flex justify-around p-2 md:max-w-4xl md:mx-auto md:rounded-t-2xl">
      <nav className="flex justify-around p-2">
        {footerMenu.map((item, index) => (
          <Link key={index} to={item.path}>
            <ButtonComponent
              title={item.name}
              icons={item.icon}
              key={index}
              btnClass={`flex flex-col items-center w-20 p-1 rounded-lg transition-colors ${
                item.active
                  ? "text-blue-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            ></ButtonComponent>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
