
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Play from "./components/Play";

function App() {
  return (
    <div className="relative w-full max-w">
      
      <div className="bg-materialBlack text-word flex flex-col gap-6">
        
        <Navbar />
        <Hero />
        <Play />
        <About />
      </div>

    </div>

  );
}

export default App;
