import React from "react";
import asterisk from "../assets/img/asterisk.svg";
import "../styles/Work.css";
const Work = () => {
  return (
    <div className="Work-container">
      <div className="Work-TitleContainer">
        <img className="Work-asterisk" src={asterisk} alt="asteriskk" />
        <h2 className="Work-mainTitle">LATEST WORKS</h2>
      </div>
      <ul className="Work-ListContainer">
        <div className="Work-ListRow1">
        <li className="Work-ListItem">
          <p className="Work-ItemNumber">
            1 <span className="Work-ItemText">FROG BAZAR.</span>
          </p>
        </li>
        <li className="Work-ListItem">
          <p className="Work-ItemNumber">
            2 <span className="Work-ItemText">ESTUDIO 32 -</span>
          </p>
        </li>
        <li className="Work-ListItem">
          <p className="Work-ItemNumber">
            3 <span className="Work-ItemText">N.MORENO/PEDRAZA</span>
          </p>
        </li>
        <li className="Work-ListItem">
          <p className="Work-ItemNumber">
            4 <span className="Work-ItemText">OPAME COLLECTIVE =</span>
          </p>
        </li>
        </div>
        <div className="Work-ListRow2">
        <li className="Work-ListItem">
          <p className="Work-ItemNumber">
            5 <span className="Work-ItemText">MICHI BISTRO {`"`}</span>
          </p>
        </li>
        <li className="Work-ListItem">
          <p className="Work-ItemNumber">
            6 <span className="Work-ItemText">BROKE MUSIC _</span>
          </p>
        </li>
        <li className="Work-ListItem">
          <p className="Work-ItemNumber">
            7 <span className="Work-ItemText">KP INTERIOR DESIGN /</span>
          </p>
        </li>
        <li className="Work-ListItem">
          <p className="Work-ItemNumber">
            8 <span className="Work-ItemText">LOGOFOLIO {`}`} </span>
          </p>
        </li>
        <li className="Work-ListItem">
          <p className="Work-ItemNumber">
            9 <span className="Work-ItemText">3D MISC. ART *</span>
          </p>
        </li>
        </div>
      </ul>
    </div>
  );
};

export default Work;
