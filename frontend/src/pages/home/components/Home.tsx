export function Home() {
  return (
    <section
      id="home"
      className="sm:px-16 px-8 flex items-center min-h-screen bg-banner-home font-light"
    >
      <div className="max-w-3xl flex flex-col gap-4 sm:text-left text-center sm:items-start items-center">
        <h3 className="sm:text-8xl text-6xl font-bold text-white w-full">
          Receitas
        </h3>
        <span className="sm:text-5xl text-3xl tracking-wider text-orange-400">
          As melhores receitas em um só lugar
        </span>
        <p className="sm:text-2xl text-xl tracking-wider text-gray-300">
          Oferecemos uma ampla variedade de opções culinárias que você pode
          experimentar. Se você está cansado de preparar sempre as mesmas
          receitas, aqui você terá uma fonte de inspiração para novos pratos e
          ideias para variar o cardápio.
        </p>
        <a
          href="#recipes"
          className="bg-orange-500 hover:bg-orange-600 transition-colors font-normal inline-block mt-4 rounded-md text-white px-4 py-2 cursor-pointer text-xl"
        >
          Ver receitas
        </a>
      </div>
    </section>
  );
}
