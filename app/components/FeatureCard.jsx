import Image from "next/image";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#F973141A] p-6 rounded-lg shadow-lg relative">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">
        {/* <Image
          src={image}
          alt={title}
          width={200}
          height={100}
          className="rounded-lg m-auto bg-cover"
        /> */}
        <div className=" rounded-xl w-full max-h-[200px]">
          <img src={image} className="rounded-xl w-full h-[200px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
