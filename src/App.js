import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Support from "./components/Support";
import AllinOne from "./components/AllinOne";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllinOne />
    </div>
  );
}

export default App;
