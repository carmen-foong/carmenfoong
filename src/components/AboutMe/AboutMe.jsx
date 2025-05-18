import React from "react";
import profileImage from "/carmen.jpg"; // Update with your image path
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AboutMe = () => {
  return (
    <>
      <style>{`
        .about-me-container {
          background-color: #c4dc49;
          min-height: 100vh;
          padding: 3rem 2rem;
          color: #333;
          line-height: 1.7;
        }

        .about-me-heading {
          text-align: center;
          margin-bottom: 0.5rem;
          font-size: 2.8rem;
          color: #2a2a2a;
        }

        .about-me-subheading {
          text-align: center;
          margin-bottom: 2.5rem;
          font-size: 1.3rem;
          font-weight: 400;
          color: #444;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-me-content {
          display: flex;
          flex-direction: row;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-me-text {
          flex: 1;
          font-size: 1.1rem;
        }

        .about-me-intro {
          font-size: 1.2rem;
          margin-bottom: 1.8rem;
        }

        .about-me-passions {
          margin-top: 2rem;
          background-color: rgba(255, 255, 255, 0.3);
          padding: 1.5rem;
          border-radius: 8px;
        }

        .about-me-passions h3 {
          margin-top: 0;
          color: #2a2a2a;
        }

        .about-me-passions ul {
          padding-left: 1.2rem;
        }

        .about-me-passions li {
          margin-bottom: 0.5rem;
        }

        .about-me-image {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-me-image img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          margin-bottom: 1rem;
        }

        .image-caption {
          font-style: italic;
          color: #555;
          text-align: center;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .about-me-content {
            flex-direction: column;
          }

          .about-me-heading {
            font-size: 2.2rem;
          }

          .about-me-subheading {
            font-size: 1.1rem;
          }

          .about-me-image {
            order: -1;
            margin-bottom: 2rem;
          }
        }
      `}</style>
      <Navbar />
      <div className="about-me-container">
        <h1 className="about-me-heading">ABOUT ME</h1>
        <h2 className="about-me-subheading">
          Digital Communications and Integrated Media Undergraduate at SIT |
          Community Engagement and Digital Storytelling
        </h2>

        <div className="about-me-content">
          <div className="about-me-text">
            <p className="about-me-intro">
              Hello! I am Carmen Foong, a Final Year Arts Business Management
              student at Ngee Ann Polytechnic. Joining Drama Club in secondary
              school out of mere curiosity, my interest-turned-passion has
              brought me a long way, and I am now pursuing a career in the arts!
            </p>
            <p>
              Behind-the-scenes work has been a long-time passion of mine as I
              love its dynamic yet challenging nature, and how it serves as the
              very backbone of productions and events. My strong organizational
              and leadership skills make me a great person to work with, and I
              carry out my duties with a strong sense of responsibility and
              integrity.
            </p>
            <p>
              When I'm not working on productions, I write poems to express
              myself, and live by the motto:
              <em>"Work hard, play harder."</em> I believe in the power of
              storytelling to connect communities and create meaningful
              experiences.
            </p>
            <div className="about-me-passions">
              <h3>My Passions:</h3>
              <ul>
                <li>Arts administration and production</li>
                <li>Community engagement through the arts</li>
                <li>Digital storytelling and media</li>
                <li>Creative writing and poetry</li>
                <li>Event planning and coordination</li>
              </ul>
            </div>
          </div>
          <div className="about-me-image">
            <img src={profileImage} alt="Carmen Foong" />
            <div className="image-caption">
              Carmen Foong - Arts Enthusiast & Storyteller
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
