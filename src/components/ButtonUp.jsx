import * as React from "react";
import ButtonUpIcon from "../assets/img/ButtonUpIcon.jsx";
import "../styles/ButtonUp.css";
const ButtonUp = () => (
  <button className="ButtonUp-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
<ButtonUpIcon/>
  </button>
)
export default ButtonUp;