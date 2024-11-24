"use client";

import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Boxes } from "./ui/background-boxes";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { resume } from "@/app/data/resume";
import { Icons } from "@/app/icons";

export function HomeHero() {
  return (
    <div className="">
      <div className="relative bg-background w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg py-14">
        <div className="absolute bg-background inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none space-y-6" />

        <Boxes />
        <Avatar className="z-20 h-32 w-32">
          <AvatarFallback>{resume.initials.toLowerCase()}</AvatarFallback>
          <AvatarImage
            src={resume.avatarUrl}
            className="object-fill rotate-3"
          />
        </Avatar>

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
          <Popover>
            <PopoverTrigger className="flex gap-2 items-center group rounded-lg border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </AnimatedShinyText>
            </PopoverTrigger>
            <PopoverContent className="p-2">
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cv/FR_CV_MOUHAMED_LAMOTTE_DEV_DATA.pdf";
                    link.download = "FR_CV_MOUHAMED_LAMOTTE.pdf";
                    link.click();
                  }}
                >
                  Francais
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cv/EN_CV_MOUHAMED_LAMOTTE_DEV_DATA.pdf";
                    link.download = "EN_CV_MOUHAMED_LAMOTTE.pdf";
                    link.click();
                  }}
                >
                  English
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="z-20 flex justify-center gap-4 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://x.com/MouhamedLamotly" target="_blank">
              <Icons.x className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/mouhamedlamotte" target="_blank">
              <Icons.github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/mouhamed-baba-lamotte-876291252/"
              target="_blank"
            >
              <Icons.linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
