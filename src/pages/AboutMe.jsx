import React from "react";
import FVpic from "../assets/img/FVpic.png";
import ButtonUp from "../components/ButtonUp";

const AboutMe = () => {
  return (
    <div className="Aboutme-container">
      <div className="Aboutme-maininfo">
        <p>HI, MY NAME IS</p>
        <h2>FEDERICO VACCAREZZA</h2>
        <p>AND I AM A GRAPHIC DESIGNER.</p>
        <ButtonUp />
        <img src={FVpic} alt="Federico-Vaccarezza" />
      </div>
      <div className="Aboutme-1">
        <p>1</p>
        <p>profile.</p>
        <p>ABOUT ME</p>
        <p>
          I am a freelance graphic designer from Tigre, Argentina. I have
          studied several years at the universidad of buenos aires (U.B.A.),
          from industrial to graphic design. Been always passionate about style
          in all it forms and started exploring this world many years ago.
        </p>
      </div>
      <div className="Aboutme-3">
        <p>3</p>
        <p>showcase sites.</p>
        <p>PORTFOLIO & SOCIAL MEDIA</p>
        <p>DRIBBBLE</p>
        <p>dribbble.com/vaccarezza</p>
        <p>BEHANCE</p>
        <p>behance.net/Vaccarezza</p>
        <p>VSCO</p>
        <p>vsco.co/fedevaccarezza/gallery</p>
      </div>
      <div className="Aboutme-6">
        <p>6</p>
        <p>main abilities.</p>
        <p>adobe illustrator</p>
        <p>adobe photoshop</p>
        <p>adobe lightroom</p>
        <p>adobe after effects</p>
        <p>figma</p>
        <p>cinema 4d</p>
      </div>
      <div className="Aboutme-5">
        <p>5</p>
        <p>areas of expertise.</p>
        <p>SKILLS</p>
        <p>BRANDING</p>
        <p>WEB DESIGN</p>
        <p>UX/UI</p>
        <p>PHOTOGRAPHY</p>
        <p>3D</p>
      </div>
      <div className="Aboutme-2">
        <p>2</p>
        <p>languages.</p>
        <p>
          ENGLISH <span>(advanced)</span>
        </p>
        <p>
          SPANISH <span>(native)</span>
        </p>
      </div>
      <div className="Aboutme-contact">
        <p>CONTACT ME.</p>
        <p>54 11 6509 3091</p>
        <p>fvaccarezza@gmail.com</p>
      </div>
    </div>
  );
};
export default AboutMe;
