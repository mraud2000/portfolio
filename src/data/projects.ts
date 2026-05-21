import portfolioImg from "@/assets/projects/portfolio.jpg";
import type { Bilingual } from "@/i18n/I18nContext";

export type Project = {
  slug: string;
  title: Bilingual;
  description: Bilingual;
  technologies: string[];
  image: string;
  demoLink: string;
  category: Bilingual;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: {
      fr: "Portfolio Professionnel Moderne",
      en: "Modern Professional Portfolio",
    },
    description: {
      fr: "Portfolio personnel moderne avec animations avancées, design premium, responsive design, sections dynamiques, présentation des compétences, projets et parcours académique.",
      en: "Modern personal portfolio with advanced animations, premium design, responsive layout, dynamic sections, and a complete showcase of skills, projects and academic journey.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    image: portfolioImg,
    demoLink: "/demo/portfolio",
    category: { fr: "Web", en: "Web" },
    gradient: "from-[oklch(0.55_0.22_265)] to-[oklch(0.65_0.20_300)]",
  },
  {
    slug: "banque-jsf",
    title: { fr: "Système Bancaire JSF", en: "JSF Banking System" },
    description: {
      fr: "Application bancaire complète : création de comptes, retraits, versements, historique et gestion clients.",
      en: "Complete banking application: account creation, withdrawals, deposits, history and customer management.",
    },
    technologies: ["Java", "JSF", "MySQL"],
    image: "",
    demoLink: "/demo/banque-jsf",
    category: { fr: "Web", en: "Web" },
    gradient: "from-[oklch(0.55_0.22_265)] to-[oklch(0.65_0.20_220)]",
  },
  {
    slug: "gestion-employes",
    title: { fr: "Gestion d'Employés", en: "Employee Management" },
    description: {
      fr: "Application desktop avec login sécurisé, gestion des employés, dashboard et interface personnalisée.",
      en: "Desktop application with secure login, employee management, dashboard and customized interface.",
    },
    technologies: ["Java Swing", "MySQL"],
    image: "",
    demoLink: "/demo/gestion-employes",
    category: { fr: "Desktop", en: "Desktop" },
    gradient: "from-[oklch(0.65_0.22_300)] to-[oklch(0.55_0.22_265)]",
  },
  {
    slug: "home-harmony",
    title: { fr: "Home Harmony Hub", en: "Home Harmony Hub" },
    description: {
      fr: "Plateforme web moderne avec frontend épuré, architecture propre et design responsive.",
      en: "Modern web platform with a clean frontend, solid architecture and responsive design.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "",
    demoLink: "/demo/home-harmony",
    category: { fr: "Web", en: "Web" },
    gradient: "from-[oklch(0.65_0.20_200)] to-[oklch(0.65_0.22_300)]",
  },
  {
    slug: "django-app",
    title: { fr: "Projet Django", en: "Django Project" },
    description: {
      fr: "Application backend avec système d'administration, authentification et gestion complète des données.",
      en: "Backend application with admin system, authentication and full data management.",
    },
    technologies: ["Django", "PostgreSQL"],
    image: "",
    demoLink: "/demo/django-app",
    category: { fr: "Backend", en: "Backend" },
    gradient: "from-[oklch(0.65_0.18_140)] to-[oklch(0.65_0.20_200)]",
  },
];
