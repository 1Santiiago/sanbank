import { Landmark } from "lucide-react";
import InputComponent from "../Input";
import ButtonComponent from "../Button";

import { useNavigate } from "react-router";
import { login } from "../../utils/auth";

export default function AuthLayout() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const agencia = formData.get("agencia")?.toString() || "";
    const conta = formData.get("conta")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    const onlyNumbers = /^[0-9]+$/;

    if (
      !onlyNumbers.test(agencia) ||
      !onlyNumbers.test(conta.replace("-", ""))
    ) {
      alert("Agência e conta devem conter apenas números!");
      return;
    }

    if (login(agencia, conta, password)) {
      navigate("/");
    } else {
      alert("Dados inválidos!");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <main className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        <div className="text-center mb-8">
          <i className="flex justify-center">
            <Landmark color="#245494" size={34} />
          </i>
          <h1 className="text-3xl font-bold text-gray-800 my-4">
            SanBank Digital
          </h1>
          <p className="mt-2">Acesse sua conta com segurança</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <InputComponent
              id="agencia"
              label="Agência"
              name="agencia"
              type="text"
              pattern="[0-9-]*"
              inputMode="numeric"
              placeholder="0001"
              containerClass="relative  "
              labelClassName="absolute -top-3 left-3 bg-white  px-1 text-sm font-medium text-gray-600 "
              inputClassName="w-full  px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 text-center"
            />

            <InputComponent
              id="conta"
              label="Conta"
              name="conta"
              type="text"
              pattern="[0-6-]*"
              inputMode="numeric"
              placeholder="12345-6"
              containerClass="relative"
              labelClassName="absolute -top-3 left-3 bg-white 0 px-1 text-sm font-medium text-gray-600 "
              inputClassName="w-full  px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 text-center"
            />

            <InputComponent
              id="password"
              name="password"
              label="Senha"
              type="password"
              pattern="[0-9-]*"
              inputMode="numeric"
              placeholder="********"
              containerClass="relative"
              labelClassName="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-gray-800 "
              inputClassName="w-full  px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                Lembrar de mim
              </label>

              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Esqueci minha senha
              </a>
            </div>

            <ButtonComponent
              title="Entrar"
              type="submit"
              className="w-full flex justify-center p-2 border border-transparent text-md font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="text-center flex justify-around">
            <p className="text-sm">Ainda não é cliente?</p>
            <a
              href="#"
              className="font-medium text-blue-800 hover:text-blue-950"
            >
              Abra sua conta
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
