import React from "react";
import RedCircle from "../assets/img/RedCircle";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="HomePF-Container">
        <div className="PF-container">
          <RedCircle />
          <h1>PORTFOLIO.</h1>
          <RedCircle />
        </div>
        <p className="year">2023</p>
      </div>
      <h2 className="Home-FV">FEDERICO VACCAREZZA</h2>
    </div>
  );
};
export default Home;
