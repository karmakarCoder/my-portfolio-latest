"use client";
import Container from "../common/Container";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Education = () => {
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
        ".animate-edu-content",
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

  const educationData = [
    {
      date: "2026 - present",
      title: "Bachelor of Business Administration (BBA)",
      institution: "university of scholars",
    },
  ];

  return (
    <Container>
      <section ref={sectionRef} id="education" className="md:py-16 py-10">
        <div className="flex justify-between items-end mb-12">
          <h2
            ref={headingRef}
            className="md:text-4xl text-2xl font-bold uppercase opacity-0 flex items-center gap-4"
          >
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-edu-content">
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5  sm:before:block before:hidden before:bg-gradient-to-b before:from-transparent before:via-[#294e4e] before:to-transparent">
            {educationData.map((item: any, idx: number) => (
              <div
                key={idx}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline dot */}
                <div className="sm:flex items-center hidden justify-center w-10 h-10 rounded-full border-4 border-[#0A1A1A] bg-primary text-[#0A1A1A] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Card */}
                <div className="sm:w-[calc(100%-4rem)] w-full md:w-[calc(50%-2.5rem)] bg-[#162D2D] shadow-sm backdrop-blur-lg rounded-xl p-5 border border-[#294e4e] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="text-primary text-xs font-bold tracking-wider uppercase">
                      {item.date}
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <span className="text-sm font-medium capitalize text-gray-300">
                      {item.institution}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-sans mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
