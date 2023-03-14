interface ButtonProps {
  setActiveStep: any;
  activeStep: number;
  steps: String[];
  next: any;
}

export function Button({
  setActiveStep,
  activeStep,
  steps,
  next
}: ButtonProps) {

 function nextStep(){
    next()
    setActiveStep(activeStep+1)
 }

  return (
    <div className="w-full flex items-center justify-between">
      <button
        onClick={() => setActiveStep(activeStep - 1)}
        className="text-purple-700 border-2 rounded-md border-purple-700 px-4 py-2"
        disabled={activeStep === 0}
      >
        Voltar
      </button>
      <button
        onClick={nextStep}
        className="rounded-md text-zinc-50 bg-purple-800 px-4 py-2"
      >
        {steps[activeStep] === "Preview" ? "Publicar" : steps[activeStep + 1]}
      </button>
    </div>
  );
}
