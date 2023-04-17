import { MenuItem, Select, ThemeProvider } from "@mui/material";
import { Alarm, CookingPot } from "phosphor-react";
import { useState } from "react";
7;
import defaultImage from "../assets/default.jpg";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { theme } from "./Theme";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

type step1Props = {
  image: string;
  revenueName: string;
  preparationTime: string;
  quantity: string;
  category: string;
};

interface StepForm1Props {
  setActiveStep: any;
  activeStep: number;
  steps: String[];
  stepForm1Data: step1Props;
  setStepForm1Data: any;
}

export function StepForm1({
  setActiveStep,
  stepForm1Data,
  setStepForm1Data,
}: StepForm1Props) {
  //Step 1
  const [image, setImage] = useState(stepForm1Data.image);
  const [category, setCategory] = useState<string>(stepForm1Data.category);
  const [revenueName, setRevenueName] = useState<string>(
    stepForm1Data.revenueName
  );
  const [preparationTime, setPreparationTime] = useState<string>(
    stepForm1Data.preparationTime
  );
  const [quantity, setQuantity] = useState<string>(stepForm1Data.quantity);

  const navigate = useNavigate();

  const handleProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const image = files[0];
      const imageURL = URL.createObjectURL(image);
      setImage(imageURL);
    }
  };

  function NextStep() {
    setStepForm1Data({
      image,
      revenueName,
      preparationTime,
      quantity,
      category,
    });
    setActiveStep(1);
  }

  return (
    <>
      <div className="flex sm:flex-row flex-col items-center justify-center w-full">
        <label htmlFor="image" className="cursor-pointer">
          <input
            type="file"
            id="image"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleProfile(e)}
          />
          <img
            src={image}
            className="shadow-form flex-1 w-96 h-64 border border-zinc-600 rounded-md"
            alt=""
          />
        </label>
        <div className="flex flex-col flex-1 sm:p-8 py-8 gap-3">
          <span>
            <label className="px-2 font-semibold text-sm">
              Informe o nome da receita
            </label>
            <input
              value={revenueName}
              onChange={(e) => setRevenueName(e.target.value)}
              type="text"
              placeholder="Exemplo: Bolo de chocolate"
              className="border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full px-4 py-2 bg-zinc-200 rounded-md placeholder:text-zinc-500"
            />
          </span>
          <span>
            <label className="px-2 font-semibold text-sm">
              Informe o tempo de preparo
            </label>
            <span className="relative flex items-center">
              <Alarm size={22} className="absolute left-3" color="#27272a" />
              <input
                value={preparationTime}
                onChange={(e) => setPreparationTime(e.target.value)}
                type="text"
                placeholder="Exemplo: 2 horas e 40 minutos"
                className="border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500 pl-10 w-full px-4 py-2 bg-zinc-200 rounded-md placeholder:text-zinc-500"
              />
            </span>
          </span>
          <span>
            <label className="px-2 font-semibold text-sm">
              Informe o redimento
            </label>
            <span className="relative flex items-center">
              <CookingPot
                size={22}
                className="absolute left-3"
                color="#27272a"
              />
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="text"
                placeholder="Exemplo: 10 pessoas"
                className="border border-zinc-400 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500 pl-10 w-full px-4 py-2 bg-zinc-200 rounded-md placeholder:text-zinc-500"
              />
            </span>
          </span>
          <span>
            <label htmlFor="" className="px-2 font-semibold text-sm">
              Selecione a categoria
            </label>
            <br />
            <ThemeProvider theme={theme}>
              <Select
                value={category}
                className="w-full focus:outline-none focus:ring-2 bg-zinc-200 rounded-lg"
                style={{ height: "44px" }}
                onChange={(e) => setCategory(e.target.value)}
                inputProps={{ "aria-label": "Without label" }}
                color="secondary"
              >
                <MenuItem disabled value="jhdkjfkdas">
                  Selecione
                </MenuItem>
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </ThemeProvider>
          </span>
        </div>
      </div>
      <Button back={() => navigate("/")} next={NextStep} />
    </>
  );
}
