import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="name-line-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="name-stack">
            <h1 className="first-name">CARMEN</h1>
            <h1 className="last-name">FOONG</h1>
          </div>
          <div className="divider-line"></div>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A positive, action-oriented, and dependable individual passionate
            about digital storytelling, community engagement, and graphic design
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
