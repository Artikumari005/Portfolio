import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import image from "../images/profile2.png";
import Scene from "./Scene";

const roles = [
  "Software Developer",
  "Logo Designer",
  
];

const MotionDiv = motion.div;

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    // overflow-hidden is the ONLY thing needed — it clips Scene to h-screen
    // No JS, no fixed positioning, no opacity fade
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Scene sits in normal flow, clipped by overflow-hidden on the section */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Scene />
      </div>

      {/* ================= BACKGROUND MARQUEE ================= */}
      <div className="font-[Poppins] absolute inset-0 z-0 flex items-center overflow-hidden">
        <div className="marquee flex items-center gap-24">
          <span className="text-[260px] md:text-[320px] lg:text-[380px] font-extrabold text-black/10">
            FULL STACK DEVELOPER
          </span>
          <span className="text-[260px] md:text-[320px] lg:text-[380px] font-extrabold text-black/10">
            FULL STACK DEVELOPER
          </span>
          <span className="text-[260px] md:text-[320px] lg:text-[380px] font-extrabold text-black/10">
            FULL STACK DEVELOPER
          </span>
        </div>
      </div>

      {/* ================= CENTER CONTENT ================= */}
<MotionDiv
        className="relative z-20 flex flex-col items-center justify-center text-center gpu-accelerated"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-[68px] md:text-[44px] lg:text-[48px] text-gray-900 tracking-tight flex flex-col items-center">
          <div>
            Hi, I'm{" "}
            <span className="text-black font-satoshi font-bold">Aarti !</span>
          </div>
<div className="relative mt-1 h-[30px] w-auto min-w-[200px] overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
<MotionDiv
                key={roles[currentRole]}
                className="absolute inset-0 flex items-center justify-center text-[16px] font-medium text-[#6f6f6f] gpu-accelerated whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {roles[currentRole]}
              </MotionDiv>
            </AnimatePresence>
          </div>
        </h1>

        <div className="mt-4 flex flex-col items-center relative">
<MotionDiv
            className="relative group gpu-accelerated"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 900 }}
          >
<div className="absolute -inset-10 rounded-[44px] bg-white/70 blur-xl opacity-70 pointer-events-none" />
<div className="
              relative z-10 h-[320px] w-[280px] overflow-hidden rounded-[38px]
              bg-white
              shadow-[0_10px_30px_rgba(60,43,120,0.12)]
              transition-shadow duration-500 group-hover:shadow-[0_20px_40px_rgba(60,43,120,0.2)]
              rotate-[3deg]
            ">
              <img
                src={image}
                alt="Aarti profile"
                className="h-full w-full object-cover object-[center_16%] transition duration-700 group-hover:scale-105"
              />
            </div>
          </MotionDiv>

<button
            onClick={() => window.scrollToSection && window.scrollToSection("contact")}
            className="mt-8 inline-flex h-[66px] min-w-[306px] items-center justify-center rounded-full border-[5px] border-[#f3e9ff] bg-white px-10 text-[23px] font-medium text-black no-underline transition-all duration-500 hover:-translate-y-1 hover:border-[#eadcff] active:scale-95 whitespace-nowrap"
            style={{
              color: "#000000",
              textDecoration: "none",
              WebkitTextFillColor: "#000000",
            }}
          >
            Let's Work Together!
          </button>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Home;
