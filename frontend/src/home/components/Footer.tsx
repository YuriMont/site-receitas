import logo1 from "../../assets/linkedin-logo.png";
import logo2 from "../../assets/github-logo.png";
import logo3 from "../../assets/telegram-logo.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 w-screen flex gap-4 sm:flex-row flex-col sm:items-start items-center text-center justify-around text-zinc-50 py-8 font-light">
      <div className="flex flex-col text-lg sm:text-left">
        <a href="#" className="text-6xl uppercase font-bold mb-2">
          chef
        </a>
        <a href="https://personal-portfolio-yurimont.vercel.app/" className="">
          Yuri Monteiro {year}.
        </a>
        <span>Todos os direitos reservados.</span>
      </div>
      <div className="flex flex-col text-lg">
        <span className="text-xl font-semibold mb-2">Paginas</span>
        <a href="#">Inicio</a>
        <a href="#">Categorias</a>
        <a href="#">Favoritos</a>
        <a href="#">Sobre</a>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xl font-semibold">Redes sociais</span>
        <span className="flex gap-2 items-center justify-center">
          <a href="#" className="border border-white flex items-center justify-center p-2 hover:bg-zinc-800 transition-colors rounded-full">
            <img height={24} width={24} src={logo1} alt="" />
          </a>
          <a href="#" className="border border-white flex items-center justify-center p-2 hover:bg-zinc-800 transition-colors rounded-full">
            <img height={24} width={24} src={logo2} alt="" />
          </a>
          <a href="#" className="border border-white flex items-center justify-center p-2 hover:bg-zinc-800 transition-colors rounded-full">
            <img height={22} width={22} src={logo3} alt="" />
          </a>
        </span>
      </div>
    </footer>
  );
}
