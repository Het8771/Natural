import React from "react";
import about1 from "../image/about1.svg";

const DiamondShapes = () => {
  return (
    <div className="w-full bg-white text-center">
      {/* Next Generation Jewellery Section */}
      <section className="px-5 py-2 md:py-2 lg:py-2 max-w-7xl mx-auto ">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10 leading-tight text-left">
          NEXT GENERATION JEWELLERY FOR NEXT GENERATION CUSTOMERS
        </h2>

        <p className="text-base md:text-lg text-gray-900 font-semibold mb-6 text-left">
          mandana makes sustainable diamond jewellery with lab-grown diamonds
          from Nevermined – grown in Germany and destined to spark change. We
          are ushering in a new age where we express our values through luxury
          jewellery.
        </p>

        <p className="text-base md:text-lg text-gray-700 mb-6 text-left">
          mandana founder and mother of three Christine Marhofer was inspired to
          create something sustainable and lasting. High-quality jewellery is
          made for eternity – and diamonds are the most durable material in the
          world – the perfect symbiosis. However, Christine Marhofer could not
          reconcile including mined diamonds in her jewellery collections with
          her values. Especially not with her high level of awareness of
          sustainability. This is because mined diamonds are associated with
          devastating environmental and ethical issues. Yet dispensing with
          diamonds altogether was not an option either.
        </p>

        <p className="text-base md:text-lg text-gray-700 text-left">
          In an effort to make a difference by creating sustainable jewellery
          for all genders, tastes and generations, Christine Marhofer came upon
          lab-grown diamonds during her research. Since then, she and the
          mandana team have pursued a shared mission: to produce ethical and
          sustainable diamond jewellery using climate-neutral and transparent
          production processes and to make it accessible – using lab-grown
          diamonds produced especially in Germany. All to help look after our
          planet.
        </p>
      </section>

      {/* Nevermined Info Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Left */}
        <div>
          <img
            src={about1}
            alt="Diamond Cutting"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Text Right */}
        <div>
          <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed text-left">
            At mandana, it soon became clear to us: if we wish to balance luxury
            and sustainability, we can’t ship our lab-grown diamonds halfway
            around the world to Germany and accept huge amounts of CO2 emissions
            on the way. That is why we have founded a second company in addition
            to mandana. Nevermined is our own diamond production company in
            Essen, Germany. Here, through intensive research, we have created a
            recipe to grow diamonds of the highest quality.
          </p>

          <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed text-left">
            All our diamonds with 0.5 ct and above are certified by one of the
            two best-known laboratories, the International Gemological Institute
            (IGI) or the Gemological Institute of America (GIA), and confirmed
            in their authenticity and quality. We are proven to meet the same 4C
            standards as mined diamonds. We are revolutionising everything
            necessary to ultimately produce diamond jewellery in a fair and
            sustainable way.
          </p>

          <button className="bg-teal-800 text-white font-semibold text-lg px-6 py-3 rounded hover:bg-teal-900 transition duration-300">
            Discover Nevermined
          </button>
        </div>
      </section>
    </div>
  );
};

export default DiamondShapes;
