import React from "react";
import RedCircle from "../assets/img/RedCircle";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <h1>PORTFOLIO.</h1>
      <div className="Home2023">
        <RedCircle />
        <p className="2023">2023</p>
        <RedCircle />
      </div>
      <h2 className="Home-FV">FEDERICO VACCAREZZA</h2>
    </div>
  );
};
export default Home;
