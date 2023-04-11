import { About } from "./About";
import { Home } from "./Home";

export function Main() {
  return (
    <main className="lg:pt-[12vh] pt-[8vh] pb-8 h-full w-screen">
      <Home />
      <About />
    </main>
  );
}
