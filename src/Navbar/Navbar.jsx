import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const mobilePanelVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30, staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const atTop = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <nav ref={navRef} className={`custom-navbar ${scrolled ? "scrolled" : ""} ${atTop ? "at-top" : ""}`}>
      <div className="container">
        <NavLink className="logo" to="/">
          <span className="logo-text">Dr.saravana academy</span>
        </NavLink>

        <ul className="desktop-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      className="nav-pill"
                      layoutId="navPill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="nav-label">Home</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-active" : "")}>
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      className="nav-pill"
                      layoutId="navPill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="nav-label">Contact</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>

        <motion.button
          type="button"
          className={`menu-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.04 }}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            variants={mobilePanelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="mobile-menu-item" variants={mobileItemVariants}>
              <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")} onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </motion.div>
            <motion.div className="mobile-menu-item" variants={mobileItemVariants}>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-active" : "")} onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;