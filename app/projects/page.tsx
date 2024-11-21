import { ProjectCard } from "@/components/project-card";


const projects = [
  {
    title: "Sante de Coeur",
    description: "Intégration de l'API PAYTECH pour les dons en ligne.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Django", "React", "PAYTECH API"],
    github: "https://github.com/mouhameth/sante-de-coeur",
    demo: "https://sante-de-coeur.com",
  },
  {
    title: "Jolof Taxi",
    description: "Frontend Next.js avec authentification Firebase.",
    image: "https://images.unsplash.com/photo-1549194388-f61be84a6e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/mouhameth/jolof-taxi",
    demo: "https://jolof-taxi.com",
  },
  {
    title: "Subito International",
    description: "API et gestion des réservations avec Django Rest Framework.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Django REST", "PostgreSQL", "Docker"],
    github: "https://github.com/mouhameth/subito-international",
    demo: "https://subito-international.com",
  },
];

export default function Projects() {


  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard  key={project.title} project={project} />
      ))}
    </div>
  );
}