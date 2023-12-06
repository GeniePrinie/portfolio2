import React, { useEffect } from "react";
import { Owner } from "./sections/Owner";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export const Home = () => {
  useEffect(() => {
    document.title = "Prinyapon's Porfolio";
  }, []);

  return (
    <div className="container">
      <Owner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
