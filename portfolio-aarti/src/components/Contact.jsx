import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const usefulLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Artikumari005" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aarti-kumari-399371329/" },
  { label: "X (Twitter)", href: "https://x.com/AartiKushw71779" },
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

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#fbfbfb] px-6 pt-[210px] text-black"
    >
      {/* Animated sections */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-[1.6fr_1fr_1fr] gap-20 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
        
        {/* Contact Me */}
        <Motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="text-[26px] font-bold leading-none">Contact Me</h2>
          <div className="mt-10 flex flex-col gap-6 text-[26px] leading-[1.25] text-[#555555]">
            <a
              href="https://calendly.com/ak8327890/30min"
              target="_blank"
              rel="noreferrer"
              className="block text-[#555555] no-underline transition hover:text-black"
            >
              Book a Call
            </a>
            <a
              href="mailto:ak8327890@gmail.com"
              className="block text-[#555555] no-underline transition hover:text-black"
            >
              ak8327890@gmail.com
            </a>
          </div>
        </Motion.div>

        {/* Useful Links */}
        <Motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="text-[26px] font-bold leading-none">Useful Links</h2>
          <div className="mt-10 flex flex-col gap-6 text-[26px] leading-[1.25] text-[#555555]">
            {usefulLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block text-[#555555] no-underline transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Motion.div>

        {/* Social */}
        <Motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="text-[26px] font-bold leading-none">Social</h2>
          <div className="mt-10 flex flex-col gap-6 text-[26px] leading-[1.25] text-[#555555]">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block text-[#555555] no-underline transition hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </div>
        </Motion.div>

      </div>

      <div className="mx-auto mt-[190px] flex max-w-[1200px] items-center justify-between text-[18px] text-[#555555] max-[640px]:mt-24 max-[640px]:flex-col max-[640px]:gap-6">
        <p>&copy; Copyright 2026</p>
        <p>
          Made by{" "}
          <span className="font-bold text-[#7a2cff]">Aarti </span>
        </p>
      </div>

      <div className="absolute bottom-[150px] right-[12%] h-6 w-6 rounded-full bg-[#ff1f0f] shadow-[0_14px_35px_rgba(255,31,15,0.32)]" />

      <div className="pointer-events-none absolute -bottom-[clamp(34px,5vw,92px)] left-0 w-full overflow-hidden">
        <p className="w-full whitespace-nowrap text-center font-[Poppins] text-[clamp(76px,18.8vw,360px)] font-black leading-[0.78] tracking-[-0.065em] text-black">
          DEVELOPER
        </p>
      </div>
    </section>
  );
}

export default Contact;
