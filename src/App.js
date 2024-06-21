import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero";
import About from "./About";
import Categories from "./Categories";
import Blog from "./Blog";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Categories />
      <Blog />
    </div>
  );
}

export default App;
