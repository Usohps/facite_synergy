import Hero from "./components/Hero";
import Disover from "./components/Discover";
import SmartFeatures from "./components/SmartFeatures";
import Advantage from "./components/Advantage";

export default function page() {
  return (
    <main className="">
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-blue-100"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-blue-100"
      >
        <Disover />
      </section>
      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-blue-100"
      >
        <SmartFeatures />
      </section>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-blue-100"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Contact Us
        </h2>
        <Advantage />
      </section>
    </main>
  );
}
