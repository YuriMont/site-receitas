import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "@leecheuk/react-google-login";
import { gapi } from "gapi-script";
import google from "../assets/google.png";
import { At, Eye, EyeSlash, Lock, User } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../lib/axios";
import { ToastContainer, toast } from "react-toastify";

export function Signup() {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmationPasswordType, setConfirmationPasswordType] =
    useState<string>("password");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const [blocked, setBlocked] = useState(false);

  const navigate = useNavigate();

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

  
  async function handleSubmitRegisterForm(event: FormEvent){

    event.preventDefault();
    setBlocked(true);
    await api.post("/user/create", {
      name: name,
      email: email,
      password: password,
      confirmation_password: confirmationPassword
    }).then((response) => {
      navigate("/sign");
    })
    .catch((error) => {
      toast.error(error.response.data.msg);
    });

    setBlocked(false);
  }

  async function handleSubmitWithGoogle(
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) {
    if ("profileObj" in response) {
      await api.post("/user/create", {
        name: response.profileObj.name,
        email: response.profileObj.email,
        password: response.profileObj.googleId,
        confirmation_password: response.profileObj.googleId
      }).then((response) => {
        navigate("/");
      });

    }

  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: import.meta.env.VITE_REACT_API_GOOGLE_USER_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  return (
    <div className="container flex flex-col sm:flex-row">
      <ToastContainer position="bottom-left" autoClose={2500}/>
      <div className="hidden relative w-full sm:flex flex-col sm:items-center items-baseline justify-between text-white gap-2 bg-pizza py-8 px-8">
        <Link
          to="/sign"
          className="w-full text-center text-8xl font-bold uppercase"
        >
          Logo
        </Link>
      </div>

      <form onSubmit={handleSubmitRegisterForm} className="sm:w-full sm:h-auto w-screen h-screen flex flex-col justify-center px-8 py-8 sm:px-16 bg-white">
        <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-bold">LOGO</h1>
          <h1 className="text-4xl text-center font-semibold">
            Crie sua Conta!
          </h1>
          <GoogleLogin
            clientId={import.meta.env.VITE_REACT_API_GOOGLE_USER_ID}
            render={(props) => (
              <button onClick={props.onClick} className="px-4 py-2 relative flex items-center justify-center w-full shadow-form border border-zinc-300 rounded-md hover:bg-zinc-50 transition-colors">
                <img src={google} alt="" className="absolute h-6 w-6 left-4" />
                Login com Google
              </button>
            )}
            onSuccess={handleSubmitWithGoogle}
            onFailure={(error) => console.log(error)}
          />
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
              type="text"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full pl-10 px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500 transition-all"
            />
            <button
              type="button"
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
              required
              value={confirmationPassword}
              onChange={(e) => setConfirmationPassword(e.target.value)}
              placeholder="Confirme sua senha"
              className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full pl-10 px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500 transition-all"
            />
            <button
              type="button"
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
            Ao se registrar, você aceita nossos{" "}
            <a href="#" className="text-violet-800">
              termos de uso
            </a>{" "}
            e a nossa{" "}
            <a href="#" className="text-violet-800">
              política de privacidade
            </a>{" "}
            .
          </span>
        </div>

        <button disabled={blocked} type="submit" className="mt-4 w-full text-center rounded-md bg-violet-600 hover:bg-violet-800 disabled:bg-violet-800 disabled:flex disabled:justify-center disabled:items-center transition-colors text-zinc-50 px-4 py-3 uppercase font-semibold">
          {
            blocked ? <div className="loader"/> : "CADASTRA-SE"
          }
        </button>
      </form>
    </div>
  );
}
