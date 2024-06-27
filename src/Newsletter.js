import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    alert("Thank you for subscribing!");
  };

  return (
    <div className="newsletter-signup">
      <h2>NEWSLETTER</h2>
      <p>Sign up to our newsletter to receive exclusive offers.</p>
      <form className="email-signup" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter yor email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">
          Subscribe <i className="fa-solid fa-chevron-right"></i>
        </button>
      </form>
      {submitted}
    </div>
  );
}
