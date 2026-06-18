import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CoreServices.css";
import TrustIcon from "../shared/TrustIcons";

const services = [
  { icon: "book", title: "Education Support", desc: "Scholarship guidance, academic mentoring, and learning resources for deserving students." },
  { icon: "briefcase", title: "Placement Training", desc: "Interview preparation, resume building, and job readiness programs for youth." },
  { icon: "tools", title: "Skill Development", desc: "Hands-on workshops and vocational training to build employable skills." },
  { icon: "heartbeat", title: "Medical Events", desc: "Free health camps, awareness drives, and preventive healthcare initiatives." },
  { icon: "users", title: "Community Welfare", desc: "Support programs for families, senior citizens, and underserved communities." },
  { icon: "bullhorn", title: "Awareness Programs", desc: "Campaigns on health, education, safety, and social responsibility." },
];

function CoreServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="core-services trust-section trust-section--white" id="services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-heading">Our <span className="gradient-text">Core Services</span></h2>
          <p className="section-desc">Comprehensive support programs designed to uplift lives and strengthen communities.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card gradient-top-border glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={{ y: -10 }}
            >
              <motion.span
                className="service-icon"
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <TrustIcon name={s.icon} size={28} />
              </motion.span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreServices;
