import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";
import Karan from "../../Images/Karan.png";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { Element } from "react-scroll";

const Intro = () => {
  return (
    <Element name="intro" className="section">
      <div className="row intro">
        <div className="col-md-1"></div>

        <div className="col-md-2">
          <img
            src={Karan}
            alt="Karan"
            style={{ border: "1px", borderRadius: "50%", width: "200px" }}
          />
        </div>

        <div className="col-md-5 i-name">
          <span style={{ color: "white" }}>Hi! I am</span>
          <span>Karan Randhawa</span>
          <div className="i-icons">
            <a href="https://github.com/KARAN-RANDHAWA27">
              <img src={Github} alt="Git" />
            </a>
            <a href="https://www.linkedin.com/in/karandeep-randhawa-743932182/">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/raj_randhawa_27/">
              <img src={Insta} alt="Insta" />
            </a>
          </div>
        </div>
        <div
          className="col-md-3 alert alert-warning"
          style={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Passionate and detail-oriented full stack developer with a proven
          track record of designing, implementing, and maintaining cutting-edge
          web applications. Proficient in both front-end and back-end
          technologies, I excel at creating seamless user experiences and
          scalable server-side solutions.
        </div>
      </div>
    </Element>
  );
};

export default Intro;
