import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function SectionHeader({ label, title, highlight, description, icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="premium-section-header"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {icon && <span className="premium-section-icon" aria-hidden="true">{icon}</span>}
      <span className="premium-section-label">{label}</span>
      <h2 className="premium-section-title">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && <p className="premium-section-desc">{description}</p>}
      <div className="premium-section-underline" aria-hidden="true" />
    </motion.div>
  );
}

export default SectionHeader;
