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
              A positive, action-oriented and dependable individual who believes in the power of storytelling as a tool to build and bridge communities.
            </p>
            <p>
              As an Arts Business Management graduate, I have acquired a variety of skills in both the creative and business aspects of the arts - from community outreach, to programme planning and visual communication. My 6-month marketing internship at Singapore Drama Educators Association also showed me the power of storytelling as a tool to build a brand and connect with audiences, and my strength in doing so.
            </p>
            <p>
              Wanting to combine both my passions in creative community engagement and digital storytelling, I decided to pursue a Degree in Digital Communications and Integrated Media to equip myself with skills in digital communications and media. I believe that this will allow me to reach and touch the right audiences with the right words, and create value in the lives of others.
            </p>
            <p>
              In my free time, I enjoy crocheting, playing the piano and writing poems, and have published a poetry blog titled 'FIVEODES' for my beloved self-written poems! I love life, and my goal is to work hard but play even harder.
            </p>
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
