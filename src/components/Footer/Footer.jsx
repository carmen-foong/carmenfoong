import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
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
            src="" // Add your image path here
            alt="Decorative element"
            className="vertical-image"
          />
        </div>

        <div className="footer-column connect-column">
          <div className="connect-content">
            <h3 className="footer-heading">Let's Connect!</h3>
            <div className="email-link">
              <a href="mailto:carmenfoong5@gmail.com">carmenfoong5@gmail.com</a>
            </div>
            <div className="social-icons">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="social-icon" size={28} />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" size={28} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Carmen Foong. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
