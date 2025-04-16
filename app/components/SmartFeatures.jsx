import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Property Management",
    description:
      " We handle all aspects of property management including tenant relations, maintenance, and asset growth—so you can enjoy the benefits without the stress.",
    image: "/image6.jpg",
  },
  {
    title: "Roofing & Tiling",
    description:
      "Our skilled team offers roof installation, repair, and tile work that blends durability with design—ensuring safety and curb appeal.",
    image: "/image1.jpg",
  },
  {
    title: "Property Survey",
    description:
      "Accurate property assessments and land surveys using modern tools and techniques to support real estate decisions and legal clarity.",
    image: "/image3.jpg",
  },
];

const SmartFeatures = () => {
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
      <div className="mt-10 grid gap-8 md:grid-cols-3 grid-cols-1">
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
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default SmartFeatures;
