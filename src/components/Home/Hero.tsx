"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import ScrollDownSvg from "../svg/scrollDownSvg";
import rodro from "../../assets/rodro.jpg";
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
      repeat: 2,
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

        if (isMobile) {
          tl.fromTo(
            profileBoxRef.current,
            { scale: 0.9, opacity: 0, y: 30 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              delay: "1",
            },
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
            )
            .fromTo(
              [textRef1.current, textRef2.current, textRef4.current],
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
              },
              "-=0.2",
            )
            .fromTo(
              boxTextRef.current,
              { scale: 0.8, opacity: 0, rotation: -5 },
              {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
              },
              "-=0.3",
            )
            .fromTo(
              dotsRef.current,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                stagger: 0.05,
                ease: "back.out(2)",
              },
              "-=0.2",
            )
            .fromTo(
              buttonsRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
              "-=0.2",
            );
        } else {
          tl.fromTo(
            [textRef1.current, textRef2.current, textRef4.current],
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            },
          )
            .fromTo(
              boxTextRef.current,
              { scale: 0.8, opacity: 0, rotation: -5 },
              {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
              },
              "-=0.3",
            )
            .fromTo(
              dotsRef.current,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                stagger: 0.05,
                ease: "back.out(2)",
              },
              "-=0.2",
            )
            .fromTo(
              buttonsRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
              "-=0.2",
            )
            .fromTo(
              profileBoxRef.current,
              { scale: 0.9, opacity: 0, y: 30 },
              { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
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
        }
      },
    );
  }, []);

  return (
    <section className="relative pb-10 pt-16 lg:pt-0 lg:pb-0 lg:min-h-screen flex flex-col overflow-hidden justify-center items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl leading-none font-bold uppercase md:text-6xl md:mb-8 mb-5 tracking-tighter">
              <div ref={textRef1}>
                HEy
                <span
                  ref={handRef}
                  className="inline-block origin-bottom-right"
                >
                  👋
                </span>
              </div>
              <div ref={textRef2}>this is </div>
              <div className="inline-block relative">
                <div
                  ref={addToDotsRef}
                  className="size-1.5 bg-secondary absolute -top-0.5 -left-1"
                ></div>
                <div
                  ref={addToDotsRef}
                  className="size-1.5 bg-secondary absolute -top-0.5 -right-1"
                ></div>
                <div
                  ref={addToDotsRef}
                  className="size-1.5 bg-secondary absolute -bottom-0.5 -right-1"
                ></div>
                <div
                  ref={addToDotsRef}
                  className="size-1.5 bg-secondary absolute -bottom-0.5 -left-1"
                ></div>
                <span
                  ref={boxTextRef}
                  className="bg-primary border-secondary border-2 px-1 inline-block"
                >
                  your rodro
                </span>
              </div>
              <div ref={textRef4}>karmakar</div>
            </h1>

            <div
              ref={buttonsRef}
              className="flex items-center gap-2 md:gap-6 mt-3 sm:mt-4 2xl:mt-12"
            >
              <Link href="#work">
                <Button>VIEW PROJECTS</Button>
              </Link>

              <div className="flex items-center text-primary-text gap-2 text-xs font-bold tracking-widest uppercase">
                <ScrollDownSvg />
                <span className="hidden sm:block">SCROLL TO EXPLORE</span>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last flex justify-center lg:justify-end">
            <div
              ref={profileBoxRef}
              className="relative w-60 h-65 md:w-70 md:h-90 border-2 border-brand-dark brutalist-shadow bg-zinc-200"
            >
              <Image
                src={rodro}
                alt="Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div
              ref={decoBoxRef}
              className="absolute -top-4 -right-4 w-12 h-12 bg-secondary brutalist-border -z-10 md:block hidden"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
