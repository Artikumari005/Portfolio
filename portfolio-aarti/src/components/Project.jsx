import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";

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

const ProjectCard = ({ project, index }) => {
  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="min-w-0 gpu-accelerated"
      style={{
        willChange: "transform",
        transform: "translateZ(0)"
      }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block rounded-[36px] border-[14px] border-[#f8f8f8]/60 bg-[#fbf5ff] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] gpu-accelerated"
        aria-label={`View ${project.title}`}
      >
        <div className="relative aspect-[1.48] overflow-hidden rounded-[22px] bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-5 rounded-full bg-white px-8 py-4 text-[20px] font-medium text-black shadow-lg">
              View Project
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                <ArrowRight size={26} strokeWidth={2} />
              </span>
            </span>
          </div>
        </div>
      </Link>

      <div className="pt-4">
        <p className="text-[16px] font-medium leading-none text-[#666666]">
          {project.category}
        </p>

        <h3 className="mt-3 text-[30px] font-medium leading-tight text-black">
          {project.title}
        </h3>
      </div>
    </Motion.article>
  );
};

const Project = () => {
  return (
    <section id="projects" className="min-h-screen w-full bg-white px-6 pb-28 pt-[250px]">
      <div className="mx-auto max-w-[1260px]">
        <div className="mb-[86px] text-center">
          <h2 className="font-[Poppins] text-[90px] font-bold leading-none text-black">
           My  Projects
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-[96px] gap-y-[58px] max-[760px]:grid-cols-1">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
