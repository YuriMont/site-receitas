import { Avatar, Popover } from "@mui/material";
import {
  BookmarkSimple,
  HeartStraight,
  List,
  MagnifyingGlass,
  Notepad,
  Pencil,
  SignOut,
  Trash,
  User,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <header className="fixed bg-white shadow-md z-50 top-0 w-full lg:py-4">
      <nav className="flex justify-around h-[8vh] items-center">
        <List
          size={32}
          className="lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
        <Link to="/" className="text-5xl font-bold text-orange-600">
          CHEF
        </Link>
        <ul
          className={`flex lg:gap-8 lg:relative absolute lg:top-0 top-[8vh] w-screen left-0 lg:w-auto h-[92vh] lg:h-auto lg:bg-transparent bg-zinc-900 lg:text-gray-800 text-gray-100 flex-col lg:flex-row justify-around items-center ${
            showMenu ? "-translate-x-full" : "translate-x-0"
          } transition-transform`}
        >
          <li className="tracking-wide flex items-center gap-2">
            <input
              type="text"
              className="px-4 py-2 bg-zinc-200 text-gray-600 font-thin rounded-md border"
              placeholder="Ex: bolo de chocolate"
            />
            <button className="p-2 lg:bg-zinc-200 bg-zinc-600 cursor-pointer border hover:bg-zinc-700 lg:hover:bg-zinc-300 transition-colors rounded-md">
              <MagnifyingGlass size={24} />
            </button>
          </li>
          <li className="tracking-wide text-lg font-light hover:underline underline-offset-2 transition-all">
            <Link to="/ooooooo" >Inicio</Link>
          </li>
          <li className="tracking-wide text-lg font-light hover:underline underline-offset-2 transition-all">
            <a href="#category">Categorias</a>
          </li>
          <li className="tracking-wide text-lg font-light hover:underline underline-offset-2 transition-all">
            <Link to="new-recipe">Escrever receita</Link>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="p-2 cursor-pointer hover:bg-gray-200 transition-colors rounded-full">
            <HeartStraight size={28} />
          </li>
          <button className="cursor-pointer transition-colors rounded-full" onClick={handleClick}>
            <Avatar><span className="bg-red-600 hover:bg-red-700 transition-colors h-full w-full rounded-full flex items-center justify-center">Y</span></Avatar>
          </button>
          <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="bg-zinc-100 flex flex-col gap-2 p-4 font-light">
                <span className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-colors"><Notepad size={32} weight="light"/>Minhas receitas</span>
                <span className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-colors"><SignOut size={32} weight="light"/>Sair</span>
                <span className="text-red-600 flex items-center gap-2 cursor-pointer hover:text-red-700 transition-colors"><Trash size={32} weight="light"/>Excluir conta</span>
              </div>
            </Popover>
        </ul>
      </nav>
    </header>
  );
}
