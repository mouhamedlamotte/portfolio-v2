import { HomeHero } from "@/components/home-hero";
import About from "./about/page";
import Projects from "./projects/page";
import Experience from "./experience/page";
import Contact from "./contact/page";
import Track from "@/components/track";

export async function generateStaticParams() {
  
}


export default function Home() {



  return (
    <div className="space-y-24">
      <section id="home" className="">
        <HomeHero />
      </section>

      <section id="about" className=" xl:px-40 scroll-mt-16">
        <About />
      </section>

      <section id="experience" className=" xl:px-40 scroll-mt-16">
        <Experience />
      </section>

      <section id="projects" className=" xl:px-40 scroll-mt-16">
        <Projects />
      </section>
      
      <section id="contact" className=" xl:px-40 scroll-mt-16">
        <Contact />
      </section>

      <section className=" xl:px-40 ">
       <p className="text-muted-foreground text-center text-sm">Copyright &copy; {new Date().getFullYear()} Mouhameth Lamotte</p>
      </section>
      <Track />
    </div>
  );
}