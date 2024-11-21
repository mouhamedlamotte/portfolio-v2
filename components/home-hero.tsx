"use client";

import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Boxes } from "./ui/background-boxes";

export function HomeHero() {
  return (
    <div

      className=""
   >
    <div className="relative bg-background w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg py-14">
      <div className="absolute bg-background inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none space-y-6" />
 
      <Boxes />
      <div className="z-20 relative mx-auto h-32 w-32 overflow-hidden rounded-full mb-6">
        <img
          src="me.png"
          alt="Mouhameth Lamotte"
          className="object-cover"
        />
      </div>

      <h1 className="z-20 text-4xl font-bold tracking-tight sm:text-6xl text-center mb-6">
        Mouhameth Lamotte
      </h1>

      <p className="z-20 mx-auto max-w-2xl text-lg text-muted-foreground text-center mb-6">
        Salut, je suis un développeur passionné de web, de données et
        d&apos;intelligence artificielle.
      </p>

      <div className="z-20 flex flex-wrap justify-center gap-4 mb-6">
        <Button asChild>
          <Link href="/projects">Voir mes projets</Link>
        </Button>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Télécharger CV
        </Button>
      </div>

      <div className="z-20 flex justify-center gap-4 mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://github.com/mouhameth" target="_blank">
            <Github className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://linkedin.com/in/mouhameth" target="_blank">
            <Linkedin className="h-5 w-5" />
          </Link>
        </Button>
      </div>
      </div>
      </div>
  );
}