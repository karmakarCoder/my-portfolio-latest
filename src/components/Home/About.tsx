"use client";
import Container from "../common/Container";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedNumber = ({ value }: { value: string }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const initialString = value.replace(/\d+/, (match) =>
    "0".padStart(match.length, "0"),
  );

  useGSAP(() => {
    const match = value.match(/(\D*)(\d+)(\D*)/);
    if (!match) return;

    const prefix = match[1] || "";
    const targetNum = parseInt(match[2], 10);
    const suffix = match[3] || "";
    const padLength = match[2].length;

    let current = 0;
    let currentString = initialString;

    const tick = () => {
      if (current < targetNum) {
        current += Math.max(1, Math.ceil((targetNum - current) / 4));
        if (current > targetNum) current = targetNum;

        const paddedNum = current.toString().padStart(padLength, "0");
        const nextString = prefix + paddedNum + suffix;

        let hasChanges = false;

        for (let i = 0; i < nextString.length; i++) {
          if (currentString[i] !== nextString[i]) {
            hasChanges = true;
            const charSpan = charsRef.current[i];
            if (charSpan) {
              gsap.to(charSpan, {
                y: 15,
                opacity: 0,
                filter: "blur(4px)",
                duration: 0.1,
                ease: "easeInSine",
                onComplete: () => {
                  charSpan.innerText = nextString[i];
                  gsap.fromTo(
                    charSpan,
                    { y: -15, opacity: 0, filter: "blur(4px)" },
                    {
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      duration: 0.1,
                      ease: "easeInSine",
                    },
                  );
                },
              });
            }
          }
        }

        currentString = nextString;

        if (hasChanges) {
          gsap.delayedCall(0.25, tick);
        } else {
          tick();
        }
      }
    };

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 90%",
      once: true,
      onEnter: () => {
        tick();
      },
    });
  }, [value, initialString]);

  return (
    <span
      ref={containerRef}
      className="text-3xl font-heading font-black bg-transparent inline-flex overflow-hidden tabular-nums"
    >
      {initialString.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) charsRef.current[index] = el;
          }}
          className="inline-block"
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export const About = () => {
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
          stagger: 0.1,
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

  const stats = [
    { value: "03+", label: "years of experience" },
    { value: "30", label: "projects shipped", highlight: true },
    { value: "96%", label: "lighthouse score" },
    { value: "28+", label: "client satisfaction" },
  ];

  return (
    <Container>
      <section
        ref={sectionRef}
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 lg:gap-0 lg:min-h-screen"
      >
        <div className="flex flex-col lg:justify-center">
          <span className="bg-primary text-white text-xs font-medium px-2 py-0.5 w-fit mb-6 tracking-widest uppercase opacity-0 animate-content">
            about
          </span>
          <h2
            ref={headingRef}
            className="text-2xl uppercase md:text-4xl mb-4 leading-[1.1] font-bold opacity-0"
          >
            Frontend Focused <br /> FULL-STACK developer & ux enthusiast.
          </h2>
          <p className="font-sans text-sm md:text-base font-light max-w-xl opacity-0 animate-content">
            I build software that thinks and acts. I’m a Full-Stack Developer
            specializing in the intersection of web development, AI, and
            automation. I combine robust coding with n8n and AI to create
            systems that don't just look good, but actually run themselves. My
            goal is simple: Build apps that eliminate manual work and scale
            effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-2 h-[300px] lg:h-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-3 flex border border-collapse flex-col text-center items-center text-primary-text justify-center gap-2 opacity-0 animate-content
              
              `}
            >
              <AnimatedNumber value={stat.value} />
              <span className="text-xs font-normal capitalize bg-transparent">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
