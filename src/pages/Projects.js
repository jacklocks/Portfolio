import React from "react";
import Navbar from "../components/Navbar";
import item1 from "../assets/img/trox.webp";
import item2 from "../assets/img/soundspectrum.webp";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="main-projects">
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
              <img src={item1} alt="image page d'accueil Trox" />
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
            </div>
            <div className="img-sound">
              <img src={item2} alt="image page d'accueil Sound Spectrum" />
            </div>
            <div className="tech-sound">
              <h2>technologies utilisées</h2>
              <ul>
                <li>Figma</li>
                <li>API Rails</li>
                <li>Réact</li>
                <li>Sass</li>
                <li>Github</li>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
