import heroImage from "/assets/valentin-kremer-2SEflfgjwCQ-unsplash.jpg";

function Hero() {
  return (
    <section
      className="p-6 flex flex-col items-start justify-center gap-12 min-h-screen bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-32 lg:gap-24">
        <div className="flex flex-col gap-12">
          <h1 className="text-slate-100 serif text-5xl md:text-6xl lg:text-7xl">
            Plan the perfect winter trip.
          </h1>
          <h2 className="text-slate-300 text-xl md:text-2xl lg:text-3xl">
            Easily plan your ideal ski trip from home with the help of
            professionals.
          </h2>
        </div>

        <button className="cta md:self-start self-center text-xl md:text-2xl">
          Book Here
        </button>
      </div>
    </section>
  );
}

export default Hero;
