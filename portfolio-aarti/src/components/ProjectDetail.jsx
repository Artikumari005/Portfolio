import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";


import { projects } from "../data/projects";
import { chefexaDetails } from "../data/chefexa-details.js";
import { foodForeverDetails } from "../data/food-forever-details.js";
import { tenziesDetails } from "../data/tenzies-details.js";

const galleryVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: i === 1 ? 1 : 0.85,
    y: i === 1 ? -10 : 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ProjectImageCard = ({ src, alt, index }) => {
  return (
    <motion.div
      custom={index}
      variants={galleryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-[36px] border-[14px] border-[#f8f8f8]/60 bg-[#fbf5ff] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.02)]"
    >
      <div className="aspect-[1.42] overflow-hidden rounded-[22px] bg-black">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
};

const MetaRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-[#efedf4] pb-5 text-[16px] leading-none last:border-b-0 last:pb-0">
      <span className="font-medium text-[#666666]">{label}</span>
      <span className="text-right font-semibold text-black">{value}</span>
    </div>
  );
};

const OtherProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="group block min-w-0">
      <div className="rounded-[30px] border-[10px] border-[#f8f8f8]/60 bg-[#fbf5ff] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
        <div className="aspect-[1.48] overflow-hidden rounded-[18px] bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-70"
          />
        </div>
      </div>
      <p className="mt-4 text-[14px] font-medium leading-none text-[#666666]">
        {project.category}
      </p>
      <h3 className="mt-2 text-[20px] font-medium leading-tight text-black">
        {project.title}
      </h3>
    </Link>
  );
};

const DetailSection = ({ title, children }) => {
  return (
    <section className="border-b border-[#eeeeee] pb-10 last:border-b-0">
      <h2 className="font-[Poppins] text-[31px] font-bold leading-tight text-black max-[760px]:text-[26px]">
        {title}
      </h2>
      <div className="mt-5 text-[19px] leading-[1.65] text-[#333333] max-[760px]:text-[17px]">
        {children}
      </div>
    </section>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

const otherProjects = projects
    .filter((item) => item.id !== project.id)
    .slice(0, 2);
  const isFoodForever = project.id === "food-forever";
  const isTenzies = project.id === "tenzies";
  const detailContent = isFoodForever
    ? foodForeverDetails
    : isTenzies
      ? tenziesDetails
      : chefexaDetails;

  return (
    <main className="min-h-screen bg-white pb-28 pt-[170px]">
      <div className="mx-auto max-w-[1260px]">
<Link
          to="/"
          className="ml-6 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[16px] font-medium text-[#555555] shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition hover:text-black"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <header className="mx-auto mt-24 max-w-[900px] px-6 text-center">
          <p className="text-[18px] font-medium text-[#666666]">
            {project.category}
          </p>
          <h1 className="mt-4 font-[Poppins] text-[64px] font-bold leading-[1.05] text-black max-[760px]:text-[42px]">
            {project.title}
          </h1>
          <p className="mx-auto mt-7 max-w-[780px] text-[21px] leading-[1.55] text-[#333333]">
            {project.desc}
          </p>
        </header>
      </div>

<section className="mx-auto mt-32 grid max-w-[1260px] grid-cols-3 gap-12 px-6 max-[900px]:grid-cols-1">
          {project.gallery.map((image, index) => (
            <ProjectImageCard
              key={`${project.id}-${index}`}
              src={image}
              index={index}
              alt={`${project.title} preview ${index + 1}`}
            />
          ))}
      </section>

      <section className="mx-auto mt-32 grid max-w-[1120px] grid-cols-[340px_1fr] gap-28 px-6 max-[900px]:grid-cols-1">
        <aside className="h-max rounded-[34px] border-[12px] border-[#f8f8f8]/60 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          
         

<div className="mt-9 space-y-4">
            <a
              href={project.image}
              target="_blank"
              rel="noreferrer"
              className="flex h-[62px] w-full items-center justify-center rounded-full border-[6px] border-[#f1e9ff] bg-white text-[17px] font-medium text-black no-underline transition hover:border-[#e5d7ff]"
            >
              Preview
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-[62px] w-full items-center justify-center rounded-full bg-[#ff1f0f] text-[17px] font-medium text-white no-underline shadow-[0_12px_26px_rgba(255,31,15,0.22)] transition hover:bg-[#eb1305]"
            >
              Visit Project
            </a>
          </div>
        </aside>

        <article className="pt-2">
          {detailContent ? (
            <div className="space-y-10">
              <DetailSection title="Project Overview">
                <p>{detailContent.overview}</p>
              </DetailSection>

              {detailContent.sections.map((section) => (
                <DetailSection key={section.title} title={section.title}>
                  <p>{section.body}</p>
                </DetailSection>
              ))}

              <DetailSection title="Pages Overview">
                <div className="grid gap-4">
                  {detailContent.pages.map((page) => (
                    <p
                      key={page}
                      className="rounded-[18px] border border-[#f1e9ff] bg-[#fff9f4] px-5 py-4"
                    >
                      {page}
                    </p>
                  ))}
                </div>
              </DetailSection>

              <DetailSection title="Features at a Glance">
                <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
                  {detailContent.features.map((feature) => (
                    <p
                      key={feature}
                      className="rounded-[18px] border border-[#ffe0d6] bg-white px-5 py-4 text-[17px] leading-[1.45] shadow-[0_10px_28px_rgba(255,97,39,0.08)]"
                    >
                      {feature}
                    </p>
                  ))}
                </div>
              </DetailSection>

              <DetailSection title="Conclusion">
                <p>{detailContent.conclusion}</p>
              </DetailSection>
            </div>
          ) : (
            <>
              <div className="mb-12">
                <p className="mb-4 text-[18px] font-semibold text-[#666]">
                  Project Overview
                </p>
                <p className="mx-auto max-w-3xl text-[20px] leading-[1.7] text-[#333]">
                  {project.desc}
                </p>
              </div>

              <div className="mb-16 mt-24">
                <p className="mb-6 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  My Approach
                </p>
                <div className="grid max-w-4xl gap-6">
                  {project.approach.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-3xl border border-orange-100 bg-gradient-to-r from-orange-50 to-red-50 p-8 text-[17px] leading-relaxed text-[#444] shadow-xl"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </article>
      </section>

      <section className="mx-auto mt-32 max-w-[1120px] px-6">
        <h2 className="mb-12 text-center font-[Poppins] text-[34px] font-bold leading-none text-black">
          Other Projects
        </h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-12 max-[760px]:grid-cols-1">
          {otherProjects.map((item) => (
            <OtherProjectCard key={item.id} project={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
