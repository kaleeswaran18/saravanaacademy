import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CTAButton from "../shared/CTAButton";
import "./FinalCTA.css";

function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const navigate = useNavigate();

  return (
    <section className="final-cta trust-section" id="contact-cta" ref={ref}>
      <div className="final-cta-bg" aria-hidden="true" />
      <div className="final-cta-shapes" aria-hidden="true">
        <div className="final-shape final-shape-1" />
        <div className="final-shape final-shape-2" />
      </div>
      <div className="container">
        <motion.div
          className="final-cta-content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Together We Can Build <span className="gradient-text">Stronger Communities</span>
          </h2>
          <p>
            Your time, skills, and passion can transform lives. Join our volunteer network
            or reach out to learn more about our programs.
          </p>
          <div className="final-cta-buttons">
            <CTAButton onClick={() => navigate("/contact")}>Join as Volunteer</CTAButton>
            <CTAButton variant="outline" onClick={() => navigate("/contact")}>
              Contact Our Trust
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
