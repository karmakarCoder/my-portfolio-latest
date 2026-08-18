"use client";
import Container from "../common/Container";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiReactquery,
  SiMui,
  SiAntdesign,
  SiDaisyui,
  SiGreensock,
  SiFramer,
  SiPusher,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiDocker,
  SiCpanel,
  SiPostman,
  SiVercel,
  SiGithubactions,
  SiShadcnui,
  SiTanstack,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaCloud } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { IoLogoCss3 } from "react-icons/io5";
import { RiNodejsFill } from "react-icons/ri";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Skills = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        headingRef.current,
        {
          y: 60,
          opacity: 0,
          rotate: -4,
          filter: "blur(12px)",
          transformOrigin: "left bottom",
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );
      gsap.fromTo(
        ".animate-content",
        { y: 40, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: IoLogoCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap 5", icon: SiBootstrap, color: "#7952B3" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Context API", icon: SiReact, color: "#61DAFB" },
        { name: "Zustand", icon: GiBearFace, color: "#f8f9fa" },
        { name: "RTK Query", icon: SiRedux, color: "#764ABC" },
        { name: "TanStack", icon: SiTanstack, color: "#FF4154" },
        { name: "REST APIs", icon: TbApi, color: "#009688" },
        { name: "shadcn/ui", icon: SiShadcnui, color: "#ffffff" },
        { name: "MUI", icon: SiMui, color: "#007FFF" },
        { name: "Ant Design", icon: SiAntdesign, color: "#0170FE" },
        { name: "daisyUI", icon: SiDaisyui, color: "#5A0EF8" },
        { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "Pusher", icon: SiPusher, color: "#300D4F" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node js", icon: RiNodejsFill, color: "#47A248" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Mongoose", icon: SiMongoose, color: "#880000" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "JWT", icon: SiJsonwebtokens, color: "#ffffff" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "CI/CD Pipelines", icon: SiGithubactions, color: "#2088FF" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "CloudPanel", icon: FaCloud, color: "#007BFF" },
        { name: "cPanel", icon: SiCpanel, color: "#FF6C2C" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      ],
    },
  ];

  return (
    <Container>
      <section ref={sectionRef} id="skills" className="pb-16 pt-7 lg:pt-10">
        <div className="flex justify-between items-end mb-8">
          <h2
            ref={headingRef}
            className="md:text-4xl text-2xl font-bold uppercase opacity-0"
          >
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#162D2D] shadow-sm backdrop-blur-lg rounded-xl p-4 lg:p-6 opacity-0 animate-content"
            >
              <h3 className="text-lg font-bold uppercase mb-2 pb-2 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 text-xs font-heading font-medium rounded-md px-2 py-1 capitalize bg-[#0A1A1A] text-white border border-[#294e4e] backdrop-blur-3xl transition-colors cursor-default"
                  >
                    <skill.icon size={14} color={skill.color} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
