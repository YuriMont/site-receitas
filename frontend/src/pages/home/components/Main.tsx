import { About } from "./About";
import { Category } from "./Category";
import { Home } from "./Home";
import { Recipes } from "./Recipes";

export function Main() {

  return (
    <main className="lg:pt-[12vh] pt-[8vh] pb-8 h-full w-screen">
      <Home />
      <Recipes />
      <About />
      <Category />
    </main>
  );
}
