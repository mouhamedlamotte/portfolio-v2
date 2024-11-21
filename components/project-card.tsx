import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

type Project = {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string;
    technologies: string[];
};


export const ProjectCard = ({ project  }: { project: Project }) => {
  return (
    <Card key={project.title} className='w-full'>
    <img
      src={project.image}
      alt={project.title}
      className="aspect-video w-full object-cover"
    />
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="gap-2">
      <Button asChild variant="outline" size="sm">
        <Link href={project.github} target="_blank">
          <Github className="mr-2 h-4 w-4" />
          Code
        </Link>
      </Button>
      <Button asChild size="sm">
        <Link href={project.demo} target="_blank">
          <Globe className="mr-2 h-4 w-4" />
          Demo
        </Link>
      </Button>
    </CardFooter>
    </Card>
  )
}
