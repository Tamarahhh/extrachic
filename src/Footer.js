import React from "react";
import "./Footer.css";
import Newsletter from "./Newsletter";
import instagram from "./images/instagram (2).png";
import whatsapp from "./images/whatsapp.png";
import twitter from "./images/twitter.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <Newsletter />
      </div>
      <div className="row content">
        <div className="col-4 help">
          <h3>Help</h3>
          <a href="/">Shipping</a> <br />
          <a href="/">Return & Exchange</a> <br />
          <a href="/">Jewelry Care</a> <br />
          <a href="/">Refund Policy</a> <br />
          <a href="/">Terms & Conditions</a>
        </div>
        <div className="col-4 socials">
          <h3>Follow Us</h3>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={whatsapp} alt="whatsapp" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <div className="col-4 contact">
          <h3>Contact Us</h3>
          <a href="mailto" className="email">
            info@extrachicng.com
          </a>{" "}
          <a href="mailto" className="email">
            support@extrachicng.com
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>
          {new Date().getFullYear()} &copy; Extrachicng. All rights reserved.
          Designed by <a href="./">Tamara Boboye</a>
        </p>
      </div>
    </div>
  );
}
