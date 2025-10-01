import Cookies from "js-cookie";

export const login = (agencia: any, conta: any, password: any) => {
  if (agencia && conta && password) {
    Cookies.set("agencia", agencia, { expires: 1 });
    Cookies.set("conta", conta, { expires: 1 });
    return true;
  }
  return false;
};

export const logout = () => {
  Cookies.remove("agencia");
  Cookies.remove("conta");
};

export const isAuthenticated = () => {
  const agencia = Cookies.get("agencia");
  const conta = Cookies.get("conta");
  return !!agencia && !!conta;
};
