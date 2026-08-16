import Container from "../common/Container";

export const Skills = () => {
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
      <section id="skills" className="pb-16 pt-7 lg:pt-10">
        <div className="flex justify-between items-end mb-8">
          <h2 className="md:text-4xl text-2xl font-bold uppercase">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border-2 border-brand-dark bg-zinc-50 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] p-4 lg:p-6"
            >
              <h3 className="text-lg font-bold uppercase mb-6 border-b-2 border-brand-dark pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-heading font-medium border border-brand-dark px-2 py-1 uppercase hover:bg-primary-text hover:text-primary transition-colors cursor-default"
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
