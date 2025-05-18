import { motion } from "framer-motion";
import React from "react";

const heroStyles = `
  .hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 75vh;
    padding: 2rem;
    background-color: #f8a76a;
    overflow: hidden;
  }
  .hero-content {
    max-width: 1200px;
    width: 100%;
    position: relative;
    z-index: 2;
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
    font-size: 6.2rem;
    font-weight: 700;
    color: #111;
    margin: 0;
    border-radius: 0.5rem;
    padding: 0.5rem 1.2rem;
    box-shadow: none;
    display: inline-block;
  }
  .divider-line {
    flex-grow: 1;
    height: 2px;
    background-color: #111;
    opacity: 0.5;
  }
  .hero-subtitle {
    font-size: 1rem;
    color: #111;
    margin: 0;
    max-width: 800px;
    border-radius: 0.5rem;
    padding: 0.5rem 1.2rem;
    box-shadow: none;
    display: inline-block;
    text-align: justify;
  }
  .hero-horizontal-divider {
    width: 100%;
    border: none;
    border-top: 2px solid #111;
    opacity: 0.25;
    margin: 4rem 0 4rem 0;
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
      font-size: 6.2rem;
    }
    .hero-subtitle {
      font-size: 0.95rem;
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    .first-name, .last-name {
      font-size: 4.2rem;
    }
    .hero-subtitle {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 480px) {
    .hero {
      padding: 1.5rem;
    }
    .first-name, .last-name {
      font-size: 3.2rem;
    }
    .hero-subtitle {
      font-size: 0.8rem;
    }
  }
  `;

const Hero = () => {
  return (
    <>
      <style>{heroStyles}</style>
      <section className="hero">
        {/* Decorative PNGs */}
        <img
          src="Portfolio Graphics/41.png"
          alt="Decorative 41"
          style={{
            position: "absolute",
            top: "-7.5rem", // -120px
            left: "calc(30vw - 3rem)", // -48px
            width: "18.75rem", // 300px
            zIndex: 10,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
        <img
          src="Portfolio Graphics/27.png"
          alt="Decorative 27"
          style={{
            position: "absolute",
            top: "2rem", // 32px
            right: "-3.125rem", // -50px
            width: "12.5rem", // 200px
            zIndex: 10,
            pointerEvents: "none",
            userSelect: "none",
            transform: "rotate(30deg)"
          }}
        />
        <img
          src="Portfolio Graphics/23.png"
          alt="Decorative 23"
          style={{
            position: "absolute",
            bottom: "2rem", // 32px
            left: "-3.75rem", // -60px
            width: "9.375rem", // 150px
            zIndex: 10,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
        <img
          src="Portfolio Graphics/37.png"
          alt="Decorative 37"
          style={{
            position: "absolute",
            bottom: "-2rem", // -32px
            right: "8rem", // 200px
            width: "9.375rem", // 150px
            zIndex: 10,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
        <div className="hero-content">
          <motion.div
            className="name-line-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="name-stack">
              <p className="first-name">CARMEN</p>
              <p className="last-name">FOONG</p>
            </div>
            <hr className="hero-horizontal-divider" />
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A positive, action-oriented, and dependable individual passionate
              about <b>digital storytelling, community engagement</b>, and <b>graphic design</b>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
