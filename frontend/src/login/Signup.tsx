import { At, Eye, EyeSlash, Lock, User } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";

export function Signup() {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmationPasswordType, setConfirmationPasswordType] = useState<string>("password");

  function handleShowPassword() {
    passwordType === "password" ? setPasswordType("text") : setPasswordType("password");
  }

  function handleShowConfirmationPassword() {
    confirmationPasswordType === "password" ? setConfirmationPasswordType("text") : setConfirmationPasswordType("password");
  }

  return (
    <div className="container flex flex-col sm:flex-row">
      <div className="relative w-full flex flex-col sm:items-center items-baseline justify-between text-white gap-2 bg-pizza py-8 px-8">
        <Link to="/" className="w-full text-center text-8xl font-bold uppercase">Logo</Link>
      </div>

      <div className="w-full flex flex-col justify-center px-8 py-8 sm:px-16">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl text-center font-semibold">
            Crie sua Conta!
          </h1>
          <button className="px-4 py-2 relative flex items-center justify-center w-full shadow-form border border-zinc-300 rounded-md hover:bg-zinc-50 transition-colors">
            <img src={google} alt="" className="absolute h-6 w-6 left-4" />
            Login com Google
          </button>
          <span className="border w-full rounded border-zinc-200 my-4" />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <span className="relative flex items-center">
            <User
              size={24}
              weight="light"
              className="absolute left-3"
              color="#27272a"
            />
            <input
              type="email"
              id="email"
              placeholder="Seu nome"
              className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10 w-full px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500"
            />
          </span>

          <span className="relative flex items-center">
            <At
              size={24}
              weight="light"
              className="absolute left-3"
              color="#27272a"
            />
            <input
              type="email"
              id="email"
              placeholder="Seu Email"
              className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10 w-full px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500"
            />
          </span>

          <span className="relative flex items-center">
            <Lock
              size={24}
              weight="light"
              className="absolute left-3"
              color="#27272a"
            />
            <input
              type={passwordType}
              id="password"
              placeholder="Sua senha"
              className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full pl-10 px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500 transition-all"
            />
            <button
              className="absolute right-3 transition-all"
              onClick={handleShowPassword}
            >
              {passwordType === "password" ? (
                <Eye size={24} weight="light" />
              ) : (
                <EyeSlash size={24} weight="light" />
              )}
            </button>
          </span>

          <span className="relative flex items-center">
            <Lock
              size={24}
              weight="light"
              className="absolute left-3"
              color="#27272a"
            />
            <input
              type={confirmationPasswordType}
              id="password"
              placeholder="Confirme sua senha"
              className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full pl-10 px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500 transition-all"
            />
            <button
              className="absolute right-3 transition-all"
              onClick={handleShowConfirmationPassword}
            >
              {confirmationPasswordType === "password" ? (
                <Eye size={24} weight="light" />
              ) : (
                <EyeSlash size={24} weight="light" />
              )}
            </button>
          </span>
          <span className="text-sm text-center text-zinc-800">
            Ao se registrar, você aceita nossos <a href="#" className="text-violet-800">termos de uso</a>  e a nossa <a href="#" className="text-violet-800">política de privacidade</a> .
          </span>
        </div>

        <button className="mt-4 w-full text-center rounded-md bg-violet-600 hover:bg-violet-800 transition-colors text-zinc-50 px-4 py-3 uppercase font-semibold">
          CADASTRA-SE
        </button>
      </div>
    </div>
  );
}
