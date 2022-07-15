import DarkWavyBg from "../Backgrounds/DarkWavyBg";
import { motion } from "framer-motion";

const Hero = () => {
  const headingVariant = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <section id="hero" className="hero-section">
      <motion.h1
        className="hero-name"
        variants={headingVariant}
        initial="hidden"
        animate="visible"
      >
        Aiden McNaughton
      </motion.h1>
      <DarkWavyBg />
    </section>
  );
};

export default Hero;
