import React from "react";
import BinaryLaptop from "../components/BinaryLaptop";
import "../style/About.css";
// import "../App.css";

const AboutPage = () => {
    return (
        <div className="hello">
          <h1>Hey! I'm Vaibhavi </h1>

          <BinaryLaptop className="laptop" />

          <p>
            I'm a passionate developer who creates interactive and responsive web
            applications!
          </p>
        </div>
      );
};

export default AboutPage;