// pages/Home.jsx
// Landing page: Hero + Projects preview + Experience preview + Tools + Contact

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Tools from "../components/Tools";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Tools />
      <Contact />
    </>
  );
}
