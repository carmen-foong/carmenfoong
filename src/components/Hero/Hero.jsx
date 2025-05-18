  import { motion } from "framer-motion";
  import React from "react";

  const heroStyles = `
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    background-color: #f8a76a;
  }
  .hero-content {
    max-width: 1200px;
    width: 100%;
  }
  .name-line-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .name-stack {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }
  .first-name, .last-name {
    font-size: 7rem;
    font-weight: 700;
    color: #000;
    margin: 0;
  }
  .divider-line {
    flex-grow: 1;
    height: 2px;
    background-color: #000;
    opacity: 0.2;
  }
  .hero-subtitle {
    font-size: 1.5rem;
    color: #000;
    margin: 0;
    max-width: 500px;
  }
  @media (max-width: 1024px) {
    .name-line-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .divider-line {
      width: 100%;
      height: 2px;
    }
    .first-name, .last-name {
      font-size: 7rem;
    }
    .hero-subtitle {
      font-size: 1.25rem;
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    .first-name, .last-name {
      font-size: 5rem;
    }
    .hero-subtitle {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 480px) {
    .hero {
      padding: 1.5rem;
    }
    .first-name, .last-name {
      font-size: 4rem;
    }
    .hero-subtitle {
      font-size: 1rem;
    }
  }
  `;

  const Hero = () => {
    return (
      <>
        <style>{heroStyles}</style>
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
              <div className="divider-line"> </div>
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
      </>
    );
  };

  export default Hero;
