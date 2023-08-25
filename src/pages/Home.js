import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <section className="main">
      <Navbar />
      <div className="header">
       <div className="header-container">
      <Carousel />
      </div>
      </div>
    </section>
  );
};

export default Home;
