// components/privateRout.tsx

import { Navigate } from "react-router";
import Cookies from "js-cookie"; // ou sua forma de verificar autenticação

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = !!Cookies.get("agencia") && !!Cookies.get("conta");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
