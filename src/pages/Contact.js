import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="main-contact">
        <div className="contact-container">
          <h2>me contacter</h2>
          <div className="contact-text">
            <p>
              Pour toute collaboration ou opportunité professionnelle, n'hésitez
              pas à me contacter par e-mail :<br/>
              <a href="mailto:castets.eric@free.fr">castets.eric@free.fr</a>
              <br />
              <br />
              Je suis ouvert et enthousiaste à l'idée de discuter de projets
              innovants et de contribuer à des défis stimulants. J'attends avec
              impatience d'échanger avec vous et de faire partie d'équipes
              dynamiques pour créer des solutions web ensemble. Merci de me
              contacter et à bientôt !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
