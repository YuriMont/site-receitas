import { BrowserRouter} from "react-router-dom";
import { Router } from "./Router";
import "react-toastify/dist/ReactToastify.css";

export function App() {

  //w-full h-screen flex flex-col justify-center items-center
  return (
    <div className="">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

