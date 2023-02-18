import { StepForm1 } from "./StepForm1";
import { StepFormIngredients } from "./StepFormIngredients";
import { StepFormPreparation } from "./StepFormPreparation";
import { Stepper, Step, StepLabel, ThemeProvider } from "@mui/material";
import { useState } from "react";

import defaultImage from "../assets/default.jpg";
import { Preview } from "./Preview";

export function NewRevenueForm() {
  const steps = ["Inicio", "Ingredientes", "Modo de preparo", "Preview"];

  const [stepForm1Data, setStepForm1Data] = useState({
    image: defaultImage,
    revenueName: "",
    preparationTime: "",
    quantity: "",
    category: "",
  });

  const [stepFormIngredientsData, setStepFormIngredientsData] = useState<String[]>([])

  const [stepFormPreparationModeData, setStepFormPreparationModeData] = useState<String[]>([])

  const [activeStep, setActiveStep] = useState(0);

  function Steps() {
    if (activeStep === 0) {
      return (
        <StepForm1
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          steps={steps}
          stepForm1Data={stepForm1Data}
          setStepForm1Data={setStepForm1Data}
        />
      );
    } else if (activeStep === 1) {
      return (
        <StepFormIngredients
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          steps={steps}
          stepFormIngredientsData={stepFormIngredientsData}
          setStepFormIngredientsData={setStepFormIngredientsData}
        />
      );
    } else if (activeStep === 2) {
      return (
        <StepFormPreparation
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          steps={steps}
          stepFormPreparationModeData={stepFormPreparationModeData}
          setStepFormPreparationModeData={setStepFormPreparationModeData}
        />
      );
    }

    return <Preview stepForm1Data={stepForm1Data} stepFormIngredientsData={stepFormIngredientsData} stepFormPreparationMode={stepFormPreparationModeData}/>
  }

  return (
    <div className="w-[70vw] h-[90vh] rounded-lg shadow-form bg-white flex flex-col justify-between py-8 px-16 overflow-y-auto">
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <div className="w-full">
          <Stepper activeStep={activeStep} alternativeLabel className="mt-4">
            {steps.map((label, i) => {
              return (
                <Step key={i}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>

        <Steps />
      </div>
    </div>
  );
}
