export interface ProjectItem {
  _id: string;
  name: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  techStack: string[];
  status?: string;
  createdAt: string;
  updatedAt: string;
  // Backwards compatibility properties
  live_url?: string;
  repo?: string;
  stack?: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    _id: "6a7577d839d0fbe6f5ff338f",
    name: "Medlock Realty Agent Ecosystem Platform",
    description:
      "A modern real estate platform that streamlines agent recruitment, onboarding, transaction workflows, and client management for real estate agencies.",
    image:
      "https://res.cloudinary.com/divdyzsq2/image/upload/v1786083128/screen_ocsmc8.png",
    liveLink: "https://medlockrealty.com",
    githubLink:
      "https://github.com/karmakarCoder/medlockrealty-user-portal.git",
    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "shadcn",
      "Redux",
      "Axios",
      "Laraval",
      "Mysql",
      "Docusign",
    ],
    status: "PRODUCTION",
    createdAt: "2026-08-07T06:14:48.145+00:00",
    updatedAt: "2026-08-07T06:14:48.145+00:00",
    live_url: "https://medlockrealty.com",
    repo: "https://github.com/karmakarCoder/medlockrealty-user-portal.git",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
  },
  {
    _id: "7b8688e940e1ace7f600449a",
    name: "KTA+ Faith-Centered Education Ecosystem",
    description:
      "Comprehensive learning management system integrating live virtual classrooms, interactive faith-centered curriculum, course bundling, and community forums.",
    image:
      "https://res.cloudinary.com/divdyzsq2/image/upload/v1786097932/screen_nqc6jd.png",
    liveLink: "https://www.ktaplus.io",
    githubLink: "https://github.com/Ibrahim-247/kalekneale-react-frontend.git",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Tailwind CSS",
      "Stripe",
      "Zustand",
    ],
    status: "LIVE",
    createdAt: "2026-07-15T10:20:00.145+00:00",
    updatedAt: "2026-08-01T14:30:12.145+00:00",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Tailwind CSS",
      "Stripe",
      "Zustand",
    ],
  },
  {
    _id: "6a7577d839d0fbe6f5ff338f",
    name: "AmmoBrowser",
    description:
      "A full-stack ammunition inventory and management platform designed to simplify browsing, tracking, and managing ammunition-related data. Built with a modern UI, smooth user experience, and scalable backend architecture for efficient performance and administration.",
    image:
      "https://res.cloudinary.com/divdyzsq2/image/upload/v1787045900/screen_mrrt9v.png",
    liveLink: "https://ammobrowser.com",
    githubLink: "https://github.com/karmakarCoder/ammobrowser",
    techStack: [
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Laravel",
      "MySQL",
    ],
    status: "PRODUCTION",
    createdAt: "2026-08-07T06:14:48.145+00:00",
    updatedAt: "2026-08-07T06:14:48.145+00:00",
    stack: [
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Laravel",
      "MySQL",
    ],
  },
  {
    _id: "6a7577d839d0fbe6f5ff338f",
    name: "Res.Me",
    description:
      "A modern ATS-friendly resume builder that helps job seekers create professional, optimized resumes with ease. Features customizable resume templates, real-time editing, and export capabilities to ensure resumes are both visually appealing and compatible with applicant tracking systems.",
    image:
      "https://res.cloudinary.com/divdyzsq2/image/upload/v1787046325/screen_wvucqe.png",
    liveLink: "https://resme.cloud",
    githubLink:
      "https://github.com/Webgenius0/socialsolipsist-react-frontend.git",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux",
      "Lucide React",
    ],
    status: "PRODUCTION",
    createdAt: "2026-08-07T06:14:48.145+00:00",
    updatedAt: "2026-08-07T06:14:48.145+00:00",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux",
      "Lucide React",
    ],
  },
];
