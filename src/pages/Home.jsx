import React from "react";
import Circle from "../assets/circle.jsx";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <h1>PORTFOLIO.</h1>
      <div className="Home2023">
        <Circle className="circle" />
        <p className="2023">2023</p>
        <Circle className="circle" />
      </div>
      <h2 className="Home-FV">FEDERICO VACCAREZZA</h2>
    </div>
  );
};
export default Home;
