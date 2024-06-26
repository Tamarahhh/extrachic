import React from "react";
import "./FAQ.css";

export default function FAQ() {
  return (
    <div className="FAQ">
      <div className="container mt-5">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What materials are your jewelry made from?
              </button>
            </h3>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Our jewelry is made from a variety of high-quality materials,
                including gold, silver, platinum, and gemstones. Each product
                description details the specific materials used.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What is your return policy?{" "}
              </button>
            </h3>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We accept returns within 3 days of purchase on orders outside
                Lagos and within 24 hours of purchase in Lagos. The jewelry must
                be in its original condition and packaging. Custom designs and
                engraved items are not eligible for returns.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How do I care for my jewelry?{" "}
              </button>
            </h3>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                To keep your jewelry looking its best, avoid contact with water,
                lotions, and perfumes. Store your pieces in a jewelry box or
                pouch to prevent scratches.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Do you ship worldwide?{" "}
              </button>
            </h3>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes, we ship all over the world. Shipping costs will apply, and
                will be added at checkout.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
