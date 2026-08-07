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
    live_url: "https://ktaplus-education.vercel.app",
    repo: "https://github.com/karmakarCoder/kta-education-platform.git",
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
    _id: "8c9799fa51f2bdf8a71155ab",
    name: "ApexFlow SaaS Analytics & Workflow Hub",
    description:
      "Real-time analytics engine and workflow automation suite giving SaaS companies granular insights into user behavior, conversion funnels, and subscription metrics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://apexflow-analytics.com",
    githubLink: "https://github.com/karmakarCoder/apexflow-analytics-hub.git",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Apache Kafka",
      "ClickHouse",
      "Chart.js",
      "Tailwind CSS",
      "Redis",
    ],
    status: "PRODUCTION",
    createdAt: "2026-06-10T08:12:30.145+00:00",
    updatedAt: "2026-07-28T09:45:00.145+00:00",
    live_url: "https://apexflow-analytics.com",
    repo: "https://github.com/karmakarCoder/apexflow-analytics-hub.git",
    stack: [
      "React",
      "Node.js",
      "Express",
      "Apache Kafka",
      "ClickHouse",
      "Chart.js",
      "Tailwind CSS",
      "Redis",
    ],
  },
  {
    _id: "9d0800ab6203cee9b82266bc",
    name: "DevPulse AI Code Review Assistant",
    description:
      "Automated code quality & security audit platform that integrates with GitHub webhooks to analyze pull requests using LLMs and provide inline suggestions.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://devpulse-ai.io",
    githubLink: "https://github.com/karmakarCoder/devpulse-ai-bot.git",
    techStack: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "React",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "GitHub API",
    ],
    status: "BETA",
    createdAt: "2026-05-20T11:00:00.145+00:00",
    updatedAt: "2026-07-19T16:20:10.145+00:00",
    live_url: "https://devpulse-ai.io",
    repo: "https://github.com/karmakarCoder/devpulse-ai-bot.git",
    stack: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "React",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "GitHub API",
    ],
  },
  {
    _id: "0e1911bc7314dfe0c93377cd",
    name: "OmniPay Decentralized Payment Gateway",
    description:
      "Multi-chain crypto and fiat payment gateway enabling instant merchant settlement with automated invoicing, webhooks, and fraud protection.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://omnipay-gateway.network",
    githubLink: "https://github.com/karmakarCoder/omnipay-merchant-core.git",
    techStack: [
      "Solidity",
      "Ethers.js",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
      "Web3Modal",
    ],
    status: "PRODUCTION",
    createdAt: "2026-04-12T14:45:00.145+00:00",
    updatedAt: "2026-06-30T18:10:00.145+00:00",
    live_url: "https://omnipay-gateway.network",
    repo: "https://github.com/karmakarCoder/omnipay-merchant-core.git",
    stack: [
      "Solidity",
      "Ethers.js",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
      "Web3Modal",
    ],
  },
  {
    _id: "1f2022cd8425eaf1da4488de",
    name: "UrbanNest Smart Property Rental Portal",
    description:
      "End-to-end tenant screening, digital lease signing, maintenance ticketing, and smart IoT keyless entry management system for property managers.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    liveLink: "https://urbannest-rentals.com",
    githubLink: "https://github.com/karmakarCoder/urbannest-rental-portal.git",
    techStack: [
      "Vue 3",
      "Nuxt.js",
      "GraphQL",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "Stripe Connect",
    ],
    status: "LIVE",
    createdAt: "2026-03-05T09:15:00.145+00:00",
    updatedAt: "2026-05-18T12:00:00.145+00:00",
    live_url: "https://urbannest-rentals.com",
    repo: "https://github.com/karmakarCoder/urbannest-rental-portal.git",
    stack: [
      "Vue 3",
      "Nuxt.js",
      "GraphQL",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "Stripe Connect",
    ],
  },
];
