import about from "../../assets/about.jpg";

export function About() {
  return (
    <section id="about" className="sm:px-16 px-8 py-12 text-zinc-900 sm:text-left text-center">
      <div className="flex sm:flex-row flex-col gap-8">
        <div className="flex-1">
          <img
            className="lg:w-[640px] lg:h-[426px]  w-[320px] h-[213px] rounded-md shadow-form"
            src={about}
            alt="cooking"
          />
        </div>

        <div className="flex-1 flex flex-col gap-3 items-center justify-center">
          <h1 className="sm:text-5xl text-4xl mb-2 text-orange-500 text-center font-bold">
            Quem somos?
          </h1>
          <p className="font-light sm:text-2xl text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere
            possimus corrupti delectus, magnam libero? Pariatur magni dolores
            repudiandae ipsum fuga voluptates cumque neque fugit? Deleniti
            suscipit accusantium animi doloribus.
          </p>
          <p className="font-light sm:text-2xl text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ea
            possimus officiis nam et perferendis dolores adipisci asperiores
            sapiente culpa, quaerat voluptas mollitia a quisquam, aperiam harum
            error molestias quod.
          </p>
        </div>
      </div>
    </section>
  );
}
