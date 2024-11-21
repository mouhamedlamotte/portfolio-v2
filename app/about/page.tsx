import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python",
  "Django",
  "Next.js",
  "React",
  "Firebase",
  "Tailwind CSS",
  "Elasticsearch",
  "Docker",
  "MongoDB",
];

export default function About() {
  return (
    <div className="space-y-8  p-6 min-h-screen">
      <Card className="bg-gray-900 border border-gray-800 ">
        <CardHeader className="pb-4 border-b border-gray-800">
          <CardTitle className="text-xl text-gray-200">À propos de moi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-300 py-4">
          <div>
            <p className="text-lg">
              <span className="text-2xl font-bold text-blue-400 ">🎉  Mouhamed Lamotte !</span>  
            </p>
            <p className="mt-4">
              Un <span className="font-semibold text-blue-300">code lover</span> basé à Dakar 🌍, toujours en mode <span className="font-semibold text-blue-300">créa vibes</span> pour inventer des solutions web <span className="font-semibold text-blue-300">qui claquent</span> et qui répondent à des vrais besoins. 🛠️ Passionné par le mélange des outils modernes et des challenges réels, je me régale à chaque ligne de code. 🚀  
            </p>

            <p className="mt-4">
              Formé à <span className="font-semibold text-blue-300">Sonatel Academy</span> 🎓, j’ai une <span className="font-semibold">double casquette</span> : backend et frontend, tout en explorant des terrains passionnants comme la gestion des données 📊, l’IA 🤖 et l’indexation 🔍. En vrai, mon crédo, c’est apprendre en <span className="font-semibold">créant des trucs utiles pour la commu</span>. 🙌  
            </p>

            <div className="mt-4">
              <span className="text-xl font-semibold text-blue-400">🌟 Mes vibes ?</span>  
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Développer des <span className="font-semibold text-blue-300">interfaces stylées et fluides</span> 🎨</li>
                <li>Construire des <span className="font-semibold text-blue-300">API en béton armé</span> 🧱</li>
                <li>Jouer avec des montagnes de données 📈 (et kiffer ça 🤓).</li>
              </ul>
            </div>

            <p className="mt-4">
              💡 <span className="font-semibold">Objectif ultime ?</span> Allier <span className="font-semibold text-blue-300">simplicité et efficacité</span> dans des projets qui <span className="font-semibold text-blue-300">marquent la diff’</span> !  
            </p>

            <p className="mt-6 text-center text-lg font-bold text-blue-400">
              Let’s code, collab, and create some magic ✨.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Compétences techniques</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
