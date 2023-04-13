import { HeartStraight } from "phosphor-react";
import bolo from "../../assets/bolo.jpg";


export function Recipes(){

    const recipes = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <section id="recipes" className="sm:px-16 px-8 py-12 text-zinc-900 sm:text-left text-center">
            <h1 className="text-4xl text-center mb-8">Principais receitas</h1>
            <div className="flex flex-col sm:grid lg:grid lg:grid-cols-4 sm:grid-cols-2 sm:grid-rows-4 lg:grid-rows-2 gap-4">
              {
                recipes.map((item) => {
                  return (
                    <div className="cursor-pointer tracking-wide">
                      <img src={bolo} alt="image" className="w-[320px] h-[213px] rounded-md hover:scale-110 transition-transform"/>
                      <span className="flex items-center justify-between px-4 py-2">
                        <span>
                          <h3 className="text-xl font-light hover:text-gray-600 transition-colors">Bolo de chocolate</h3>
                          <a href="#" className="font-thin text-gray-500 text-base">by: <span className="text-blue-600 hover:underline">Yuri</span></a>
                        </span>
                        <span className="p-2 cursor-pointer hover:bg-gray-200 transition-colors rounded-full"><HeartStraight size={28} weight="light"/></span>
                      </span>
                    </div>
                  );
                })
              }
            </div>
        </section>
    );
}