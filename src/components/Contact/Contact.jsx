import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const styles = `
.contact-container {
  background-color: #fea7ef;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-heading {
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
}

.google-form-iframe {
  width: 100%;
  max-width: 640px;
  height: 900px;
  border: none;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .google-form-iframe {
    height: 1100px;
  }
  .contact-heading {
    font-size: 2rem;
  }
}
`;

const Contact = () => {
  return (
    <>
      <style>{styles}</style>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-heading">Contact Me</h1>
        <iframe
          className="google-form-iframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdfZhze2xQbfv2cdmt_schvohuDcUN6ENggS41hYiLXQd_bPQ/viewform?embedded=true"
          title="Contact Google Form"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
