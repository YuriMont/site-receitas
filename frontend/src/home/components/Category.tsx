import sorvete from "../../assets/icons-sorvete.png";

export function Category(){
    const category = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section id="category" className="sm:px-16 px-8 py-8 text-zinc-900 sm:text-left text-center">
            <h1 className="text-4xl text-center mb-12">Categorias</h1>
            <div className="flex flex-col sm:grid lg:grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
                {
                    category.map((item) => {
                        return (
                            <div className="rounded-md cursor-pointer hover:bg-zinc-300 bg-zinc-200 transition-colors px-4 py-2 flex items-center justify-center gap-2">
                                <img src={sorvete} alt="" className="w-[32px] h-[32px]"/>
                                <h3 className="text-orange-600 font-light">Sobremesa</h3>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}