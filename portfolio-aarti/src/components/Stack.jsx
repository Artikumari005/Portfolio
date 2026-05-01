import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import '../index.css';

const tools = [
  {
    name: "HTML",
    icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    desc: "I build clean, semantic structures that form the backbone of every interface. Accessibility and SEO-friendly markup are always a priority."
  },
  {
    name: "CSS",
    icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    desc: "I craft responsive, pixel-perfect layouts with modern CSS techniques including Flexbox, Grid, and advanced animations."
  },
  {
    name: "JavaScript",
    icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    desc: "I create dynamic, interactive experiences using modern JavaScript (ES6+) with a focus on performance and clean architecture."
  },
  {
    name: "React",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    desc: "I build scalable UI systems using component-based architecture, hooks, and optimized state management."
  },
  {
    name: "Tailwind",
    icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    desc: "I design fast and consistent interfaces using utility-first styling, enabling rapid development without compromising design quality."
  }
];

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 60
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: i * 0.1,
      mass: 1
    }
  })
};

const StackCard = ({ tool, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group w-full h-[580px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      style={{ perspective: "1000px" }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 bg-white rounded-[50px] 
                        border-[14px] border-[#f8f8f8]/60 shadow-[0_10px_40px_rgba(0,0,0,0.02)] 
                        flex flex-col items-center justify-center overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          
          {/* ICON CONTAINER */}
          <div className="w-[350px] h-[250px] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <img 
              src={tool.icon} 
              alt={tool.name} 
              className="w-[150px] h-[130px] object-contain group-hover:grayscale-0 transition-all duration-500" 
            />
          </div>

          <h3 className="mt-3 text-[45px] font-bold text-gray-900 tracking-tight">{tool.name}</h3>
          
          {/* "Tap to Flip" Tag */}
          <div
            className="pointer-events-none absolute z-30 px-6 py-3 bg-black text-white rounded-full 
                       text-sm font-semibold opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300"
            style={{
              transform: `translate(${pos.x - 70}px, ${pos.y - 25}px)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            Tap to View
          </div>
        </div>

{/* BACK SIDE */}
        <div 
          className="absolute inset-0 bg-white rounded-[36px] 
                        shadow-[0_10px_40px_rgba(0,0,0,0.02)]
                        flex items-center justify-center p-8 text-center"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <p className="text-black-500 text-[22px] leading-relaxed font-medium">
            {tool.desc}
          </p>
        </div>
      </div>
    </Motion.article>
  );
};

const Stack = () => {
  return (
    <section
      id="stack"
      className="relative min-h-screen w-full bg-white flex flex-col items-center overflow-hidden"
      style={{ paddingTop: "180px", paddingBottom: "96px" }}
    >
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-[90px] font-black text-gray-900 tracking-tighter">
          My Stack
        </h2>
      </div>

<div className="relative z-10 w-full max-w-[1100px] px-4 grid grid-cols-3 gap-x-[96px] gap-y-[58px]">
        {tools.map((tool, index) => (
          <div key={index} className="p-4">
            <StackCard tool={tool} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
