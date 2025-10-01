import { CircleUserRound, LogOut } from "lucide-react";
import { logout } from "../../utils/auth";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between bg-blue-600 p-4 text-white z-10 sticky top-0 shadow-lg ">
      <div className="flex gap-3">
        <CircleUserRound />
        <h1 className="font-bold">Olá, Santiago</h1>
      </div>
      <LogOut onClick={handleLogout} />
    </div>
  );
}

export default Header;
