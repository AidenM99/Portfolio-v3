import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </>
  );
}

export default App;
