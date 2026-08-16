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
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  const menu = [
    { name: "work", path: "#work" },
    { name: "about", path: "#about" },
    { name: "feedback", path: "#testimonial" },
    { name: "contact", path: "#contact" },
  ];

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.inOut" })
        .from(".mobile-menu-item", {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        });
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
      <nav className="py-3 border-b bg-primary/80 backdrop-blur-lg border-brand-dark bg-brand-cream sticky top-0 z-50">
        <Container>
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-8 uppercase text-primary-text font-semibold text-xs tracking-widest">
                {menu?.map((item, index) => {
                  const active = activepath === item.path;
                  return (
                    <Link
                      onClick={() => setactivepath(item?.path)}
                      key={index}
                      href={item.path}
                      replace
                      className={`hover:text-primary-text transition-colors relative after:w-full after:bg-primary-text after:absolute after:bottom-0 after:left-0 after:h-0.5  after:transition-transform ${active ? "after:scale-x-100" : "after:scale-x-0"}`}
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
                >
                  <Button size="sm">
                    <DocumentSvg /> Resume
                  </Button>
                </Link>

                <Button
                  size="sm"
                  className="px-1 rounded-sm md:hidden z-60"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={20} /> : <MenuSvg />}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center translate-x-full md:hidden"
      >
        <div className="flex flex-col items-center gap-5 text-2xl font-bold uppercase tracking-widest text-primary-text">
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
