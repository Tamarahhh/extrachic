import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Categories from "./Categories";
import Blog from "./Blog";
import FAQ from "./FAQ";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Categories />
      <Blog />
      <FAQ />
    </div>
  );
}

export default App;
