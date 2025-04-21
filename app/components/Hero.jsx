'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
];

const Hero = () => {
  return (
    <section className="relative h-[500px] md:min-h-screen w-full overflow-hidden">
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
                className="w-full h-[500px] md:min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Text */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 space-y-4">
        <h1 className="text-3xl md:text-[64px] font-medium text-white md:leading-snug">
          Welcome to <br /> Facite Synergy Company
        </h1>
        <p className="text-white text-lg md:text-[24px] md:mx-12 font-light">
          Your trusted partner in Property Management, Roofing & Tiling, and Professional Property Survey Services.
        </p>

        <div className="mt-6 space-x-4">
          <button className="bg-[#F97314] hover:bg-orange-500 text-white px-6 py-3 rounded-md shadow-md transition">
            <a href="#about">For more Info</a>
          </button>
          <button  className="border border-[#F97314] text-[#F97314] px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white transition">
            <a href="#services">Explore Services</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;