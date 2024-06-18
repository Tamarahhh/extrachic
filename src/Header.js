import React from "react";
import "./Hero.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-4 menu-left">
            <ul>
              <a href="./">
                <li>Home</li>
              </a>
              <a href="./">
                <li>About us</li>
              </a>
              <a href="./">
                <li>Categories</li>
              </a>
            </ul>
          </div>
          <div className="col-4 logo">
            <h2>
              EXTRACHIC<span>NG</span>
            </h2>
          </div>
          <div className="col-4 menu-right">
            <ul>
              <a href="./">
                <li>Blogs</li>
              </a>
              <a href="./">
                <li>FAQ</li>
              </a>
              <a href="./">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
