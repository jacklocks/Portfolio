import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="header">
       <div className="header-container">
      <Carousel />
      </div>
      </div>
    </div>
  );
};

export default Home;
