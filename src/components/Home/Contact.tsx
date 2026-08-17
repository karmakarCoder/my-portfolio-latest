"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../common/Container";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Contact = () => {
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

  const links = [
    {
      name: "github.com/karmakarCoder",
      url: "https://github.com/karmakarCoder",
    },
    {
      name: "linkedin.com/in/rodrokarmakar",
      url: "https://www.linkedin.com/in/rodrokarmakar",
    },
    {
      name: "medium.com/@dev.rodro",
      url: "https://medium.com/@dev.rodro",
    },
  ];
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-10 md:py-16 bg-brand-cream"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
          <div className="flex flex-col">
            <div>
              <h2
                ref={headingRef}
                className="md:text-4xl text-2xl font-bold leading-[0.85] lg:mb-12 mb-8 opacity-0"
              >
                LETS BUILD STUFF.
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {links?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group cursor-pointer opacity-0 animate-content"
                >
                  <span className="size-6 flex items-center justify-center bg-zinc-200 rounded text-black font-mono text-xs group-hover:bg-secondary transition-colors">
                    0{index + 1}
                  </span>
                  <Link
                    href={item?.url}
                    target="_blank"
                    className="font-heading font-medium text-sm"
                  >
                    {item?.name}
                  </Link>
                </div>
              ))}

              <div className="flex items-center gap-4 group cursor-pointer opacity-0 animate-content">
                <span className="size-6 flex items-center justify-center bg-zinc-200 rounded text-black font-mono text-xs group-hover:bg-secondary transition-colors">
                  04
                </span>
                <Link
                  href={"mailto:dev.rodro@gmail.com"}
                  target="_blank"
                  className="font-heading font-medium text-sm"
                >
                  dev.rodro@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <form
              className="w-full max-w-md bg-zinc-700/40 backdrop-blur-lg text-white p-4 lg:p-8 shadow-xl rounded-xl flex flex-col gap-4 opacity-0 animate-content"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label className="text-xs font-heading font-normal tracking-widest opacity-60">
                  Subject Line
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full border-b py-2 placeholder:text-sm focus:outline-none border-gray-600 focus:border-emerald-400 transition-colors bg-transparent text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-heading font-normal tracking-widest opacity-60">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border-b py-2 placeholder:text-sm focus:outline-none border-gray-600 focus:border-emerald-400 transition-colors bg-transparent text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-heading font-normal tracking-widest opacity-60">
                  Project Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell me about your vision..."
                  className="w-full placeholder:text-sm border-b py-2 focus:outline-none border-gray-600 focus:border-emerald-400 transition-colors resize-none bg-transparent text-white"
                />
              </div>

              <Button type="submit" className="w-full mt-4">
                Transmit Data
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
