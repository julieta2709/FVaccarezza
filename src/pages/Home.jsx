import React from "react";
import RedCircle from "../assets/img/RedCircle";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="HomePF-Container">
        <div className="RedCircle-container">
          <RedCircle />
          <RedCircle />
        </div>
        <div className="year-container">
        <p className="year">2024</p>
        </div>
        <div className="portfolio-container">
        <h1>PORTFOLIO.</h1>
        </div>
        <div className="fv-container">
        <h2 className="Home-FV">FEDERICO VACCAREZZA</h2>
        </div>
      </div>
    </div>
  );
};
export default Home;
