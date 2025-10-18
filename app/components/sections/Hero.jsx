import Image from "next/image";
import assets from "@/app/assets/assets";
import { Search, SearchIcon } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center text-center px-6 overflow-hidden">

      {/* Title */}
      <h1 className="main-heading tracking-wide text-4xl sm:text-5xl md:text-6xl font-bold leading-tight z-10 drop-shadow-[0_3px_6px_rgba(0,0,0,0.15)]">
        INSTANT{" "}
        <span className="font-tomorrow bg-gradient-to-r from-[#ff0000] to-[#ff4d4d] bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_10px_rgba(255,0,0,0.4)]">
          YOUTUBE
        </span>

        {" "}
        SEO GENERATOR
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-lg mt-6 text-[var(--text-secondary)] max-w-2xl z-10">
        Boost your reach with real live data-driven{" "}
        <span className="font-semibold text-[var(--btn-primary)]">tags</span>,{" "}
        <span className="font-semibold text-[var(--btn-primary)]">titles</span>, and{" "}
        <span className="font-semibold text-[var(--btn-primary)]">descriptions</span> in seconds.
      </p>

      {/* Input Form */}
      <form className="relative mt-8 flex items-center justify-center w-full sm:w-auto">
        <div className="relative group w-full sm:w-[400px] md:w-[500px] lg:w-[600px]">
          <input
            type="text"
            placeholder="Enter your video title..."
            className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-300/30 bg-white/10 backdrop-blur-md text-gray-200 placeholder-gray-300 
                     shadow-md focus:shadow-[0_0_40px_rgba(255,0,0,0.2)] 
                     focus:border-[var(--btn-primary)] transition-all duration-300 ease-in-out outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg 
                     text-gray-400 hover:text-[var(--btn-primary)] 
                     cursor-pointer
                     transition-all duration-200 focus:text-[var(--btn-primary)]"
          >
            <Search size={20} />
          </button>
        </div>
      </form>

      {/* Buttons */}
      <div className="mt-8 flex gap-6 z-10">
        <button className="primary ">
          Get Started
        </button>
        <button className="secondary">
          Use Generators
        </button>
      </div>

      {/* Floating Tags Section */}
      <div className="relative w-full z-10">
        
      </div>
    </section>
  );
};

export default Hero;
