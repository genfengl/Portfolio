
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Play from "./components/Play";

function App() {
  return (
    <div className="relative w-full max-w">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full "></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full "></div>
      <div className="absolute top-8 left-20 w-72 h-72 bg-pink-300 rounded-full "></div>
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
