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
          id: "react-19-nouveautes",
          title: "React 19 : Les nouveautés qui changent tout",
          date: "2024-11-12",
          readTime: 8,
          categories: ["React", "JavaScript"],
          summary: "Découvrez les fonctionnalités majeures de React 19 : Actions, hooks useFormStatus, useOptimistic, use() et la nouvelle gestion des ressources.",
          imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&auto=format",
          techs: ["React", "TypeScript", "JavaScript"],
          content: ``,
     },
];

export interface Article {
     id: string;
     title: string;
     date: string;
     readTime: number;
     categories: string[];
     summary: string;
     content: string;
     imageUrl: string;
     techs: string[];
}
