import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
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
              >
                <motion.li
                  key={item.name}
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
              >
                <motion.li
                  key={item.name}
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
