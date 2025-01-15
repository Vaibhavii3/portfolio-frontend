import React from "react";
import "../style/BinaryLaptop.css";

const BinaryLaptop = () => {
  return (
    <div className="laptop-container">
      <div className="laptop">
        <div className="laptop-screen">
          <div className="binary-code">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="binary-line">
                10101010101010
              </span>
            ))}
          </div>
        </div>
        <div className="laptop-body"></div>
      </div>
    </div>
  );
};

export default BinaryLaptop;
