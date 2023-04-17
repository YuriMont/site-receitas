import { At, ArrowRight, Eye, EyeSlash, Lock } from "phosphor-react";
import { useState } from "react";
import { api } from "../../../lib/axios";
import { useNavigate } from "react-router-dom";

interface ShowStepsProps {
  step: number;
  setActiveStep: any;
}

export function ShowSteps({ step, setActiveStep }: ShowStepsProps) {
  const [error, setError] = useState("");

  const [informed_email, setInformed_email] = useState("");
  const [useId, setUserId] = useState("");
  const [forgotId, setForgotId] = useState(0);

  const navigate = useNavigate();

  if (step === 0) {
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);

    async function submitEmail() {
      setDisabled(true);
      await api
        .post("/user/forgot", { email })
        .then((response) => {
          setInformed_email(email);
          setForgotId(response.data.id);
          setActiveStep(1);
        })
        .catch((error) => {
          setError(error.response.data.msg);
        });
      setDisabled(false);
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-2xl">Você esqueceu sua senha?</h1>
        <p className="text-sm w-[90%] text-center font-light px-2 mb-2">
          Por favor, informe seu endereço de email e um código será enviado
        </p>
        <div className="flex items-end gap-2">
          <span>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10 px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500"
              />
            </span>
          </span>
          <button
            onClick={submitEmail}
            disabled={disabled}
            className="p-2 bg-violet-600 rounded-md hover:bg-violet-700 disabled:bg-violet-800 transition-colors"
          >
            {disabled ? (
              <div className="loader" />
            ) : (
              <ArrowRight size={26} weight="light" color="#fff" />
            )}
          </button>
        </div>
      </div>
    );
  } else if (step == 1) {
    const [code, setCode] = useState("");
    const [disabled, setDisabled] = useState(false);

    async function submitCode() {
      setDisabled(true);
      await api
        .post(`/user/verify-code/${forgotId}`, { code })
        .then((response) => {
          setUserId(response.data.userId);
          setActiveStep(2);
        })
        .catch((error) => {
          setError(error.response.data.msg);
        });
      setDisabled(false);
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-2xl">Informe o código</h1>
        <p className="text-sm w-[90%] text-center font-light px-2 mb-1 cursor-pointer">
          Por favor, informe o código de 4 digitos que foi enviado para{" "}
          {informed_email}.{" "}
          <span
            onClick={() => setActiveStep(0)}
            className="text-purple-800 underline"
          >
            {" "}
            Alterar email?
          </span>
        </p>
        <div className="flex gap-2 items-end">
          <span>
            <p className="px-2 text-xs text-red-500 font-normal">
              {error !== "" && error}
            </p>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={4}
              className="font-bold text-center tracking-[1rem] border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 px-4 py-2 w-[200px] bg-zinc-100 rounded-md placeholder:text-zinc-500"
            />
          </span>
          <button
            onClick={submitCode}
            disabled={disabled}
            className="p-2 bg-violet-600 rounded-md hover:bg-violet-700 disabled:bg-violet-800 transition-colors"
          >
            {disabled ? (
              <div className="loader" />
            ) : (
              <ArrowRight size={26} weight="light" color="#fff" />
            )}
          </button>
        </div>
      </div>
    );
  } else {
    const [passwordType, setPasswordType] = useState<string>("password");
    const [confirmationPasswordType, setConfirmationPasswordType] =
      useState<string>("password");

    const [password, setPassword] = useState("");
    const [confirmation_password, setConfirmation_password] = useState("");

    const [disabled, setDisabled] = useState(false);

    function handleShowPassword() {
      passwordType === "password"
        ? setPasswordType("text")
        : setPasswordType("password");
    }

    function handleShowConfirmationPassword() {
      confirmationPasswordType === "password"
        ? setConfirmationPasswordType("text")
        : setConfirmationPasswordType("password");
    }

    async function resetPassword() {
      setDisabled(true);

      await api
        .post(`/user/${useId}/reset-password`, {
          password,
          confirmation_password,
        })
        .then(() => {
          navigate("/sign");
        })
        .catch((error) => {
          setError(error.response.data.msg);
        });

      setDisabled(false);
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmation_password}
              onChange={(e) => setConfirmation_password(e.target.value)}
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
          <button
            disabled={disabled}
            onClick={resetPassword}
            className="bg-violet-600 text-zinc-50 rounded-md mt-2 py-2 px-4 hover:bg-violet-700 disabled:bg-violet-800 transition-colors flex items-center gap-2"
          >
            Mudar senha
            {disabled && <div className="loader" />}
          </button>
        </div>
      </div>
    );
  }
  
}
