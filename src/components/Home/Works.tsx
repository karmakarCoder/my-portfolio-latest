"use client";
import { useProjects } from "@/hooks/useProjects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GithubSvg from "../svg/GithubSvg";
import Container from "../common/Container";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Works = () => {
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

  const { projectsQuery } = useProjects();

  return (
    <Container>
      <section ref={sectionRef} id="work" className="lg:py-16">
        <div className="flex justify-between items-end mb-12">
          <h2
            ref={headingRef}
            className="md:text-4xl text-2xl font-bold opacity-0"
          >
            SELECTED WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsQuery?.isPending
            ? [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="relative animate-pulse shadow-lg rounded-xl overflow-hidden"
                >
                  <div className="relative h-64 md:h-80 overflow-hidden bg-zinc-200">
                    <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-size-[20px_20px] opacity-10" />
                    <div className="absolute top-4 right-4 h-5 w-16 bg-zinc-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-8 w-48 bg-zinc-300" />
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-zinc-300" />
                        <div className="h-5 w-5 rounded-full bg-zinc-300" />
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 w-full bg-zinc-200" />
                      <div className="h-4 w-4/5 bg-zinc-200" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="h-7 w-16 border-3 border-zinc-300 bg-zinc-200"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))
            : projectsQuery?.data?.map((project, i) => {
                const githubUrl = project.githubLink || project.repo;
                const liveUrl = project.liveLink || project.live_url;
                const tags = project.techStack || project.stack || [];
                const statusText = project.status || "PRODUCTION";

                return (
                  <div
                    key={project._id || i}
                    className="group relative shadow-lg rounded-md overflow-hidden opacity-0 animate-content"
                  >
                    {project.image ? (
                      <div className="relative h-40 lg:h-60 overflow-hidden bg-zinc-100">
                        <Image
                          src={project?.image}
                          alt={project?.name || "Project preview"}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover"
                        />

                        
                      </div>
                    ) : (
                      <div className="h-64 md:h-80 flex items-center justify-center relative overflow-hidden bg-zinc-100">
                        <span className="text-[100px] font-black opacity-10 absolute -bottom-10 -right-10">
                          {i + 1}
                        </span>
                        <span className="absolute top-4 right-4 bg-blue-600 text-primary text-[10px] px-2 py-1 z-20 uppercase">
                          {statusText}
                        </span>
                      </div>
                    )}

                    <div className="lg:p-6 p-3 bg-gray-900/40 backdrop-blur-lg">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg lg:text-xl leading-6 mb-4 font-semibold inline-block px-1">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 group-hover:text-secondary">
                          {githubUrl && (
                            <Link href={githubUrl} target="_blank">
                              <GithubSvg />
                            </Link>
                          )}
                          {liveUrl ? (
                            <Link href={liveUrl} target="_blank">
                              <ExternalLink
                                size={18}
                                className="cursor-pointer text-gray-400 hover:text-secondary"
                              />
                            </Link>
                          ) : (
                            <ExternalLink
                              size={20}
                              className="cursor-pointer text-gray-400"
                            />
                          )}
                        </div>
                      </div>

                      <p className="font-sans text-xs font-medium text-zinc-400 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-gray-950 font-normal rounded-md px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </section>
    </Container>
  );
};
