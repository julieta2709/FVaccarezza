import * as React from "react";
import ButtonUpIcon from "../assets/img/ButtonUpIcon.svg";
import "../styles/ButtonUp.css";
const ButtonUp = () => (
  <button className="ButtonUp-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <svg className="ButtonUp" viewBox="0 0 50 50">
      <path id="button-up-icon" d={ButtonUpIcon} />
    </svg>
  </button>
)
export default ButtonUp;