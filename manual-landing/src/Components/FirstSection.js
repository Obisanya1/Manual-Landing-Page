import React from "react";
import "./FirstSection.css";
import picture from "./manual-symblol@3x.png";
//import picture from "./hair-cat-header.png";

const FirstSection = () => {
  return (
    <div className="Yes">
      <img
        src={picture}
        alt="Logo"
        style={{
          height: "40px",
          paddingLeft: "10px",
          paddingTop: "40px",
        }}
      />
      <div className="No">
        <h1 className="Sect">BE GOOD TO YOURSELF</h1>
        <p>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <button
          style={{
            backgroundColor: "rgb(52, 209, 209)",
            height: "8vh",
            color: "white",
            borderRadius: "50px",
            textAlign: "center",
            width: "30vh",
            fontSize: "12px",
            border: "none",
            marginBottom: "20px",
          }}
        >
          TAKE THE QUIZ
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
