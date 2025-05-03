"use client";
export default function SmssAdvantage() {
  return (
    <>
          <div className=" flex md:flex-row items-center  container m-auto p-4 space-y-4 md:space-y-0 flex-col   md:justify-between w-full">
            {/* Contact Form */}
            <form className="md:w-1/2 w-full bg-gray-50  p-6 rounded-xl shadow-md space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="border border-[#F97314] text-[#F97314] px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white transition"
              >
                Send Message
              </button>
            </form>

            {/* Company Info */}
            <div className="md:w-1/3 w-full flex flex-col justify-center space-y-4 text-gray-700">
            <div>
            <h1>Let’s Talk</h1>
              <p>Have a question or ready to get started? We’d love to hear from you.</p>
            </div>
              <div>
                <h3 className="font-bold text-lg">Address:</h3>
                <p>123 Unity Street, Lagos, Nigeria</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone:</h3>
                <p>+234 800 123 4567</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Email:</h3>
                <p>info@facitesynergy.com</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Business Hours:</h3>
                <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
    </>
  );
}

// FeatureCard Component
const FeatureCard = ({ title, description, bgColor, icon }) => {
  return (
    <div className={`p-6 rounded-xl shadow-lg ${bgColor}`}>
      <div className="flex items-center space-x-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm">{description}</p>
      <div className="mt-4 flex justify-end">
        <BsArrowRight className="text-2xl" />
      </div>
    </div>
  );
};
