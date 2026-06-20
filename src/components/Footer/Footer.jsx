import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Footer.css";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer className="footer-section" ref={ref}>
      <div className="footer-top-line" aria-hidden="true" />
      <div className="footer-glow" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-column footer-brand">
            <h3>Dr.saravanaacademy</h3>
            <p>
              Empowering communities through
              education, healthcare and social
              welfare initiatives.
            </p>

            <ul className="footer-social" aria-label="Social media links">
              <li>
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.46.66.26 1.22.6 1.77 1.15.5.5.88 1.1 1.15 1.77.24.64.41 1.36.46 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.46 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.24-1.36.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.24-.64-.41-1.36-.46-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.46-2.43.26-.66.6-1.22 1.15-1.77a4.9 4.9 0 0 1 1.77-1.15c.64-.24 1.36-.41 2.43-.46C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.5v-7l6.27 3.5-6.27 3.5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Programs</h4>
            <ul>
              <li>Medical</li>
              <li>Education</li>
              <li>Trust</li>
              <li>Events</li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <i className="footer-icon footer-icon-pin" aria-hidden="true" />
                <span>7-A Maruthupandiar Nagar, 4th Main Road, Narimedu, Madurai - 625002</span>
              </li>
              <li>
                <i className="footer-icon footer-icon-phone" aria-hidden="true" />
                <a href="tel:+916380319582">+91 6380319582</a>
              </li>
              <li>
                <i className="footer-icon footer-icon-mail" aria-hidden="true" />
                <a href="mailto:Drsaravanaacademy@gmail.com">Drsaravanaacademy@gmail.com</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <span className="footer-bottom-copy">
            © 2026 <span>Dr.saravanaacademy</span>. All Rights Reserved.
          </span>
          <span className="footer-bottom-credit">
            Designed with care for the community
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
