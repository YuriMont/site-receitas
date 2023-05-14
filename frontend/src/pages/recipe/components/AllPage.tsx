import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { RecipeCard } from "../RecipeCard";
import { MagnifyingGlass } from "phosphor-react";
import { Footer } from "../../home/components/Footer";

export function AllPage() {
  const [page, setPage] = useState(1);
  const recipes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
    <div className="h-full w-screen flex flex-col items-center p-8">
      <span className="tracking-wide px-16 sm:w-full flex items-center gap-2">
        <input
          type="text"
          className="px-4 py-2 w-full bg-zinc-200 text-gray-600 font-thin rounded-md border"
          placeholder="Ex: bolo de chocolate"
        />
        <button className="p-2 flex items-center lg:bg-zinc-200 bg-zinc-300 cursor-pointer border hover:bg-zinc-700 lg:hover:bg-zinc-300 transition-colors rounded-md">
          <MagnifyingGlass size={24} />
        </button>
      </span>
      <div className="mt-8 flex flex-col sm:grid lg:grid lg:grid-cols-3 sm:grid-cols-2 sm:grid-rows-4 lg:grid-rows-4 gap-8">
        {recipes.map((item) => (
          <RecipeCard />
        ))}
      </div>
      <Stack spacing={2} className="mt-4 flex justify-center items-center">
        <Pagination
          count={20}
          defaultPage={page}
          shape="rounded"
          size="large"
          onChange={(e, value) => setPage(value)}
          siblingCount={2}
          boundaryCount={2}
        />
      </Stack>
    </div>
    <Footer />
    </>
  );
}
