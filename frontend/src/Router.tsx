import { Route, Routes } from "react-router-dom";
import { Forgot } from "./pages/recipe/login/Forgot";
import { Sign } from "./pages/recipe/login/Sign";
import { Signup } from "./pages/recipe/login/Signup";
import { HomePage } from "./pages/home/HomePage";
import { NewRecipeForm } from "./pages/recipe/NewRecipeForm";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-recipe" element={<NewRecipeForm />} />
            <Route path="/sign" element={<Sign/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
        </Routes>
    );
}