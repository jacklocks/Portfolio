import React from "react";
import Navbar from "../components/Navbar";
import item3 from "../assets/img/rncp34779bc02.webp";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="main-about">
        <div className="about-container">
          <h1>à propos de moi</h1>
          <div className="about-text">
            <p>
              Je m'appelle Éric Castets, et ma carrière professionnelle est un
              parcours diversifié qui m'a conduit à une passionnante
              reconversion en tant que développeur web. À l'âge de 48 ans, j'ai
              relevé le challenge d'un bootcamp intensif de 8 mois chez The
              Hacking Project, où j'ai acquis des compétences avancées en
              développement web, obtenant le niveau 5 du RNCP en tant que
              développeur web.
              <br />
              Fort de ces compétences techniques fraîchement acquises, j'ai
              découvert ma véritable passion dans le développement web et la
              création d'applications. Mon parcours atypique témoigne de mon
              engagement, ma persévérance et ma capacité d'adaptation face aux
              défis. Aujourd'hui, je suis prêt à mettre à profit ma polyvalence
              et mon expertise à travers des projets innovants.
              <br />
              Mon portfolio reflète ma progression professionnelle, mettant en
              lumière ma capacité à résoudre des problèmes complexes, à créer
              des applications interactives et à développer des solutions sur
              mesure. Avec ma solide expérience entrepreneuriale et mes
              compétences techniques, je suis enthousiaste à l'idée de
              contribuer à des projets passionnants et de collaborer avec des
              équipes dynamiques.
            </p>
          </div>
          <h1>mes compétences</h1>
          <div className="skills">
            <ul>
              <li>figma</li>
              <li>ruby, ruby on rails</li>
              <li>javascript, réact, nextjs</li>
              <li>css, sass</li>
              <li>github</li>
              <li>mongodb</li>
              <li>postgresql</li>
            </ul>
          </div>
          <h1>mes certifications</h1>
          <div className="certification">
            <img src={item3} alt="rncp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
