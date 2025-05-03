import Image from "next/image";

const About = () => {
  return (
    <section className="min-h-screen container mx-auto  flex flex-col-reverse lg:flex-row items-center gap-8 ">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/image4.jpg"
          alt="SSMS Dashboard"
          width={600}
          height={400}
          className="rounded-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-justify px-4 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">
        About Us
        </h2>
        <div>
          <h2 className="font-bold text-xl underline underline-offset-1 py-3">Who We Are</h2>
          <p>Facite Synergy is a trusted real estate and roofing solutions provider in Nigeria, committed to quality, integrity, and customer satisfaction.We focus on helping individuals, families, and businesses secure valuable real estate investments—whether it's buying land, purchasing a home, or installing durable, stylish rooftiles. Our team combines in-depth industry knowledge with hands-on experience to offer services you can rely on. With every project, our goal is to add value, offer peace of mind, and build lasting relationships.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl underline underline-offset-1 py-3">Our Mission</h2>
          <p>To provide reliable real estate and roofing solutions that empower people to invest, build, and live better.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl underline underline-offset-1 py-3">Our Vision</h2>
          <p>To become a leading name in the real estate and roofing industry, known for quality, innovation, and trust.</p>
        </div>
       
      </div>
    </section>
  );
};

export default About;
