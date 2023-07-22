import React, { useEffect, useState } from "react";
import imgprofil from "../assets/img/cartp.webp";
import logolinkedin from "../assets/img/linkedin.png";
import logogithub from "../assets/img/github-mark.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`main ${visible ? "navbar-visible" : "navbar-hidden"}`}>
      <div
        className={`navbar-container ${
          visible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <img className="imgprofil" src={imgprofil} alt="img profil" />
        <label className="menu-hamburger" onClick={toggleMenu}>
          ☰
        </label>
        <div className={`link ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="navbar-link">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <li>home</li>
            </NavLink>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
              <li>projets</li>
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              <li>à propos</li>
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              <li>contact</li>
            </NavLink>
          </ul>
        </div>
        <ul className="link-social">
          <li>
            <a
              href="https://www.linkedin.com/in/eric-castets-b894156a"
              target="blank"
            >
              <img src={logolinkedin} alt="logo linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jacklocks" target="blank">
              <img src={logogithub} alt="logo github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
