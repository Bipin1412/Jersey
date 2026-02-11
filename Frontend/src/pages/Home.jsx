import { useState, useEffect } from "react";
import CategoryCarousel from "../components/common/CategoryCarousel";

import banner1 from "../assets/img/banner-rondalo.png";
import banner2 from "../assets/img/banner-2.jpeg";
import banner3 from "../assets/img/banner-3.jpeg";
import banner4 from "../assets/img/banner-4.jpeg";
import banner5 from "../assets/img/banner-5.webp";

const banners = [
  { image: banner1, offer: "FLAT 25% OFF ABOVE 2000 INR.", code: "VDAY25", rightText: "Your search for the perfect gift stops here." },
  { image: banner2, offer: "NEW ARRIVALS JUST DROPPED", code: "SHOP NOW", rightText: "Discover styles you’ll love." },
  { image: banner3, offer: "SPECIAL DEALS FOR YOU", code: "LIMITED TIME", rightText: "Don’t miss out on exclusive offers." },
  { image: banner4, offer: "MEGA SALE IS LIVE", code: "HURRY UP", rightText: "Grab your favorites now." },
  { image: banner5, offer: "EXCLUSIVE COLLECTION", code: "SHOP TODAY", rightText: "Style that speaks for you." },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    banners.forEach(banner => {
      const img = new Image();
      img.src = banner.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-amber-100">

      <section className="relative w-full min-h-screen overflow-hidden">

      {/* Single Banner Image */}
      <img
        src={banners[current].image}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 h-full flex items-center px-6 md:px-16">
        <div className="max-w-xl text-white">
          <p className="text-sm tracking-wide mb-4">
            {banners[current].offer}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            USE CODE <br /> "{banners[current].code}"
          </h1>
        </div>

        <div className="hidden md:block absolute right-16 text-white text-lg max-w-sm text-right">
          {banners[current].rightText}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current === index ? "bg-white w-5" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      </section>

         {/* Section Title */}
      <section className="text-center py-12">
        <h1 className="text-[40px] font-bold text-[#21304D]">
          SHOP THE STARTING XI
        </h1>
      </section>

      {/* Carousel */}
      <CategoryCarousel />


      <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-5 sm:px-8 md:px-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
    
    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">
      
      <h2 className="
        text-3xl 
        sm:text-4xl 
        md:text-5xl 
        font-extrabold 
        text-[#000091] 
        leading-tight 
        mb-4 sm:mb-6
      ">
        WHO ARE WE?
      </h2>

      <div className="w-16 sm:w-20 h-1 bg-[#000091] mb-6 sm:mb-8 mx-auto md:mx-0"></div>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
        Born from friendship and fueled by football, we are four friends 
        building a jersey brand for true fans.
      </p>

      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
        What started as late-night match debates is now a startup dedicated 
        to creating premium football jerseys that represent passion, loyalty, 
        and unforgettable moments.
      </p>

      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
        Crafted in India with comfort and style in mind — because football 
        isn’t just a sport. It’s an emotion.
      </p>

      <button className="
        mt-6 sm:mt-8
        px-6 sm:px-8 
        py-2.5 sm:py-3 
        bg-[#000091] 
        text-white 
        font-semibold 
        rounded-full 
        shadow-lg 
        hover:scale-105 
        transition 
        duration-300
      ">
        Explore Collection
      </button>
    </div>

    {/* RIGHT SIDE BOX */}
    <div className="relative mt-8 md:mt-0">
      
      <div className="
        absolute 
        -top-4 -left-4 
        sm:-top-6 sm:-left-6 
        w-full h-full 
        border-2 sm:border-4 
        border-[#000091] 
        rounded-2xl
      "></div>

      <div className="relative bg-gray-100 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold text-[#000091] mb-3 sm:mb-4">
          4 Friends. 1 Dream.
        </h3>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          Connecting fans through authentic jerseys that celebrate the 
          beautiful game.
        </p>
      </div>

    </div>

  </div>
</section>
        


    </div>




  );
};

export default Home;
