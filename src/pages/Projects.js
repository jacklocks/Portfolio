import React from "react";
import Navbar from "../components/Navbar";
import item1 from "../assets/img/trox.webp";
import item2 from "../assets/img/soundspectrum.webp";
import item3 from "../assets/img/ess.webp";

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="main-projects">
        <div className="projects-container">
          <div className="trox-container">
            <div className="top-trox">
              <p>
                Trox est une plateforme conviviale de partage d'outils entre
                particuliers. Notre projet, développé avec Ruby on Rails,
                facilite l'échange et l'emprunt d'outils géolocalisés grâce à
                une carte interactive.
                <br />
                En quelques étapes simples, les utilisateurs peuvent s'inscrire
                et proposer leurs outils à prêter, tout en pouvant emprunter
                ceux dont ils ont besoin. La carte interactive permet aux
                membres de trouver facilement des outils disponibles dans leur
                quartier.
                <br />
                L'idée est de créer une économie collaborative et durable en
                favorisant le partage local d'outils, réduisant ainsi le
                gaspillage et les achats superflus. La sécurité est assurée par
                un système de vérification des utilisateurs.
              </p>
            </div>
            <div className="img-trox">
              <img src={item1} alt="page d'accueil Trox" />
            </div>
            <div className="tech-trox">
              <h2>technologies utilisées</h2>
              <ul>
                <li>Figma</li>
                <li>Ruby On Rails</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>Github</li>
                <li>Flyio</li>
              </ul>
            </div>
          </div>
          <div className="sound-container">
            <div className="top-sound">
              <p>
                Sound Spectrum est une application web combinant un back-end API
                Rails et un front-end interactif en React. Elle offre une
                expérience de streaming radio en utilisant l'API Radio-Browser,
                donnant aux utilisateurs accès à un large éventail de stations.
                <br />
                Une fois inscrit et connecté, l'utilisateur peut explorer et
                lancer facilement ses radios préférées, ajuster le volume à sa
                convenance et même ajouter des radios en favoris pour un accès
                rapide.
                <br />
                Ce qui distingue Sound Spectrum, c'est sa personnalisation. Les
                utilisateurs peuvent découvrir de nouveaux genres musicaux et
                créer leur propre ambiance en sélectionnant des stations
                adaptées à leurs goûts.
              </p>
              <a
                href="https://soundspectrum.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visiter le site
              </a>
            </div>
            <div className="img-sound">
              <img src={item2} alt="page d'accueil Sound Spectrum" />
            </div>
            <div className="tech-sound">
              <h2>technologies utilisées</h2>
              <ul>
                <li>Figma</li>
                <li>API Rails</li>
                <li>Réact</li>
                <li>sass</li>
                <li>Github</li>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
          <div className="ess-container">
            <div className="top-ess">
              <p>
                Mon dernier projet de site vitrine dédié aux salons de coiffure
                démontre mon savoir-faire en matière de conception web pour
                l'industrie de la beauté. À travers un design épuré et raffiné,
                ce site met en lumière les services offerts par les salons de
                coiffure avec des galeries visuelles qui illustrent les
                compétences de l'équipe. Les informations détaillées sur les
                prestations assurent une communication transparente, tandis
                qu'un formulaire de contact facile d'utilisation encourage
                l'engagement des visiteurs. L'élégance du design et la
                présentation professionnelle font de ce site un outil efficace
                pour attirer de nouveaux clients et renforcer la réputation des
                salons de coiffure.
              </p>
              <a
                href="https://hairstyle-ten.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visiter le site
              </a>
            </div>
            <div className="img-ess">
              <img src={item3} alt="page d'accueil L'essence Du Chic" />
            </div>
            <div className="tech-ess">
              <h2>technologies utilisées</h2>
              <ul>
                <li>Figma</li>
                <li>html</li>
                <li>sass</li>
                <li>javascript</li>
                <li>Github</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
