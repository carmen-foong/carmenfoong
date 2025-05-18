import { motion } from "framer-motion";
import { FaLinkedin , FaMailBulk } from "react-icons/fa";
import React from "react";

const footerStyles = `
.footer {
  background-color: #c4dc49;
  color: #333;
  padding: 3rem 2rem 1rem;
  max-width: 100vw;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}
.footer-column {
  margin-bottom: 2rem;
}
.name-image-column {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  min-width: 200px;
}
.connect-column {
  display: flex;
  justify-content: flex-end;
  min-width: 200px;
}
.connect-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}
.name-stack {
  display: flex;
  flex-direction: column;
}
.name-text {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
}
.portfolio-text {
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0.5rem 0 0;
}
.vertical-image {
  height: 120px;
  width: auto;
  object-fit: cover;
}
.footer-heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 0;
  position: relative;
  display: inline-block;
}
.footer-heading::after {
  content: "";
  position: absolute;
  bottom: -8px;
  right: 0;
  width: 50px;
  height: 2px;
  background-color: #333;
}
.email-link a {
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  text-align: right;
}
.email-link a:hover {
  color: #000;
  text-decoration: underline;
}
.social-icons {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
}
.social-icon {
  font-size: 1.8rem;
  color: #333;
  transition: transform 0.3s ease, color 0.3s ease;
}
.social-icon:hover {
  color: #000;
  transform: scale(1.1);
}
.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 3rem;
  }
  .name-image-column {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .connect-column {
    align-items: center;
    justify-content: center;
  }
  .connect-content {
    align-items: center;
  }
  .vertical-image {
    height: 100px;
    margin-top: 1rem;
  }
  .footer-heading::after {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
  .social-icons {
    justify-content: center;
  }
  .email-link a {
    text-align: center;
  }
}
`;

const Footer = () => {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-column name-image-column">
            <div className="name-stack">
              <h3 className="name-text">Carmen</h3>
              <h3 className="name-text">Foong</h3>
              <h3 className="portfolio-text">Creative Portfolio</h3>
            </div>
            <img
              src="Portfolio Graphics/12.png"
              alt="Decorative element"
              className="vertical-image"
            />
          </div>

          <div className="footer-column connect-column">
            <div className="connect-content">
              <h3 className="footer-heading">Let's Connect!</h3>
              <div className="email-link">
                <a href="mailto:carmenfoong5@gmail.com">
                  carmenfoong5@gmail.com
                </a>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/carmenfoong5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="social-icon" size={28} />
                </a>
                <a
                  href="mailto:carmenfoong5@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mail"
                >
                  <FaMailBulk className="social-icon" size={28} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Carmen Foong. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
