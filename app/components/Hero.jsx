"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          allowTouchMove={false}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-full min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Text */}
      <div className="container m-auto relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-3 md:px-6 space-y-4">
        <h1 className="text-2xl md:text-[64px] font-medium text-white md:leading-snug">
        Welcome to Facite Synergy – <br/> Building Tomorrow, Today
        </h1>
        <p className="text-white text-sm md:text-[24px] md:mx-12 font-light">
          At Facite Synergy, we bring your property dreams to life. Whether
          you're investing in land, buying a home, or buying a premium
          rooftiles, we provide quality, reliability, and unmatched expertise
          every step of the way. Your trusted partner in Selling land and houses
          in prime locations, Supplying and installing high-quality rooftiles
          built to last,Delivering expert property survey services to give you
          peace of mind. Let’s help you own your dream property and roof it with
          excellence.
        </p>

        <div className="mt-6 w-full md:w-1/2 space-x-4 flex flex-col md:flex-row justify-between items-center">
          <button className="bg-[#F97314] w-full  hover:bg-orange-500 text-white px-6 py-3 rounded-md shadow-md mb-4 md:mb-0 transition">
            <a href="#contact">Contact Us Today</a>
          </button>
          <button className="border border-[rgb(249,115,20)] w-full  text-[#F97314] px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white transition">
            <a href="#services">Explore Our Services</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
