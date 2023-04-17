import { useNavigate } from "react-router-dom";

interface ButtonProps {
  back: any;
  next: any;
}

export function Button({
  back,
  next
}: ButtonProps) {

  return (
    <div className="w-full sm:px-20 flex items-center justify-between">
      <button
        onClick={back}
        className="text-orange-700 border-2 rounded-md border-orange-700 px-4 py-2"
      >
        Voltar
      </button>
      <button
        onClick={next}
        className="rounded-md text-zinc-50 bg-orange-600 px-4 py-2"
      >
        Próximo
      </button>
    </div>
  );
}
