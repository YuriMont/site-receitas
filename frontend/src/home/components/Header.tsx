import { BookmarkSimple, HeartStraight, List, MagnifyingGlass, User } from "phosphor-react";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="absolute top-0 w-full lg:py-4">
      <nav className="flex justify-around h-[8vh] items-center">
        <List
          size={32}
          className="lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
        <a href="#" className="text-4xl font-bold">LOGO</a>
        <ul
          className={`flex lg:gap-8 lg:relative absolute lg:top-0 top-[8vh] w-screen left-0 lg:w-auto h-[92vh] lg:h-auto lg:bg-transparent bg-gray-500 flex-col lg:flex-row justify-around items-center ${
            showMenu ? "-translate-x-full" : "translate-x-0"
          } transition-transform`}
        >
          <li className="tracking-wide flex items-center gap-2">
            <input type="text" className="px-4 py-2 bg-zinc-200 font-thin rounded-md border" placeholder="Ex: bolo de chocolate"/>
            <button className="p-2 bg-zinc-200 cursor-pointer border hover:bg-zinc-300 transition-colors rounded-md">
              <MagnifyingGlass size={24} />
            </button>
          </li>
          <li className="tracking-wide text-lg font-light hover:underline underline-offset-2 transition-all">
            <a href="#">Categorias</a>
          </li>
          <li className="tracking-wide text-lg font-light hover:underline underline-offset-2 transition-all">
            <a href="#">Minhas receitas</a>
          </li>
          <li className="tracking-wide text-lg font-light hover:underline underline-offset-2 transition-all">
            <a href="#">Escrever receita</a>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="p-2 cursor-pointer hover:bg-gray-200 transition-colors rounded-full"><HeartStraight size={28} /></li>
          <li className="p-2 cursor-pointer hover:bg-gray-200 transition-colors rounded-full"><User size={28} /></li>
        </ul>
      </nav>
    </header>
  );
}
