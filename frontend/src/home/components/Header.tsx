import { List, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="absolute top-0 w-full sm:py-4">
      <nav className="flex justify-around h-[8vh] items-center">
        <a href="#" className="text-2xl">Logo</a>
        <List
          size={32}
          className="sm:invisible"
          onClick={() => setShowMenu(!showMenu)}
        />
        <ul
          className={`flex sm:gap-8 sm:relative absolute sm:top-0 top-[8vh] w-screen sm:w-auto right-0  h-[92vh] sm:h-auto sm:bg-transparent bg-gray-500 flex-col sm:flex-row justify-around items-center ${
            showMenu ? "translate-x-full" : "translate-x-0"
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
            <a href="#">Favoritos</a>
          </li>
          <li className="tracking-wide text-lg font-light hover:underline underline-offset-2 transition-all">
            <a href="#">Minhas receitas</a>
          </li>
          <li className="tracking-wide text-lg font-light hover:underline underline-offset-2 transition-all">
            <a href="#">User</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
