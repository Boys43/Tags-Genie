import Hero from "./components/sections/Hero";
import WhyUs from "./components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <div className="mt-20 overflow-x-hidden">
        {/* Floating blurry AI dots (animated softly) */}
        <div className="absolute w-72 h-72 bg-blue-500 md:bg-[var(--btn-primary)] rounded-full blur-[100px] opacity-25 top-10 left-20 animate-pulse"></div>
        <div className="hidden md:block absolute w-72 h-72 bg-blue-500 rounded-full blur-[100px] opacity-25 bottom-20 left-40 animate-[pulse_5s_ease-in-out_infinite]"></div>
        <div className="absolute w-60 h-60 bg-[var(--btn-primary)] rounded-full blur-[120px] opacity-20 bottom-10 right-20 animate-[pulse_5s_ease-in-out_infinite]"></div>
        <div className="absolute w-48 h-48 bg-[var(--btn-primary)] rounded-ull blur-[90px] opacity-15 top-1/3 right-1/3 animate-[pulse_5s_ease-in-out_infinite]"></div>
        <div className="absolute w-24 h-24 bg-[var(--btn-primary)] rounded-full blur-[60px] opacity-10 top-1/2 left-1/4 animate-[bounce_10s_ease-in-out_infinite]"></div>
        <Hero />
      </div>
      <WhyUs />
    </>
  );
}
