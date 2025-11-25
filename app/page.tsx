import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <CtaBanner />
      <Contact />
    </>
  );
}
