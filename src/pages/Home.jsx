import React from "react";
import RedCircle from "../assets/img/RedCircle";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="HomePF-Container">
        <div className="redCircle">
          <RedCircle />
        </div>
        <div className="mainTitle">
          <h2 className="year">2024</h2>
          <h1 className="portfolio">PORTFOLIO.</h1>
        </div>
        <div className="redCircle">
          <RedCircle />
        </div>
        <p className="fv">FEDERICO VACCAREZZA</p>
      </div>
    </div>
  );
};
export default Home;
