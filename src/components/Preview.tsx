import { Button } from "./Button";
import { Alarm, CookingPot, Handbag, Notepad } from "phosphor-react";

import defaultImage from "../assets/default.jpg";

type step1Props = {
  image: string;
  revenueName: string;
  preparationTime: string;
  quantity: string;
  category: string;
};

interface previewProps {
  stepForm1Data: step1Props;
  stepFormIngredientsData: String[];
  stepFormPreparationMode: String[];
}

export function Preview({
  stepForm1Data,
  stepFormIngredientsData,
  stepFormPreparationMode,
}: previewProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-8 px-16 w-full bg-zinc-200 rounded-md gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-normal text-lg w-full text-center">
            {stepForm1Data.revenueName}
          </h1>
          <img
            src={stepForm1Data.image}
            alt="image"
            className="shadow-form flex-1 w-96 h-64 border border-zinc-600 rounded-md"
          />
          <span className="flex w-full items-center justify-between">
            <div className="font-light">
              <h3 className="text-sm font-normal">Tempo de preparo</h3>
              <span className="flex justify-center items-center w-full gap-2 lowercase">
                <Alarm size={28} weight="thin" />
                {stepForm1Data.preparationTime}
              </span>
            </div>
            <div className="font-light ">
              <h3 className="text-sm font-normal">Rendimento</h3>
              <span className="flex justify-center items-center w-full gap-2">
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

      <Button activeStep={3} steps={['']} setActiveStep={() => (console.log("teste"))} next={() => (console.log("teste"))}/>
    </>
  );
}
