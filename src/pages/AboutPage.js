import React from "react";
import { useNavigate } from "react-router-dom";
import BinaryLaptop from "../components/BinaryLaptop";

import "../style/About.css";
// import "../App.css";

const AboutPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/photo");
  }

    return (
        <div className="hello">
          <h1>Hey! I'm Vaibhavi </h1>

          <BinaryLaptop className="laptop" />

          <p>
            I'm a passionate developer who creates interactive and responsive web
            applications!
          </p>
          <div className="photography" onClick={handleClick}>
            <h3> I do <span>photography</span> often!</h3>
            <h4> If you want to see some Photos, click here </h4>
          </div>
        </div>
      );
};

export default AboutPage;