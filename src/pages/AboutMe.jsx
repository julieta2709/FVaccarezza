import React from "react";
import FVpic from "../assets/img/FVpic.png";
import ButtonUp from "../components/ButtonUp";

const AboutMe = () => {
  return (
    <div className="Aboutme-container">
      <p>HI, MY NAME IS</p>
      <h2>FEDERICO VACCAREZZA</h2>
      <p>AND I AM A GRAPHIC DESIGNER.</p>
      <ButtonUp />
      <img src={FVpic} alt="Federico-Vaccarezza" />
    </div>
  );
};
export default AboutMe;
