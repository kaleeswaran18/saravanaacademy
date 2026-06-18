import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
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

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""} ${atTop ? "at-top" : ""}`}>
      <div className="container">
        <NavLink className="logo" to="/">
          <span className="logo-text">Dr.saravana academy</span>
        </NavLink>

        <ul className="desktop-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>

        <motion.button
          className={`menu-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span /><span /><span />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-active" : "")} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
