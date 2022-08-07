import React from "react";
import "./about.css";
import profile from "../../img/image1.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={profile} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">I love building things.</p>
        <p className="a-desc">
          I am a B-Tech Graduate from Uttarakhand Technical University
          (Dehradun). <br />
          <br />I enjoy designing Clean, Beautiful, Interactive, Responsive and
          User-Friendly Websites and Mobile Application developed by Modular,
          Scalable and Functional Code. Having an experience in ReactJS/ React
          Native / JavaScript / HTML / CSS and some other cool libraries and
          frameworks.
        </p>
      </div>
    </div>
  );
}

export default About;
