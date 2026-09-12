import Hero from "../assets/banner-stack.png";
const Banner = () => {
  return (

    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-24 container mx-auto px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black">Build Your Ideal <br/><span className="bg-linear-to-r from-orange-500 via-pink-500 to-indigo-600 bg-clip-text text-transparent"> Development Stack</span></h1>
        <p className="text-gray-600 pt-4">
          Explore frontend, backend, database, and tooling options, <br/> compare them
          side by side, and put together the stack that fits your <br/> next project.
        </p>
        <div className="mt-8 flex w-full items-center justify-center gap-3">
          <button className="px-6 py-3 rounded-xl bg-linear-65 from-purple-500 to-pink-500">
            Explore Technologies
          </button>
          <button className="bg-white text-gray-600 border-2 border-gray-100 py-2 px-4 rounded-2xl">Learn More</button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={Hero} alt="" className="w-full max-w-md lg:max-w-lg object-contain" />
      </div>
    </section>
  );
};

export default Banner;
