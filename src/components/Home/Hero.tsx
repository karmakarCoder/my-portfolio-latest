"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import ScrollDownSvg from "../svg/scrollDownSvg";
import rodro from "../../assets/foto.jpg";
import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../common/Container";
import gsap from "gsap";

export const Hero = () => {
  const handRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef4 = useRef(null);
  const boxTextRef = useRef(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonsRef = useRef(null);
  const profileBoxRef = useRef(null);
  const decoBoxRef = useRef(null);

  const addToDotsRef = (el: HTMLDivElement | null) => {
    if (el && !dotsRef.current.includes(el)) {
      dotsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.to(handRef.current, {
      rotation: 20,
      transformOrigin: "bottom right",
      yoyo: true,
      repeat: 3,
      duration: 0.8,
      ease: "sine.inOut",
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
      },
      (context) => {
        const { isMobile } = context.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
        };

        const tl = gsap.timeline();

        tl.fromTo(
          [textRef1.current, textRef2.current, textRef4.current],
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
            stagger: 0.15,
            ease: "power4.out",
          },
        )
          .fromTo(
            boxTextRef.current,
            { scale: 0.5, opacity: 0, rotation: -15, filter: "blur(10px)" },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              filter: "blur(0px)",
              duration: 0.7,
              ease: "back.out(2)",
            },
            "-=0.4",
          )
          .fromTo(
            dotsRef.current,
            { scale: 0, opacity: 0, rotation: 90 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: "back.out(2.5)",
            },
            "-=0.3",
          )
          .fromTo(
            buttonsRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.2",
          )
          .fromTo(
            profileBoxRef.current,
            { scale: 0.9, opacity: 0, y: 30, filter: "blur(15px)" },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.6",
          )
          .fromTo(
            decoBoxRef.current,
            { x: -30, y: 30, opacity: 0, rotation: -45 },
            {
              x: 0,
              y: 0,
              opacity: 1,
              rotation: 0,
              duration: 0.6,
              ease: "back.out(1.5)",
            },
            "-=0.5",
          );
      },
    );
  }, []);

  return (
    <section className="relative pb-10 pt-10 lg:pt-0 lg:pb-0 lg:min-h-screen flex flex-col overflow-hidden justify-center items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl leading-none font-bold uppercase md:text-6xl md:mb-8 mb-5 tracking-tight">
              <div ref={textRef1} className="opacity-0">
                HEy
                <span
                  ref={handRef}
                  className="inline-block origin-bottom-right"
                >
                  👋
                </span>
              </div>
              <div ref={textRef2} className="opacity-0">
                this is{" "}
              </div>
              <div className="inline-block relative">
                <div
                  ref={addToDotsRef}
                  className="size-1.5 bg-primary absolute -top-0.5 -left-1 opacity-0"
                ></div>
                <div
                  ref={addToDotsRef}
                  className="size-1.5 bg-primary absolute -top-0.5 -right-1 opacity-0"
                ></div>
                <div
                  ref={addToDotsRef}
                  className="size-1.5 bg-primary absolute -bottom-0.5 -right-1 opacity-0"
                ></div>
                <div
                  ref={addToDotsRef}
                  className="size-1.5 bg-primary absolute -bottom-0.5 -left-1 opacity-0"
                ></div>
                <span
                  ref={boxTextRef}
                  className="bg-primary px-2 py-0.5 inline-block opacity-0 text-black"
                >
                  your rodro
                </span>
              </div>
              <div ref={textRef4} className="opacity-0">
                karmakar
              </div>
            </h1>

            <div
              ref={buttonsRef}
              className="flex items-center gap-2 md:gap-6 mt-3 sm:mt-4 2xl:mt-12 opacity-0"
            >
              <Link href="#work">
                <Button>View projects</Button>
              </Link>

              <div className="flex items-center text-primary-text gap-2 text-sm font-medium">
                <ScrollDownSvg />
                <span className="hidden sm:block">Scroll to explore</span>
              </div>
            </div>
          </div>

          <div className="relative order-last flex justify-center lg:justify-end">
            <div
              ref={profileBoxRef}
              className="relative w-60 h-65 md:w-70 md:h-90 shadow-xl overflow-hidden md:rounded-none rounded-lg bg-zinc-200 opacity-0"
            >
              <Image
                src={rodro}
                alt="Profile"
                fill
                className="object-cover hover:brightness-115 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
