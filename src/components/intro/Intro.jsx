import React from "react";
import "./Intro.css";
import Me from "../../img/me.png";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hey there, this is</h2>
          <h1 className="i-name">Shamshad Alam</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Mobile Application Developer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I am a passionate Front-End Web Developer and Mobile App Developer.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} className="i-img" alt="Profile" />
      </div>
    </div>
  );
}

export default Intro;
