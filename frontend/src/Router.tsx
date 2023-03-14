import { Route, Routes } from "react-router-dom";
import { Forgot } from "./login/Forgot";
import { Sign } from "./login/Sign";
import { Signup } from "./login/Signup";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Sign/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
        </Routes>
    );
}