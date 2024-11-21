import { ExperienceCard } from "@/components/experience-card";
import { Timeline } from "@/components/ui/timeline";


const experiences = [
  {
    year: "Avril 2024",
    story : "En Plein Essor avec Subito International 🚀",
    company: "Subito International",
    role: "Web Developer",
    description: "Développement d'une API RESTful pour la gestion des réservations, intégration d'un système de notifications, et mise en place d'un backend robuste pour gérer les transactions des utilisateurs.",
    technologies: ["Django REST", "PostgreSQL", "Docker", "Redis"],
  },
  {
    year: "Janvier 2024",
    story : "Sur la Route avec Jolof Taxi 🚖",
    company: "Jolof Taxi",
    role: "Web Developer",
    description: "Création d'une interface utilisateur moderne et responsive avec Next.js et Tailwind CSS, ajout de fonctionnalités d'authentification avec Firebase, et optimisation de la performance de l'application.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
  },
  {
    year: "Juillet 2022",
    story : "Le Déclic 🌟",
    company: "Sante de Coeur",
    role: "Web & Backend Developer",
    description: "Conception et intégration de solutions de paiement en ligne avec l'API PAYTECH, développement d'une plateforme de collecte de dons et gestion des campagnes de santé avec Django.",
    technologies: ["Django", "React", "PAYTECH API", "Stripe"],
  },
];

export default function Experience() {

  const data = experiences.map((experience) => ({
    title: experience.year,
    content: (
      <ExperienceCard exp={experience} />
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
