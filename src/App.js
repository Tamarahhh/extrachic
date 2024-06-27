import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Categories from "./Categories";
import Blog from "./Blog";
import FAQ from "./FAQ";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Categories />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
