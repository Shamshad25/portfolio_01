import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../img/sun_logo.png";
import Moon from "../../img/moon_logo.png";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 26 }}
      ></div>
    </div>
  );
}

export default Toggle;
