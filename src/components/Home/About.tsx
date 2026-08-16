import Container from "../common/Container";

export const About = () => {
  const stats = [
    { value: "03+", label: "YEARS OF EXPERIENCE" },
    { value: "30", label: "PROJECTS SHIPPED", highlight: true },
    { value: "96%", label: "LIGHTHOUSE SCORE" },
    { value: "28+", label: "client satisfaction" },
  ];

  return (
    <Container>
      <section
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 min-h-screen"
      >
        <div className="flex flex-col justify-center lg:border-r-2">
          <span className="bg-red-500 text-primary text-xs font-medium px-2 py-0.5 w-fit mb-6 tracking-widest uppercase">
            about
          </span>
          <h2 className="text-2xl uppercase md:text-4xl mb-4 leading-[1.1] font-bold">
            FULL-STACK developer <br />& SYSTEM DESIGNER.
          </h2>
          <p className="font-sans text-base text-zinc-600 max-w-xl">
            I build software that thinks and acts. I’m a Full-Stack Developer
            specializing in the intersection of web development, AI, and
            automation. I combine robust coding with n8n and AI to create
            systems that don't just look good, but actually run themselves. My
            goal is simple: Build apps that eliminate manual work and scale
            effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-2 border-y-2 border-l-2 lg:border-l-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-3 flex flex-col text-center items-center text-primary-text justify-center border-r-2 gap-2 border-brand-dark 
              ${i % 2 === 0 ? "border-r-2" : ""} 
              ${i < 2 ? "border-b-2" : ""}
              ${stat.highlight ? "bg-secondary" : "bg-transparent"}
            `}
            >
              <span className="text-3xl font-heading font-black bg-transparent">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-widest opacity-60 uppercase bg-transparent">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
