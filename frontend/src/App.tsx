import { BrowserRouter} from "react-router-dom";
import { Router } from "./Router";
import "react-toastify/dist/ReactToastify.css";

export function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

