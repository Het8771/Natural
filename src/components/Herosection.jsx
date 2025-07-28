// import heroBg from "../Image/studiobanner.svg"
// const Creativestudiohero = ({ children }) => {
//   return (
//     <section
//       className="relative flex h-[480px] w-full items-center justify-center overflow-hidden bg-center bg-cover"
//       style={{ backgroundImage: `url(${heroBg})` }}
//     >
//       {/* optional dark overlay for better text contrast */}
//       <div className="absolute inset-0 bg-black/10 " />

//       {/* slot for your content */}
//       <div className="relative z-10 w-full max-w-5xl px-6">{children}</div>
//     </section>
//   );
// };

// export default Creativestudiohero;



  import { useState, useEffect } from "react";
  import { ChevronLeft, ChevronRight } from "lucide-react";
  import home1 from "../image/home1.svg";
  import diamond1 from "../image/diamond1.svg";
  import diamond2 from "../image/diamond2.svg";

  const slides = [
    { image: home1 },
    { image: diamond1 },
    { image: diamond2 },
  ];

  const CreativeStudioBanner = () => {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    // ✅ Auto-slide every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // 5 seconds

      return () => clearInterval(interval); // cleanup
    }, [current]);

    const { image, title, subtitle, description } = slides[current];

    return (
      <section
        className="relative flex  w-full items-center justify-center bg-cover bg-center transition-all duration-700 ease-in-out h-[600px] sm:[300px] md:[500px] lg:[700px] xl:[600px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 " />

        {/* Text content (optional) */}
        <div className="relative z-10 text-white text-center max-w-5xl px-6">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <h2 className="text-3xl font-semibold mb-4">{subtitle}</h2>
          <p className="text-lg text-gray-200">{description}</p>
        </div>

        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#00715D] hover:text-white z-20 md:block hidden"
        >
          <ChevronLeft size={48} strokeWidth={2.5} />
        </button>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#00715D] hover:text-white z-20 md:block hidden"
        >
          <ChevronRight size={48} strokeWidth={2.5} />
        </button>
      </section>
    );
  };

  export default CreativeStudioBanner;
