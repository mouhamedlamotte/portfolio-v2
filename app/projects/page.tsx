"use client";

import { ProjectCard } from "@/components/project-card";
import { resume } from "../data/resume";


// const projects : {
//   title: string;
//   href?: string;
//   description: string;
//   dates: string;
//   tags: readonly string[];
//   link?: string;
//   image?: string;
//   video?: string;
//   links?: readonly {
//     icon: React.ReactNode;
//     type: string;
//     href: string;
//   }[];
//   className?: string;
// }[] = [
//     {
//       title: "NexCom",
//       href: "/projects/nexcom",
//       description: "NexCom est une plateforme de communication centralisée qui aide les entreprises à gérer leurs interactions client sur plusieurs canaux (WhatsApp, Facebook Messenger, Twitter, etc.). Son objectif est de simplifier les échanges, d'améliorer la réactivité et d'offrir une expérience client optimale grâce à une gestion unifiée et en temps réel des messages.",
//       dates: "2024 - en cours",
//       tags: ["Django REST", "Django Channels", "websocket", "PostgreSQL", "Redis", "Elasticsearch", "React.js", "Next.js", "Docker"],
//       image: "/img/preview/nexcom-light.png",
//       links: [
//         {
//           icon: <Globe />,
//           type: "landing page",
//           href: "https://nexcom-sn.vercel.app/"
//         }
//       ]
//     },
//     {
//       title: "Windam",
//       href: "/projects/windam",
//       description: "Windam est une application de chat moderne offrant des fonctionnalités telles que la messagerie en temps réel, la gestion d'amis, des publications (feed) et la recherche utilisateur en collaboration avec [# @Helicia Tsika](https://heli2805.github.io/Personal-Portfolio/). Conçue pour être rapide, intuitive et évolutive, elle utilise des technologies modernes pour une expérience fluide.",
//       dates: "2024 - en cours",
//       tags: ["Django", "Django Channels", "Next.js", "React.js", "WebSocket", "PostgreSQL", "Redis"],
//       image: "/img/preview/windam.png",
//       links: [
//         {
//           icon: <Globe />,
//           type: "WebApp",
//           href: "https://windampro.vercel.app/"
//         },
//         {
//           icon: <Github />,
//           type: "Code",
//           href: "https://github.com/mouhamedlamotte/windam-v2-frontend"
//         }
//       ]
//     },
//     {
//       title: "Indexation et Recherche de Données",
//       href: "/projects/indexation",
//       description: "Projet de création d'un moteur de recherche spécialisé basé sur Elasticsearch et Kibana, permettant la collecte, l'analyse et la visualisation des données pour identifier les tendances et extraire des insights exploitables.",
//       dates: "2024",
//       tags: ["Elasticsearch", "Kibana", "Python", "Django", "Scraping", "Data Visualization"],
//       video: "/img/preview/indexation.mp4",
//       links: [
//         {
//           icon: <Github />,
//           type: "Code",
//           href: "https://github.com/mouhamedlamotte/search_engine"
//         }
//       ]
//     },  
// ];

export default function Projects() {


  return (
    <div className="w-full md:px-16">
            <div className="max-w-7xl mx-auto py-20">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
Projects Recent
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Voici quelques-uns de mes projets les plus résents
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {resume.projects.map((project) => (
        <ProjectCard  key={project.title} project={project}  stack={false}  />
      ))}
      </div>
    </div>
  );
}