export const Marquee = () => {
  const techs = [
    "REACT",
    "TYPESCRIPT",
    "NODE.JS",
    "POSTGRESQL",
    "NEXT.JS",
    "TAILWIND",
    "DOCKER",
    "N8N",
    "AI",
    "AWS",
    "PYTHON",
    "RUST",
  ];

  return (
    <div className="bg-primary-text text-primary py-2 md:py-3 overflow-hidden">
      <div className="marquee-content whitespace-nowrap bg-primary-text">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 mx-4 bg-primary-text">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-xl md:text-2xl font-heading font-medium flex bg-primary-text items-center gap-4"
              >
                {tech} <span className="text-secondary bg-primary-text">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
