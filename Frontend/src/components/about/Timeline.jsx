import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const timelineData = [
  { year: "2019", text: "The idea was born among four friends." },
  { year: "2020", text: "First jersey prototype launched." },
  { year: "2021", text: "Community started growing rapidly." },
  { year: "2022", text: "Persistence Paid Off — Fans loved it." },
  { year: "2023", text: "Expanded collection nationwide." },
];

const Timeline = () => {
  const [current, setCurrent] = useState(3);

  return (
    <section className="py-20 bg-gray-50 text-center">

      <h3 className="text-2xl font-semibold mb-4">
        Persistence Paid Off
      </h3>

      <p className="text-gray-600 mb-12">
        {timelineData[current].text}
      </p>

      {/* LINE */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-4 left-0 w-full h-[2px] bg-gray-300"></div>

        <div className="flex justify-between relative">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setCurrent(index)}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  current === index
                    ? "bg-black border-black"
                    : "bg-white border-gray-400"
                }`}
              ></div>
              <span className="text-sm mt-4 text-gray-600">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ARROWS */}
      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? timelineData.length - 1 : prev - 1
            )
          }
          className="bg-white shadow-lg p-4 rounded-full"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() =>
            setCurrent((prev) =>
              (prev + 1) % timelineData.length
            )
          }
          className="bg-white shadow-lg p-4 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Timeline;
