import React from "react";
import "./AboutMe.css";
import profileImage from "/src/assets/carmen.jpg"; // Update with your image path
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AboutMe = () => {
  return (
    <>
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
