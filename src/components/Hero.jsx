function Hero() {
  return (
    <div className="px-6 pt-24 mb-24 animate-hero-fade-in">
      <div className="flex flex-col gap-3 text-left sm:text-center">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          Hey, I'm Mika.
        </h1>
        <h1 className="text-4xl font-bold lg:text-6xl sm:text-5xl">
          I write{" "}
          <span className="text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text">
            code
          </span>
          <span></span>
        </h1>
        <h1 className="text-4xl font-bold lg:text-6xl sm:text-5xl">
          that just{" "}
          <span className="italic text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text">
            works.
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
