import { Avatar, Modal } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { Alarm, BookmarkSimple, CookingPot, Heart, HeartStraight, X, Cake} from "phosphor-react";
import { useState } from "react";

export function RecipeCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="cursor-pointer tracking-wide">
        <img
          onClick={handleOpen}
          src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
          alt="image"
          className="w-[320px] h-[213px] object-fill rounded-md hover:scale-110 transition-transform"
        />
        <span className="flex w-[320px] items-center justify-between px-4 py-2">
          <h3
            className="text-xl hover:text-gray-600 transition-colors font-light"
            onClick={handleOpen}
          >
            Bolo de chocolate
          </h3>
          <span className="p-2 cursor-pointer hover:bg-gray-200 flex items-center transition-colors rounded-full">
            <HeartStraight size={28} weight="light" />
          </span>
        </span>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        className="overflow-auto modal"
        hideBackdrop={true}
      >
        <div className="h-auto sm:py-16 vidro z-10 w-full">

        <div className="bg-gray-200 sm:rounded-md mx-auto sm:w-[60vw] p-16 flex flex-col items-center relative justify-center font-light">
          <button
            className="absolute left-8 top-8 p-2 bg-gray-300 hover:bg-gray-400 transition-colors rounded-full"
            onClick={handleClose}
          >
            <X size={24} />
          </button>
          <div className="h-full py-4">
            <div>
              <h1 className="text-center text-4xl mb-2 text-gray-800">
                Pizza de calabreza
              </h1>
              <img
                className="sm:w-[640px] sm:h-[400px] w-[320px] h-[220px] object-fill rounded-md"
                src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
                alt=""
              />
              <div className="sm:w-[640px] w-[320px] mt-2 flex items-center justify-between">
                <span className="flex items-center gap-2 mt-2 cursor-pointer">
                  <Avatar>
                    <span className="bg-red-700 hover:bg-red-600 h-full w-full rounded-full flex items-center justify-center">
                      Y
                    </span>
                  </Avatar>
                  <span className="flex flex-col">
                    <span className="text-lg ">Yuri Monteiro</span>
                    <span className="text-sm text-gray-600">23/09/2020</span>
                  </span>
                </span>
                <span className="flex gap-2 items-center">
                  <span className="p-2 rounded-full cursor-pointer hover:bg-zinc-300 transition-colors">
                    <Heart size={32} />
                  </span>
                  <span className="p-2 rounded-full cursor-pointer hover:bg-zinc-300 transition-colors">
                    <BookmarkSimple size={32} />
                  </span>
                </span>
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-3xl text-center my-3">Ingredientes</h3>
              <ul className="list-disc list-inside text-xl flex flex-col gap-2">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa magni aliquid, sunt optio quos sed hic autem neque quas unde quasi culpa a esse explicabo consequatur dolore doloremque impedit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa magni aliquid, sunt optio quos sed hic autem neque quas unde quasi culpa a esse explicabo consequatur dolore doloremque impedit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa magni aliquid, sunt optio quos sed hic autem neque quas unde quasi culpa a esse explicabo consequatur dolore doloremque impedit.</li>

              </ul>
            </div>

            <div className="text-left">
              <h3 className="text-3xl text-center mt-5 mb-3">Modo de preparo</h3>
              <ol className="list-decimal list-inside text-xl flex flex-col gap-2">
                <li>Livro</li>
                <li>Livro</li>
                <li>Livro</li>
                <li>Livro</li>
              </ol>
            </div>

            <span className="flex sm:flex-row flex-col py-2 mt-4 items-center justify-center gap-4 text-orange-500">
            <div className="font-light border border-orange-600 sm:w-auto w-full rounded-md p-2">
              <h3 className="text-xl text-center font-normal">Preparo</h3>
              <span className="flex text-lg items-center justify-center w-full gap-2 lowercase">
                <Alarm size={28} weight="thin" />
                10 pessoas
              </span>
            </div>
            <div className="font-light border border-orange-600 sm:w-auto w-full rounded-md p-2">
              <h3 className="text-xl text-center font-normal">Rendimento</h3>
              <span className="flex text-lg  items-center justify-center w-full gap-2 lowercase">
                <CookingPot size={28} weight="thin" />
                90 minutos
              </span>
            </div>
            <div className="font-light border border-orange-600 sm:w-auto w-full rounded-md p-2">
              <h3 className="text-xl text-center font-normal">Categoria</h3>
              <span className="flex text-lg  items-center justify-center w-full gap-2 lowercase">
                <Cake size={28} weight="thin" />
                bolo
              </span>
            </div>
          </span>
          </div>
        </div>
        </div>
      </Modal>
    </>
  );
}
