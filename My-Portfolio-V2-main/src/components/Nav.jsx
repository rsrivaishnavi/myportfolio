import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";
import "./componentStyles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Nav = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <div className="z-10 fixed left-0 right-0">
      <nav className="max-w-[1080px] m-auto pr-[2rem] pl-[2rem] pt-[1rem] pb-[1rem] flex justify-between">
        <div className="z-2 flex items-center" href="#hero">
          <Link to="#hero" onClick={scrollTop}>
            <h1 className="text-[1.25rem] font-medium">
              {" "}
              &lt;<span className="text-[--color-main]">Sri Vaishnavi </span>/&gt;
            </h1>
          </Link>
        </div>
        <div className={mobileMenu? "nav-ul active": "nav-ul"}>
          <li>
            <a
              href="#about"
              className="uppercase text-[--color-header] link text-[0.8rem]"
            >
              <span className="uppercase text-[--color-main] link text-[0.8rem]">
                01.{" "}
              </span>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="uppercase text-[--color-header] link text-[0.8rem]"
            >
              <span className="uppercase text-[--color-main] link text-[0.8rem]">02. </span>Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="uppercase text-[--color-header] link text-[0.8rem]"
            >
              <span className="uppercase text-[--color-main] link text-[0.8rem]">03. </span>Contact
            </a>
          </li>
          <li>
            <div onClick={toggleTheme} className="text-[1.1rem] cursor-pointer">
              {theme === "light" ? <HiMoon /> : <HiSun />}
            </div>
          </li>
        </div>
        <div onClick={() => setMobileMenu(!mobileMenu)} className="mobile-menu">
          <FontAwesomeIcon icon={mobileMenu? faTimes : faBars}></FontAwesomeIcon>
        </div>
      </nav>
    </div>
  );
};

