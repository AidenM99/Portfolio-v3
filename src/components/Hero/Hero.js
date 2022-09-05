import DarkWavyBg from "../Backgrounds/DarkWavyBg";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div style={{ position: "relative", height: "fit-content" }}>
        <h1 className="hero-name">Aiden McNaughton</h1>
      </div>
      <DarkWavyBg />
    </section>
  );
};

export default Hero;
