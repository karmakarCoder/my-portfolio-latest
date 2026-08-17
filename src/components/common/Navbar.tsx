"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Container from "./Container";
import { Button } from "../ui/button";
import MenuSvg from "../svg/MenuSvg";
import DocumentSvg from "../svg/DocumentSvg";
import { X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Navbar = () => {
  const [activepath, setactivepath] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navLayer1Ref = useRef<HTMLDivElement>(null);
  const navLayer2Ref = useRef<HTMLDivElement>(null);
  const navBgRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  const menu = [
    { name: "work", path: "#work" },
    { name: "about", path: "#about" },
    { name: "feedback", path: "#testimonial" },
    { name: "contact", path: "#contact" },
  ];

  useGSAP(() => {
    const navTl = gsap.timeline({ delay: 0.1 });
    navTl
      .to([navLayer1Ref.current, navLayer2Ref.current, navBgRef.current], {
        y: 0,
        duration: 0.6,
        ease: "power3.inOut",
        stagger: 0.3,
      })
      .fromTo(
        ".desktop-menu-item",
        {
          y: -20,
          opacity: 0,
          rotate: -4,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          filter: "blur(0px)",
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2",
      );
  });

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to([layer1Ref.current, layer2Ref.current, menuRef.current], {
          x: 0,
          duration: 0.6,
          ease: "power4.inOut",
          stagger: 0.1,
        })
        .from(
          ".mobile-menu-item",
          {
            y: 40,
            opacity: 0,
            rotate: -4,
            filter: "blur(8px)",
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.5)",
          },
          "-=0.3",
        );
    },
    { scope: menuRef },
  );

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current?.reverse();
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="py-2  sticky top-0 z-50 overflow-hidden relative">
        <div
          ref={navLayer1Ref}
          className="absolute inset-0 bg-brand-dark -translate-y-110 pointer-events-none"
        />
        <div
          ref={navLayer2Ref}
          className="absolute inset-0 bg-primary -translate-y-110 pointer-events-none"
        />
        <div
          ref={navBgRef}
          className="absolute inset-0 bg-primary -translate-y-110 pointer-events-none"
        />

        <div className="relative z-10">
          <Container>
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-8 capitalize text-black font-semibold text-sm">
                  {menu?.map((item, index) => {
                    const active = activepath === item.path;
                    return (
                      <Link
                        onClick={() => setactivepath(item?.path)}
                        key={index}
                        href={item.path}
                        replace
                        className={`desktop-menu-item opacity-0 hover:text-primary-text transition-colors relative after:w-full after:bg-primary-text after:absolute after:bottom-0 after:left-0 after:h-0.5  after:transition-transform ${active ? "after:scale-x-100" : "after:scale-x-0"}`}
                      >
                        {item?.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://docs.google.com/document/d/1gLgouJVGiYar-1pIrTt1gD3A83ZF6nM-FMT8J8cyPTs/edit?tab=t.0"
                    target="_blank"
                    className="desktop-menu-item opacity-0"
                  >
                    <Button size="sm">
                      <DocumentSvg /> Resume
                    </Button>
                  </Link>

                  <Button
                    size="sm"
                    className="desktop-menu-item opacity-0 px-1 rounded-sm md:hidden z-60"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? <X className="size-6" /> : <MenuSvg />}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </nav>

      {/* Mobile Menu Overlay Curtains */}
      <div
        ref={layer1Ref}
        className="fixed inset-0 bg-brand-dark z-[40] translate-x-full md:hidden pointer-events-none"
      />
      <div
        ref={layer2Ref}
        className="fixed inset-0 bg-primary z-[41] translate-x-full md:hidden pointer-events-none"
      />

      {/* Main Menu Panel */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-white z-[42] flex flex-col items-center justify-center translate-x-full md:hidden"
      >
        <div className="flex flex-col items-center gap-5 text-2xl capitalize font-semibold text-black">
          {menu.map((item, i) => {
            const active = activepath === item.path;
            return (
              <Link
                key={i}
                href={item.path}
                className={`mobile-menu-item relative after:w-full after:bg-primary-text after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:transition-transform ${active ? "after:scale-x-100" : "after:scale-x-0"}`}
                onClick={() => {
                  setactivepath(item.path);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
