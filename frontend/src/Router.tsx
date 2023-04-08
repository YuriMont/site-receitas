import { Route, Routes } from "react-router-dom";
import { Forgot } from "./login/Forgot";
import { Sign } from "./login/Sign";
import { Signup } from "./login/Signup";
import { Home } from "./home/Home";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign" element={<Sign/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
        </Routes>
    );
}