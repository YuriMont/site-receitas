import { Button } from "./Button";
import { Alarm, CookingPot, Handbag, Notepad } from "phosphor-react";

import defaultImage from "../assets/default.jpg";
import { useNavigate } from "react-router-dom";

type step1Props = {
  image: string;
  revenueName: string;
  preparationTime: string;
  quantity: string;
  category: string;
};

interface previewProps {
  setActiveStep: any;
  stepForm1Data: step1Props;
  stepFormIngredientsData: String[];
  stepFormPreparationMode: String[];
}

export function Preview({
  setActiveStep,
  stepForm1Data,
  stepFormIngredientsData,
  stepFormPreparationMode,
}: previewProps) {

  const navigate = useNavigate();

  function NextStep(){
    navigate("/");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center py-8 sm:px-16 px-4 bg-zinc-200 rounded-md gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-normal text-lg w-full text-center">
            {stepForm1Data.revenueName}
          </h1>
          <img
            src={stepForm1Data.image}
            alt="image"
            className="shadow-form flex-1 sm:w-[540px] sm:h-[326px]  w-[320px] h-[213px] border border-zinc-600 rounded-md"
          />
          <span className="flex px-4 py-2 items-center gap-4">
            <div className="font-light">
              <h3 className="text-sm font-normal">Preparo</h3>
              <span className="flex items-center w-full gap-2 lowercase">
                <Alarm size={28} weight="thin" />
                {stepForm1Data.preparationTime}
              </span>
            </div>
            <div className="font-light ">
              <h3 className="text-sm font-normal">Rendimento</h3>
              <span className="flex items-center w-full gap-2 lowercase">
                <CookingPot size={28} weight="thin" />
                {stepForm1Data.quantity}
              </span>
            </div>
          </span>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h1 className="w-full text-zinc-900 flex justify-center items-center gap-2 text-base uppercase">
            <Handbag size={32} color="#27272a" />
            Ingredientes
          </h1>
          <ul className="list-disc items-start w-full">
            {stepFormIngredientsData.map((item, i) => {
              return (
                <li
                  key={i}
                  className="list-inside text-base font-thin text-zinc-800"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4 mt-2">
          <h1 className="w-full flex text-zinc-900 justify-center items-center gap-2 text-base uppercase">
            <Notepad size={32} color="#27272a" />
            Modo de preparo
          </h1>
          <ul className="list-decimal items-start w-full">
            {stepFormPreparationMode.map((item, i) => {
              return (
                <li
                  key={i}
                  className="list-inside text-base font-thin text-zinc-800"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Button back={() => setActiveStep(2)} next={NextStep}/>
    </>
  );
}
