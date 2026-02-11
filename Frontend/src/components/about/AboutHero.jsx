import aboutImg from "../../assets/img/xi-1.jpeg";

const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT IMAGE */}
      <div>
        <img
          src={aboutImg}
          alt="About"
          className="w-full rounded-lg shadow-xl"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-4xl font-bold text-[#000091] mb-6">
          About Us
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          What started as four friends obsessed with football soon turned into
          a jersey startup built for fans, by fans.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Late-night match discussions, iconic football moments, and a shared
          dream pushed us to create premium jerseys that represent passion,
          loyalty, and identity.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Designed in India. Inspired by the beautiful game.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
