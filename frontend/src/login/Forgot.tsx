import { Step, StepLabel, Stepper } from "@mui/material";
import { At, Eye, EyeSlash, Lock } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Forgot() {
  const steps = ["Informe seu email", "Insira o código", "Redefina sua senha"];
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmationPasswordType, setConfirmationPasswordType] = useState<string>("password");

  function handleShowPassword() {
    passwordType === "password" ? setPasswordType("text") : setPasswordType("password");
  }

  function handleShowConfirmationPassword() {
    confirmationPasswordType === "password" ? setConfirmationPasswordType("text") : setConfirmationPasswordType("password");
  }


  function backStep() {
    activeStep === 0 ? navigate("/") : setActiveStep(activeStep - 1);
  }
  function nextStep() {
    activeStep === 2 ? navigate("/") : setActiveStep(activeStep + 1);
  }

  function Steps() {
    if (activeStep === 0) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-2xl">Você esqueceu sua senha?</h1>
          <p className="text-sm w-[90%] text-center font-light px-2 mb-2">
            Por favor, informe seu endereço de email e um código será enviado
          </p>
          <div>
            <p className="px-2 text-xs text-red-500 font-normal">
              {error !== "" && error}
            </p>
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
                className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10 px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500"
              />
            </span>
          </div>
        </div>
      );
    } else if (activeStep === 1) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-2xl">Informe o código</h1>
          <p className="text-sm w-[90%] text-center font-light px-2 mb-2">
            Por favor, informe o código de 4 digitos que foi enviado para seu
            endereço de email
          </p>
          <div>
            <p className="px-2 text-xs text-red-500 font-normal">
              {error !== "" && error}
            </p>
            <input
              type="text"
              maxLength={4}
              className="font-bold text-center tracking-[1rem] border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 px-4 py-2 w-[200px] bg-zinc-100 rounded-md placeholder:text-zinc-500"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-2xl">Redefina sua senha</h1>
          <div>
            <p className="px-2 text-xs text-red-500 font-normal">
              {error !== "" && error}
            </p>
            <span className="relative flex items-center mb-4">
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
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container flex flex-col justify-between px-8 py-8 sm:px-16 sm:py-16">
      <div className="w-full">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <Steps />
      <div className="w-full flex items-center justify-around">
        <button className="py-2 px-4 text-center uppercase font-semibold focus-button rounded-md text-violet-700 border border-violet-700" onClick={backStep}>voltar</button>
        <button className="py-2 px-4 text-center uppercase font-semibold focus-button rounded-md text-white bg-violet-700" onClick={nextStep}>próximo</button>
      </div>
    </div>
  );
}
