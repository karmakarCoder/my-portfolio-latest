import { Hero } from "@/components/Home/Hero";
import { About } from "@/components/Home/About";
import { Works } from "@/components/Home/Works";
import { Skills } from "@/components/Home/Skills";
import { Experience } from "@/components/Home/Experience";
import { Education } from "@/components/Home/Education";
import { Training } from "@/components/Home/Training";
import { Contact } from "@/components/Home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Experience />
      <Education />
      <Training />
      <Contact />
    </div>
  );
}
