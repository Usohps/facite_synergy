import Hero from "./components/Hero";
import About from "./components/About"
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function page() {
  return (
    <main className="">
      <section
        id="home"
        className="min-h-screen  flex items-center justify-center bg-blue-100"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-blue-100"
      >
        <About />
      </section>
      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-blue-100"
      >
        <Services />
      </section>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-blue-100"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Contact Us
        </h2>
        <Contact />
      </section>
    </main>
  );
}
