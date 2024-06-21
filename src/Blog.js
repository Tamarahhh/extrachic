import React from "react";
import blog1 from "./images/blog1.png";
import blog2 from "./images/blog2.png";
import blog3 from "./images/blog3.png";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="Blog">
      <h2>OUR BLOGS</h2>
      <div className="row">
        <div className="col-4">
          <img src={blog1} alt="blog" />
          <div className="content">
            <h3>5 ONLINE JEWELLERY SHOPPING MISTAKES TO AVOID</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              illum blanditiis laudantium. Nemo cumque possimus dolores aliquam
              sapiente temporibus tenetur...
            </p>
            <h4>
              {" "}
              <a href="./">READ MORE</a>
            </h4>
          </div>
        </div>
        <div className="col-4">
          <img src={blog2} alt="blog" />
          <div className="content">
            <h3>5 ONLINE JEWELLERY SHOPPING MISTAKES TO AVOID</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              illum blanditiis laudantium. Nemo cumque possimus dolores aliquam
              sapiente temporibus tenetur...
            </p>
            <h4>
              <a href="./">READ MORE</a>
            </h4>
          </div>
        </div>
        <div className="col-4">
          <img src={blog3} alt="blog" />
          <div className="content">
            <h3>DON'T BE CONNED: JEWELLERY MYTHS & MISLEADING MARKETING</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              illum blanditiis laudantium. Nemo cumque possimus dolores aliquam
              sapiente temporibus tenetur...
            </p>
            <h4>
              <a href="./">READ MORE</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
