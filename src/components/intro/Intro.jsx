import React, { useContext } from "react";
import "./Intro.css";
import Me from "../../img/me.png";
import github from "../../img/git.png";
import gitwhite from "../../img/gitwhite.png";
import { ThemeContext } from "../../context";

function Intro() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hey there, this is</h2>
          <h1 className="i-name">Shamshad Alam</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Mobile App Developer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I am a passionate Front-End Web Developer and Mobile Application
            Developer.
          </p>
          <p className="i-git">
            {darkMode ? (
              <img src={gitwhite} alt="github" className="git-icon" />
            ) : (
              <img src={github} alt="github" className="git-icon" />
            )}
            Visit My GitHub Account to see my work:
          </p>
          <a href="https://github.com/Shamshad25">
            https://github.com/ Shamshad25
          </a>
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
