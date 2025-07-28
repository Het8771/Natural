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






import heroBg from "../image/studiobanner.svg";
import { Link } from "react-router-dom";

const Creativestudiohero = ({ children }) => {
  return (
    <section
      className="relative flex h-[480px] w-full items-center justify-center overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

const CreativeStudioBanner = () => {
  return (
    <Creativestudiohero>
      <div className="text-white max-w-lg mx-auto md:mx-[-100px] text-center md:text-left">
        <p className="mb-2 text-xs md:text-sm uppercase tracking-wide text-white/70">
          Introducing Creative Studio
        </p>

        <h1 className="mb-4 text-2xl md:text-5xl font-bold leading-tight">
          Tailor‑Made by&nbsp;You
        </h1>

        <p className="mb-6 text-sm md:text-base text-white/90 leading-relaxed">
          Our Creative Studio allows you to design your engagement ring exactly
          the way you want it — with control over every detail. Use our unique
          tools to create something exceptional, online or in showrooms.
        </p>

        <Link to="/Customize">
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-slate-200 transition cursor-pointer">
            Customize Product
          </button>
        </Link>
      </div>
    </Creativestudiohero>
  );
};

export default CreativeStudioBanner;
