import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import NavBar from "./components/Navbar/NavBar";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
