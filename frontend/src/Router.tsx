import { Route, Routes } from "react-router-dom";
import { Forgot } from "./pages/login/Forgot";
import { Sign } from "./pages/login/Sign";
import { Signup } from "./pages/login/Signup";
import { HomePage } from "./pages/home/HomePage";
import { NewRecipeForm } from "./pages/recipe/NewRecipeForm";
import { Recipe } from "./pages/recipe/Recipe";
import { AllPage } from "./pages/recipe/components/AllPage";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-recipe" element={<NewRecipeForm />} />
            <Route path="/sign" element={<Sign/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/all" element={< AllPage/>} />
        </Routes>
    );
}