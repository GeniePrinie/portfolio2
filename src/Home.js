import React, { useEffect } from "react";
import { Owner } from "./sections/Owner";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { BackToTop } from "./sections/BackToTop";

export const Home = () => {
  useEffect(() => {
    document.title = "Prinyapon's Porfolio";
  }, []);

  return (
    <>
      <Owner />
      <div className="container">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <BackToTop />
    </>
  );
};
