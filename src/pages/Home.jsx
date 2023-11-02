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
        <h1>PORTFOLIO.</h1>
        <p className="year">2023</p>
      </div>
      <h2 className="Home-FV">FEDERICO VACCAREZZA</h2>
    </div>
  );
};
export default Home;
