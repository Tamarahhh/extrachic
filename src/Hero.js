import React from "react";
import Header from "./Header";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <Header />
      <div className="content">
        <h1>ELEGANCE IN EVERY MOMENT, JEWELRY MASTERPIECES FOR YOU!</h1>
        <p>Extra Chic Jewelry For Every Occasion</p>
        <button type="button" className="btn btn-dark">
          Visit Shop
        </button>
      </div>
    </div>
  );
}
