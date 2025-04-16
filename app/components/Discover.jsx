import Image from "next/image";

const DiscoverSSMS = () => {
  return (
    <section className="min-h-screen container mx-auto  flex flex-col md:flex-row items-center gap-8 ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/ipadpro.svg"
          alt="SSMS Dashboard"
          width={600}
          height={400}
          className=""
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-justify px-8 md:px-12">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">
        About Us
        </h2>
        <p className="text-gray-600 leading-relaxed">
        Facite Synergy Company has proudly served clients for over <strong>10 years</strong>, delivering excellence in
        <strong> property management, roofing and tiling, and comprehensive property surveys</strong>.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
        Our experienced team is committed to delivering high-quality, reliable, and tailored solutions to meet each client's unique needs.
        We believe in professionalism, integrity, and long-term relationships built on trust.
        </p>
       
      </div>
    </section>
  );
};

export default DiscoverSSMS;
