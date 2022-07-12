import Hero from "./views/Hero/Hero";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
