import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Main() {
  return (
    <div>
      <Home />
      <Skills />
      <About />
      <Projects />

      <Contact />
    </div>
  );
}
