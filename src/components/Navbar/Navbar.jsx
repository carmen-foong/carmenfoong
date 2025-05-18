import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Embedded CSS
const navbarStyles = `
.nav-wrapper {
  background-color: #9bc3ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  position: relative;
  z-index: 100;
  border-bottom: 2px solid black;
}

/* Hamburger button */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 110;
}

.hamburger-line {
  display: block;
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: #333;
  left: 8px;
  transition: all 0.3s ease;
}

.hamburger-line.top {
  top: 12px;
}

.hamburger-line.middle {
  top: 19px;
}

.hamburger-line.bottom {
  top: 26px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links.desktop li {
  background-color: whitesmoke;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  border: 2px solid black;
  cursor: pointer;
}

.nav-links.desktop li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

/* Mobile styles */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .nav-links.mobile {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #9bc3ff;
    overflow: hidden;
    flex-direction: column;
    gap: 0;
    padding: 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-links.mobile li {
    padding: 1.2rem;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .nav-links.mobile li a {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    font-weight: 500;
    display: block;
    width: 100%;
  }

  .nav-links.mobile li:last-child {
    border-bottom: none;
  }
}
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = navbarStyles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const hamburgerVariants = {
    top: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: 45, y: 7 },
    },
    middle: {
      closed: { opacity: 1 },
      open: { opacity: 0 },
    },
    bottom: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: -45, y: -7 },
    },
  };

  return (
    <nav className="nav-wrapper">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src="src/Portfolio Graphics/4.png"
            alt="Logo"
            style={{
              maxHeight: "48px",
              filter: "brightness(0) invert(0)",
              objectFit: "contain",
              marginRight: "8px",
            }}
          />
          CREATIVE PORTFOLIO
        </Link>
      </motion.h1>

      {isMobile && (
        <motion.button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          aria-label="Menu"
        >
          <motion.span
            className="hamburger-line top"
            variants={hamburgerVariants.top}
          />
          <motion.span
            className="hamburger-line middle"
            variants={hamburgerVariants.middle}
          />
          <motion.span
            className="hamburger-line bottom"
            variants={hamburgerVariants.bottom}
          />
        </motion.button>
      )}

      <AnimatePresence>
        {isMobile ? (
          <motion.ul
            className="nav-links mobile"
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
          >
            {[
              {
                name: "MY WORKS",
                path: "/myworks",
              },
              {
                name: "ABOUT",
                path: "/about",
              },
              {
                name: "CONTACT",
                path: "/contact",
              },
            ].map((item) => (
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "black" }}
                key={item.name}
              >
                <motion.li
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.name}</span>
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        ) : (
          <ul className="nav-links desktop">
            {[
              {
                name: "MY WORKS",
                path: "/myworks",
              },
              {
                name: "ABOUT",
                path: "/about",
              },
              {
                name: "CONTACT",
                path: "/contact",
              },
            ].map((item) => (
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "black" }}
                key={item.name}
              >
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.name}</span>
                </motion.li>
              </Link>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
