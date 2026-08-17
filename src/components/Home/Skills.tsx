"use client";
import Container from "../common/Container";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap 5",
        "Redux",
        "Context API",
        "Zustand",
        "RTK Query",
        "REST APIs",
        "shadcn/ui",
        "MUI",
        "GSAP",
        "Framer Motion",
        "Pusher",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Express.js",
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
        "Prisma",
        "Firebase",
        "JWT",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "CI/CD Pipelines",
        "Docker",
        "CloudPanel",
        "cPanel",
        "Postman",
        "Vercel",
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
              className="bg-zinc-50 shadow-md rounded-xl p-4 lg:p-6 opacity-0 animate-content"
            >
              <h3 className="text-lg font-bold uppercase mb-2 pb-2 text-black">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-heading font-medium rounded-md px-2 py-1 capitalize bg-primary text-black transition-colors cursor-default"
                  >
                    {skill}
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
