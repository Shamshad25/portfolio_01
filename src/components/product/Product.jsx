import React from "react";
import "./product.css";

function Product({ img, link, project }) {
  return (
    <div className="section">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} className="p-img" alt="person" />
        </a>
        <></>
      </div>
      <div className="pFooter">
        <h4 className="pText">{project}</h4>
      </div>
    </div>
  );
}

export default Product;
