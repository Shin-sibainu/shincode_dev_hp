import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Works } from "@/components/home/works";
import { Skills } from "@/components/home/skills";
import { Process } from "@/components/home/process";
import { Pricing } from "@/components/home/pricing";
import { Blog } from "@/components/home/blog";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
