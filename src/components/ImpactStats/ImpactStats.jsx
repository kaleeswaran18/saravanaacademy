import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "../shared/AnimatedCounter";
import SectionHeader from "../shared/SectionHeader";
import TrustIcon from "../shared/TrustIcons";
import "./ImpactStats.css";

const stats = [
  {
    value: "1000K+",
    label: "Surgeries",
    icon: "hospital",
  },
  {
    value: "30K+",
    label: "Placement Training Participants",
    icon: "graduationCap",
  },
  {
    value: "100+",
    label: "Medical Camps",
    icon: "heartbeat",
  },
  {
    value: "50+",
    label: "Awards & Recognitions",
    icon: "award",
  },
];

function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="impact-wall trust-section trust-section--cream" id="impact-stats" ref={ref}>
      <div className="impact-wall-glow" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          icon={<TrustIcon name="chartBar" size={28} />}
          label="Our Impact"
          title="Creating Positive Change"
          highlight="Through Service"
          description="Measurable impact across education, career development, healthcare, and community welfare."
        />

        <motion.div
          className="impact-wall-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="impact-wall-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <span className="impact-wall-icon">
                <TrustIcon name={stat.icon} size={28} />
              </span>
              <h3><AnimatedCounter value={stat.value} /></h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ImpactStats;
