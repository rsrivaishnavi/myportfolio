import React from "react";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Technologies } from "../components/Technologies";
import { Contact } from "../components/Contact";

export const IndexPage = ({ setTheme, theme }) => {
  return (
    <div>
      <Nav setTheme={setTheme} theme={theme} />
      <Hero />
      <About />
      <Technologies/>
      <Contact/>
    </div>
  );
};
