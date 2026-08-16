"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../common/Container";

export const Contact = () => {
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
      id="contact"
      className=" border-t-2 py-10 md:py-16 border-brand-dark bg-brand-cream"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
          <div className="flex flex-col">
            <div>
              <h2 className="md:text-4xl text-2xl font-bold leading-[0.85] lg:mb-12 mb-8">
                LETS BUILD STUFF.
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {links?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <span className="size-6 flex items-center justify-center border border-brand-dark font-mono text-xs group-hover:bg-secondary transition-colors">
                    0{index + 1}
                  </span>
                  <Link
                    href={item?.url}
                    target="_blank"
                    className="font-heading font-semibold text-sm"
                  >
                    {item?.name}
                  </Link>
                </div>
              ))}

              <div className="flex items-center gap-4 group cursor-pointer">
                <span className="size-6 flex items-center justify-center border border-brand-dark font-mono text-xs group-hover:bg-secondary transition-colors">
                  04
                </span>
                <Link
                  href={"mailto:dev.rodro@gmail.com"}
                  target="_blank"
                  className="font-heading font-semibold text-sm"
                >
                  dev.rodro@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <form
              className="w-full max-w-md border-2 border-brand-dark p-4 lg:p-8 shadow-[7px_7px_0px_0px_rgba(26,26,26,1)] flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label className="text-[10px] font-heading font-bold tracking-widest uppercase opacity-60">
                  Subject Line
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full border-b-2 border-brand-dark py-2 focus:outline-none focus:border-y-emerald-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-heading font-bold tracking-widest uppercase opacity-60">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border-b-2 border-brand-dark py-2 focus:outline-none focus:border-y-emerald-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-heading font-bold tracking-widest uppercase opacity-60">
                  Project Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell me about your vision..."
                  className="w-full border-b-2 border-brand-dark py-2 focus:outline-none focus:border-y-emerald-400 transition-colors resize-none"
                />
              </div>

              <Button type="submit" className="w-full mt-4 bg-primary-text">
                TRANSMIT DATA
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
