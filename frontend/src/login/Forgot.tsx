import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { ShowSteps } from "./ShowSteps";

export function Forgot() {
  const steps = ["Informe seu email", "Insira o código", "Redefina sua senha"];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container h-[480px] flex flex-col justify-between px-8 py-8 sm:px-16 sm:py-16 bg-white">
      <div className="w-full">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <ShowSteps step={activeStep} setActiveStep={setActiveStep}/>
      <div></div>
    </div>
  );
}
