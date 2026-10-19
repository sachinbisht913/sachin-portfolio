
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <Education />

        <div className="relative z-10 -mt-8 rounded-t-3xl bg-[#faf9f6]">
          <Projects />
        </div>

        <Contact />
      </main>
    </>
  );
}
