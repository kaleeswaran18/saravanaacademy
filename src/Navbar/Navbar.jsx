import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const mobilePanelVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  },
};

const NAV_LINKS = [
  { to: "/", label: "Home" },
  
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const location = useLocation();
  const navRef = useRef(null);
  const atTop = location.pathname === "/" && !scrolled;

  /* ── Close menu on route change ── */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* ── Track actual nav height for mobile panel ── */
  useEffect(() => {
    const update = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [scrolled]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && isOpen)
        setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={`custom-navbar ${scrolled ? "scrolled" : ""} ${atTop ? "at-top" : ""}`}
    >
      <div className="container">
        {/* ── LOGO ── */}
        <NavLink className="logo" to="/" aria-label="Dr. Saravana Academy — Home">
          <span className="logo-photo-wrap">
            <img
              src="https://res.cloudinary.com/dbrymrvqu/image/upload/v1782376593/ChatGPT_Image_Jun_15__2026__12_23_47_PM-removebg-preview_nxwgfg.png"
              alt=""
              className="logo-photo"
              width="62"
              height="62"
              loading="eager"
              decoding="async"
            />
          </span>
          <span className="logo-text-wrap">
            <span className="logo-sub" aria-hidden="true">Madurai</span>
            <span className="logo-text">Dr.Saravanan's Academy</span>
          </span>
        </NavLink>

        {/* ── DESKTOP MENU ── */}
        <ul className="desktop-menu" role="list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        className="nav-pill"
                        layoutId="navPill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="nav-label">{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── HAMBURGER ── */}
        <motion.button
          type="button"
          className={`menu-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen((v) => !v)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.04 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </motion.button>
      </div>

      {/* ── MOBILE PANEL ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
              style={{ top: navHeight }}
            />

            <motion.nav
              id="mobile-menu"
              className="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              variants={mobilePanelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ top: navHeight }}
            >
              {NAV_LINKS.map(({ to, label }) => (
                <motion.div
                  key={to}
                  className="mobile-menu-item"
                  variants={mobileItemVariants}
                >
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
