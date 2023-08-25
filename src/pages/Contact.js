import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_a8vegaw",
        "template_h0wlgxh",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          form.current.reset();
          formMess.innerHTML = "<p class='succes'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <>
      <Navbar />
      <section className="main">
        <p> Pour toute collaboration ou opportunité professionnelle, n'hésitez
              pas à me contacter!<br/>Je suis ouvert et enthousiaste à l'idée de discuter de projets
              innovants et de contribuer à des défis stimulants. J'attends avec
              impatience d'échanger avec vous et de faire partie d'équipes
              dynamiques pour créer des solutions web ensemble. Merci de me
              contacter et à bientôt !</p>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>          
            <input type="text" name="name" placeholder="nom" required autoComplete="off" />
            <input type="email" name="email" placeholder="email" required autoComplete="off" />
            <textarea name="message" placeholder="écrivez votre message" required />
            <button value="Envoyer">envoyer</button>
          </form>
          </div>
          <div className="form-message"></div> 
      </section>
    </>
  );
};

export default Contact;
