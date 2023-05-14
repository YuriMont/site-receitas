import { HeartStraight } from "phosphor-react";
import bolo from "../../../assets/bolo.jpg";
import { RecipeCard } from "../../recipe/RecipeCard";

export function Recipes() {
  const recipes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section
      id="recipes"
      className="sm:px-16 px-8 py-12 text-zinc-900 sm:text-left text-center"
    >
      <h1 className="text-4xl text-center mb-8">Principais receitas</h1>
      <div className="flex flex-col sm:grid lg:grid lg:grid-cols-3 sm:grid-cols-2 sm:grid-rows-4 lg:grid-rows-2 gap-4">
        {recipes.map((item) => (
          <RecipeCard />
          
        ))}
      </div>
    </section>
  );
}
