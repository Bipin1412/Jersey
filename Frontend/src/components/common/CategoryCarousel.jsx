

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import vintage from "../../assets/img/xi-1.jpeg";
import varsity from "../../assets/img/xi-2.jpeg";
import joggers from "../../assets/img/xi-3.jpeg";
import leather from "../../assets/img/xi-4.jpeg";
import hoodie from "../../assets/img/xi-5.jpeg";
import sweatshirt from "../../assets/img/xi-6.jpeg";
import tracksuits from "../../assets/img/xi-7.jpeg";
import denim from "../../assets/img/xi-8.jpeg";
import bombers from "../../assets/img/xi-9.jpeg";
import oversized from "../../assets/img/xi-10.jpeg";
import accessories from "../../assets/img/xi-11.jpeg";

const categories = [
  { title: "VINTAGE", image: vintage },
  { title: "VARSITY TSHIRTS", image: varsity },
  { title: "JOGGERS", image: joggers },
  { title: "LEATHER JACKETS", image: leather },
  { title: "HOODIES", image: hoodie },
  { title: "SWEATSHIRTS", image: sweatshirt },
  { title: "TRACKSUITS", image: tracksuits },
  { title: "DENIM", image: denim },
  { title: "BOMBERS", image: bombers },
  { title: "OVERSIZED TEES", image: oversized },
  { title: "ACCESSORIES", image: accessories },
];

const CategoryCarousel = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Prevent page scroll while swiping carousel
  const handleWheel = (e) => {
    e.preventDefault();
    sliderRef.current.scrollLeft += e.deltaY;
  };

  return (
    <section className="relative py-14 bg-red-950">
      
      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className="flex absolute left-3 top-1/2 -translate-y-1/2 z-20
                   bg-white shadow-xl p-2 md:p-3 rounded-full hover:scale-105 transition"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className="flex absolute right-3 top-1/2 -translate-y-1/2 z-20
                   bg-white shadow-xl p-2 md:p-3 rounded-full hover:scale-105 transition"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* CARDS */}
      <div
        ref={sliderRef}
        onWheel={handleWheel}
        className="
          flex gap-6 overflow-x-auto scroll-smooth
          no-scrollbar pl-6 pr-6
          snap-x snap-mandatory
        "
      >
        {categories.map((item, index) => (
          <div
            key={index}
            className="
              min-w-[260px] h-[420px]
              snap-start relative rounded-2xl
              overflow-hidden shadow-xl
              cursor-pointer group
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full h-full object-cover
                group-hover:scale-105
                transition duration-500
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Title */}
            <h3
              className="
                absolute bottom-6 left-6
                text-white text-lg font-semibold tracking-wide
              "
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCarousel;

