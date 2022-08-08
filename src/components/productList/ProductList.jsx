import React from "react";
import "./prodectList.css";
import Product from "../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire</h1>
        <p className="pl-desc">
          These are some of my projects I have worked on and would like to share
          with you all.
        </p>
      </div>
      <div className="pl-list">
        {products?.map((product) => {
          return (
            <>
              <Product
                key={product.id}
                img={product.image}
                link={product.link}
                project={product.project}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
