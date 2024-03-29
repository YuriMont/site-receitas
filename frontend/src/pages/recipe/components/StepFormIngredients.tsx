import { Handbag, Trash } from "phosphor-react";
import { useState } from "react";
import { Button } from "./Button";

interface StepFormIngredientsProps {
  setActiveStep: any;
  activeStep: number;
  steps: String[];
  stepFormIngredientsData: String[];
  setStepFormIngredientsData: any;
}

export function StepFormIngredients({
  setActiveStep,
  stepFormIngredientsData,
  setStepFormIngredientsData
}: StepFormIngredientsProps) {
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState<String[]>(stepFormIngredientsData);

  function handleToggleAddIngredient() {
    setIngredients([...ingredients, ingredient]);
    setIngredient("");
  }

  function removeIngredient(index: number) {
    setIngredients(ingredients.filter((item) => item !== ingredients[index]));
  }

  function NextStep(){
    setStepFormIngredientsData(ingredients);
    setActiveStep(2);
  }



  return (
    <>
      <div className="sm:w-[80%] w-full flex flex-col sm:items-center gap-3">
        <span className="w-full">
          <h1 className="text-base">Informe um ingrediente</h1>
          <span className="w-full flex sm:flex-row flex-col items-center justify-center gap-4">
            <input
              value={ingredient}
              type="text"
              className="font-light w-full px-4 py-2 bg-zinc-200 rounded-lg border border-zinc-400 text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Exemplo: 200g de farinha de trigo"
              onChange={(e) => setIngredient(e.target.value)}
            />
            <button
              onClick={handleToggleAddIngredient}
              className="sm:w-auto w-full uppercase text-base text-zinc-50 bg-orange-600 rounded-md px-4 py-2"
            >
              adicionar
            </button>
          </span>
        </span>

        <span className="flex justify-center items-center gap-2">
          <Handbag size={32} />
          <h1 className="uppercase text-base">Ingredientes</h1>
        </span>

        <div className="bg-zinc-200 rounded-lg border border-zinc-400 w-full h-64 px-8 py-4 overflow-x-hidden overflow-y-auto">
          <ul className="list-disc ">
            {ingredients.map((item, i) => {
              return (
                <span className="flex items-center justify-between w-full">
                  <li
                    className="list-inside text-base font-thin text-zinc-800"
                    key={i}
                  >
                    {item}
                  </li>
                  <button onClick={() => removeIngredient(i)}>
                    <Trash size={26} weight="light" />
                  </button>
                </span>
              );
            })}
          </ul>
        </div>
      </div>
      <Button back={() => setActiveStep(0)} next={NextStep}/>
      
    </>
  );
}
