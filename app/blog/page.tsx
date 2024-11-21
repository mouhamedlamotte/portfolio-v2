import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const posts = [
  {
    title: "Les meilleures pratiques pour le développement Next.js",
    description: "Découvrez comment optimiser vos applications Next.js avec ces conseils d'expert.",
    date: "2024-03-15",
    slug: "best-practices-nextjs",
  },
  {
    title: "Introduction à l'API de Django Rest Framework",
    description: "Un guide complet pour débuter avec DRF et créer des APIs RESTful.",
    date: "2024-03-10",
    slug: "intro-django-rest-framework",
  },
  {
    title: "Firebase Authentication avec Next.js",
    description: "Implémentez l'authentification utilisateur dans vos applications Next.js avec Firebase.",
    date: "2024-03-05",
    slug: "firebase-auth-nextjs",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full transition-transform hover:scale-[1.02]">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}