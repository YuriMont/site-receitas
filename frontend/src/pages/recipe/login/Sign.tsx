import { At, Eye, EyeSlash, Lock } from "phosphor-react";
import { useEffect, useState } from "react";

import google from "../../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "@leecheuk/react-google-login";
import { gapi } from "gapi-script";
import { api } from "../../../lib/axios";
import { ToastContainer, toast } from "react-toastify";

export function Sign() {
  const [type, setType] = useState<string>("password");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleShowPassword() {
    type === "password" ? setType("text") : setType("password");
  }

  async function handleSubmitLoginForm() {
    await api
      .post("/login", {
        email,
        password,
      })
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        toast.error("Error", {
          position: "bottom-left",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
        });
      });
  }

  async function handleSubmitWithGoogle(
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) {
    if ("profileObj" in response) {
      setEmail(response.profileObj.email);
      setPassword(response.profileObj.googleId);
      handleSubmitLoginForm();
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
      <ToastContainer />
      <div className="w-screen sm:w-full sm:h-auto h-screen sm:bg-white bg-slate-50 flex flex-col justify-center  py-8 px-8 sm:px-16">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl font-bold">LOGO</h1>
          <h1 className="text-4xl text-center font-semibold">
            Seja bem-vindo!
          </h1>
          <GoogleLogin
            clientId={import.meta.env.VITE_REACT_API_GOOGLE_USER_ID}
            render={(props) => (
              <button
                onClick={props.onClick}
                className="px-4 py-2 relative flex items-center justify-center w-full shadow-form border border-zinc-300 rounded-md hover:bg-zinc-50 transition-colors"
              >
                <img src={google} alt="" className="absolute h-6 w-6 left-4" />
                Login com Google
              </button>
            )}
            onSuccess={handleSubmitWithGoogle}
            onFailure={(error) => console.log(error)}
          />

          <span className="border w-full rounded border-zinc-200 my-8" />
        </div>

        <div>
          <label htmlFor="email" className="text-sm px-2">
            Informe seu email
          </label>
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10 w-full px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500"
            />
          </span>
        </div>

        <div className="mt-2">
          <label htmlFor="password" className="text-sm px-2">
            Informe sua senha
          </label>
          <span className="relative flex items-center">
            <Lock
              size={24}
              weight="light"
              className="absolute left-3"
              color="#27272a"
            />
            <input
              type={type}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="font-light border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full pl-10 px-4 py-2 bg-zinc-100 rounded-md placeholder:text-zinc-500 transition-all"
            />
            <button
              className="absolute right-3 transition-all"
              onClick={handleShowPassword}
            >
              {type === "password" ? (
                <Eye size={24} weight="light" />
              ) : (
                <EyeSlash size={24} weight="light" />
              )}
            </button>
          </span>
          <Link
            to="/forgot"
            className="font-light text-violet-700 text-sm cursor-pointer hover:text-violet-800 hover:underline transition-all"
          >
            Esqueceu senha?
          </Link>
          <button
            onClick={handleSubmitLoginForm}
            className="mt-4 w-full text-center rounded-md bg-violet-600 hover:bg-violet-800 transition-colors text-zinc-50 px-4 py-3 uppercase font-semibold"
          >
            Entrar
          </button>

          <span className="mt-8 w-full text-sm font-light flex items-center justify-center gap-1">
            Não tem uma conta?
            <Link
              to="/signup"
              className="text-violet-700 underline hover:text-violet-900 transition-colors"
            >
              cadastra-se
            </Link>
          </span>
        </div>
      </div>
      <div className="hidden sm:flex flex-col gap-4 items-center justify-between w-full bg-churrasco py-8 px-8">
        <h1 className="text-8xl font-black text-center text-white">LOGO</h1>
        <h1 className="text-4xl font-black text-center text-white">
          Inúmeras receitas em um só lugar
        </h1>
      </div>
    </div>
  );
}
