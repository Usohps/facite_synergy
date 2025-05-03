import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Real Estate Sales (Land & Houses)",
    description:
      "We help you invest wisely in properties with high growth potential. From residential plots to finished homes, we offer verified land and houses in strategic locations.",
    image: "/image6.jpg",
  },
  {
    title: "Roofing Solutions",
    description:
      "We supply and install top-grade rooftiles that combine beauty and durability. Our roofing team ensures your home is protected and stylish with professional installation.",
    image: "/image1.jpg",
  },
  {
    title: "Property Survey Services",
    description:
      "Get accurate and reliable land/property survey reports for legal and planning purposes. We work with certified professionals to give you peace of mind on your investment.",
    image: "/image3.jpg",
  },
];

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Our Services at Facite Synergy
      </h2>
      <p className="text-gray-600 mt-4">
        Explore the smart tools designed to simplify and streamline school
        management effortlessly.
      </p>

      {/* Feature Cards */}
      <div className="mt-10 grid gap-8 lg:grid-cols-3 grid-cols-1">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>

      {/* Explore Button */}
      <div className="mt-10">
        <button  className="bg-orange-500 w-full md:w-1/2 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
          <a href="#contact">Contact Us Today</a>
        </button>
      </div>
    </section>
  );
};

export default Services;
