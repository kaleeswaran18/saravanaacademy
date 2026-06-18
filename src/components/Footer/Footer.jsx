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
      <div className="container">
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-column">
            <h3>Dr.saravanaacademy</h3>
            <p>
              Empowering communities through
              education, healthcare and social
              welfare initiatives.
            </p>
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

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>7-A Maruthupandiar Nagar, 4th Main Road, Narimedu, Madurai - 625002</li>
              <li>+91 6380319582</li>
              <li>Drsaravanaacademy@gmail.com</li>
            </ul>
          </div>
        </motion.div>

        <div className="footer-bottom">
          © 2026 <span>Dr.saravanaacademy</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
