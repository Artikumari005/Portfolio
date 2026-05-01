import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import profileImg from "../images/profile2.png";

const About = () => {
return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#f5f5f7] font-satoshi flex"
      style={{ paddingBottom: "80px" }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,115,0,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_25%)]" />

{/* LEFT SIDE - VERTICAL IMAGE (42% width) - HALF CAPSULE SHAPE */}
      <div className="relative w-[42%] h-full flex items-start justify-center px-6 z-10 pt-20">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-[520px] overflow-hidden"
          style={{
            borderRadius: '0 0 280px 280px',
            boxShadow: '0 30px 80px rgba(0,0,0,0.15), 0 10px 40px rgba(0,0,0,0.1), inset 0 0 80px rgba(255,255,255,0.2)',
          }}
        >
          {/* IMAGE CONTAINER WITH ZOOM HOVER */}
          <div className="group relative h-[75vh] w-full overflow-hidden" style={{ borderRadius: '0 0 280px 280px' }}>
            <img
              src={profileImg}
              alt="profile"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* GLASSMORPHISM OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent pointer-events-none" />
            
            {/* SOFT LIGHTING GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* FLOATING INFO CARD */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-white/80 px-8 py-4 backdrop-blur-xl shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
              Frontend Developer
            </p>
            <h3 className="mt-1 text-xl font-bold text-[#111827] text-center">
              Aarti
            </h3>
          </div>
        </Motion.div>
      </div>

{/* RIGHT SIDE - CONTENT (58% width) */}
      <div className="relative w-[58%] h-full  overflow-y-auto z-20 pl-4 pr-12 lg:pl-12 lg:pr-24">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* SMALL LABEL */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm">
            <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold tracking-wide text-gray-700">
              ABOUT ME
            </span>
          </div>

          {/* BIG HEADING */}
          <h1 className="text-[clamp(4rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.08em] text-[#0f172a]">
            Creative
            <br />
            Software Developer
          </h1>

{/* DESCRIPTION */}
          <div className="mt-12 space-y-8">
            <p className="text-[30px] leading-[2] text-gray-600 lg:text-[22px]">
              Greetings! I'm Aarti, a passionate frontend developer and UI/UX
              designer dedicated to building elegant and immersive digital
              experiences that feel smooth, modern, and visually refined.
            </p>
            <p className="text-[30px] leading-[2] text-gray-600 lg:text-[22px]">
              I specialize in creating responsive interfaces using React,
              Tailwind CSS, Framer Motion, and modern design systems —
              transforming creative ideas into polished experiences.
            </p>
            
          </div>

{/* BUTTONS - MUCH LARGER AND MORE VISIBLE */}
          <div className="mt-16 flex flex-wrap items-center gap-8">
            <a
              href="/AARTI_KUMARI_SOFTWARE_DEVELOPER_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group gap-4 rounded-full bg-orange-500 px-14 py-6 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-orange-600 no-underline"
style={{ 
                backgroundColor: "#ff6600",
                color: "#ffffff",
                fontSize: "23px",
                fontWeight: "700",
                minWidth: "200px",
                minHeight: "40px"
                
              }}
            >
              <span className="tracking-wide">
                Read My CV
              </span>
              <ArrowUpRight
                size={28}
                className="transition-transform duration-250 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
            <button 
              className="rounded-full border-4 border-orange-500 px-14 py-6 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              style={{
                borderColor: "#ff6600", 
                color: "#ff6600",
                fontSize: "24px",
                fontWeight: "700",
                minWidth: "200px",
                minHeight: "40px"
              }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </button>
          </div>

          {/* STATS  /**add experience , project, clients here in future **/}
        
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
