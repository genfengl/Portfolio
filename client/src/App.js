
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Play from "./components/Play";

function App() {
  return (
    <div className="bg-materialBlack text-word">
      <Navbar />
      <Hero />
      <Play />
      <About />
    </div>
    
  );
}

export default App;
