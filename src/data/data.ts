import php8APIPlatformContent from "./articles/php8-symfony-api-platform.md?raw";
import tailwindContent from "./articles/tailwind-css-20-80.md?raw";
import workflowAgileDevSoloContent from "./articles/workflow-agile-dev-solo-github-actions.md?raw";

export const techStack = [
     "React",
     "TypeScript",
     "Symfony",
     "PHP8",
     "Flutter",
     "Node.js",
     "React Native",
     "PostgreSQL",
     "Figma",
     "Git",
     "Express",
     "MySQL",
     "PostgreSQL",
     "Firebase",
     "Next.js",
     "Tailwind",
];

export const stats = [
     { value: "Bachelor", label: "Formation actuelle", sub: "Développement Full-Stack @ IPSSI" },
     { value: "3", label: "Stages réalisés", sub: "OHana & ONRDH" },
     { value: "Full-Stack", label: "Orientation", sub: "Web · Mobile · Back-End" },
     { value: "Mastère", label: "Objectif Bac+5", sub: "Big Data & Intelligence Artificielle" },
];

export const timeline: TimelineEntry[] = [
     {
          year: "2022",
          period: "Sept 2022",
          title: "Début Bachelor Développeur Full-Stack",
          organization: "Institut IPSSI — Paris",
          description:
               "Intégration du Bachelor 3 ans spécialisé en développement logiciel Full-Stack. Formation intensive couvrant le développement web, mobile et les bases de données.",
          tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Git"],
          type: "education",
     },
     {
          year: "2023",
          period: "Avr – Juin 2023",
          title: "Stage Développeur Web",
          organization: "OHana Entreprise — Paris",
          description:
               "Développement de fonctionnalités pour une application web interne de gestion RH. Refonte du module de reporting avec des tableaux de bord interactifs.",
          tech: ["Vue.js", "Laravel", "MySQL", "Figma"],
          type: "work",
     },
     {
          year: "2024",
          period: "Avr – Juin 2024",
          title: "Stage Développeur Full-Stack",
          organization: "ONRDH — Paris",
          description:
               "Conception et développement d'une API REST pour le traitement et la visualisation de données statistiques. Mise en place d'un pipeline ETL automatisé.",
          tech: ["Python", "FastAPI", "PostgreSQL", "React", "Docker"],
          type: "work",
     },
     {
          year: "2025",
          period: "Juin 2025",
          title: "Obtention du Bachelor Full-Stack",
          organization: "Institut IPSSI — Paris",
          description:
               "Diplomé du Bachelor Développeur Full-Stack avec mention. Projet de fin d'études : développement d'une plateforme SaaS de gestion de contenu collaborative.",
          tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
          type: "education",
     },
     {
          year: "2028",
          period: "Sept 2028",
          title: "Obtention du Mastère Big Data & IA",
          organization: "En recherche d'alternance",
          description:
               "Poursuite des études en Mastère spécialisé Big Data & Intelligence Artificielle. Recherche active d'une entreprise partenaire en alternance pour approfondir Data Engineering et ML.",
          tech: ["Python", "Machine Learning", "Spark", "TensorFlow", "Cloud"],
          type: "goal",
     },
];

export interface TimelineEntry {
     year: string;
     period: string;
     title: string;
     organization: string;
     description: string;
     tech: string[];
     type: "education" | "work" | "goal";
}

export const articles: Article[] = [
     {
          id: "tailwind-css-20-80",
          title: "Tailwind CSS : les 20 % à connaître pour maîtriser 80 % du framework",
          date: "2026-08-11",
          readingTime: 10,
          categories: ["Front-End"],
          summary: "Découvrez les fondamentaux de Tailwind CSS, les concepts essentiels à maîtriser avec React, ses avantages face au CSS classique et les enjeux actuels de Tailwind Labs face à l’essor de l’IA.",
          imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Dc8tcF_RAaw0DWiK",
          tags: ["TailwindCSS", "React", "TypeScript"],
          content: tailwindContent,
     },
     {
          id: "php8-symfony-api-platform-rest-api",
          title: "Créer rapidement une API REST avec PHP 8, Symfony et API Platform",
          date: "2026-08-14",
          readingTime: 10,
          categories: ["Backend", "API", "Symfony"],
          summary: "Découvrez comment construire rapidement une API REST fiable et sécurisée avec PHP 8, Symfony et API Platform, puis l'exposer à un front-end React grâce à HTTP et JSON.",
          tags: [
               "PHP 8",
               "Symfony",
               "API Platform",
               "REST API",
               "Backend",
               "Doctrine",
               "Security",
               "React",
               "TypeScript",
               "CORS",
          ],
          imageUrl: "https://api-platform.com/docs/images/opengraph-image.png",
          content: php8APIPlatformContent,
     },
     {
          id: "agile-workflow-developer-solo-github",
          title: "Workflow Agile minimal pour un développeur solo : s'organiser avec GitHub",
          date: "2026-08-09",
          readingTime: 12,
          categories: ["Development", "Productivity", "DevOps"],
          summary: "Comment mettre en place un workflow agile minimal pour travailler efficacement seul sur ses projets personnels, en utilisant GitHub Issues, branches, Pull Requests, GitHub Actions et le déploiement automatisé.",
          tags: [
               "GitHub",
               "GitHub Actions",
               "Git",
               "Agile",
               "Developer Workflow",
               "Productivity",
               "CI/CD",
               "DevOps",
               "Pull Request",
               "Issues",
               "Continuous Deployment",
          ],
          imageUrl:
               "https://cdn.shopaccino.com/igmguru/products/github-actions-course-5545043380044910m-59422727046295_l.webp?v=548",
          content: workflowAgileDevSoloContent,
     },
];

export interface Article {
     id: string;
     title: string;
     date: string;
     readingTime: number;
     categories: string[];
     summary: string;
     content: string;
     imageUrl: string;
     tags: string[];
}
