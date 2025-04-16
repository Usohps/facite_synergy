import Features from "./Features";

const Hero = () => {
  return (
    <section
      className="relative h-[500px] md:min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/hero-bg.svg')" }}
    >
      {/* Overlay for dark tint effect */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 space-y-4 ">
        {/* Main Hero Content */}
        <h1 className="text-3xl md:text-[64px] font-medium text-black md:leading-snug">
        Welcome to <br /> Facite Synergy Company
        </h1>
        <p className="text-black text-lg md:text-[24px] md:mx-12 font-light">
        Your trusted partner in Property Management, Roofing & Tiling, and Professional Property Survey Services.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 space-x-4">
          <button className="bg-[#F97314] hover:bg-orange-500 text-white px-6 py-3 rounded-md shadow-md  transition">
            For more Info
          </button>
          <button className="border border-[#F97314] text-[#F97314] px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white transition">
            Explore Services
          </button>
        </div>
      </div>
      {/* <Features /> */}
    </section>
  );
};

export default Hero;
