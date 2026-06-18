import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./ContactBanner.css";

function ContactBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="contact-banner bg-radial-warm" ref={ref}>
      <div className="contact-wrapper">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="breadcrumb">
            <Link to="/">Home</Link> / Contact
          </span>

          <h1>
            
            V's Care  <span className="gradient-text">& Let's Grow Together</span>
          </h1>

          <p>
           Empowering students and young professionals with industry-ready skills, career guidance, placement training, and real-world learning to achieve successful careers.
          </p>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img
            src="https://res.cloudinary.com/dbrymrvqu/image/upload/v1781498416/ChatGPT_Image_Jun_15_2026_10_09_39_AM_ze1gck.png"
            alt="Community support"
          />

        </motion.div>
      </div>
    </section>
  );
}

export default ContactBanner;
