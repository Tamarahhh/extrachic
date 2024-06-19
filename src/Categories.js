import React from "react";
import earrings from "./images/earrings.png";
import rings from "./images/rings.png";
import bracelets from "./images/bracelets.png";
import necklace from "./images/necklace.png";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="Categories">
      <h2>CATEGORIES</h2>
      <div className="row">
        <div className="col-3">
          <img src={earrings} alt="earrings" />
          <p>
            <a href="./">Earrings</a>
          </p>
        </div>
        <div className="col-3">
          <img src={rings} alt="rings" />
          <p>
            <a href="./">Rings</a>
          </p>
        </div>
        <div className="col-3">
          <img src={necklace} alt="necklace" />
          <p>
            <a href="./">Necklaces</a>
          </p>
        </div>
        <div className="col-3">
          <img src={bracelets} alt="bracelet" />
          <p>
            <a href="./">Bracelets</a>
          </p>
        </div>
      </div>
    </div>
  );
}
