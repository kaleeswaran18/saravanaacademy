import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CTAButton from "../shared/CTAButton";
import TrustIcon from "../shared/TrustIcons";
import "./VolunteerJourney.css";

const steps = [
  {
    step: "01",
    title: "Join",
    desc: "Register your interest and connect with our volunteer coordination team.",
    icon: "handsHelping",
  },
  {
    step: "02",
    title: "Participate",
    desc: "Attend orientation and get matched with programs that fit your skills.",
    icon: "clipboardList",
  },
  {
    step: "03",
    title: "Serve",
    desc: "Contribute at education camps, medical events, and community programs.",
    icon: "users",
  },
  {
    step: "04",
    title: "Create Impact",
    desc: "See the difference your time makes in the lives of families and youth.",
    icon: "star",
  },
];

function VolunteerJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const navigate = useNavigate();

  return (
    <section className="volunteer-journey trust-section trust-section--white" id="volunteer-journey" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get Involved</span>
          <h2 className="section-heading">
            Your <span className="gradient-text">Volunteer Journey</span>
          </h2>
          <p className="section-desc">
            Four simple steps to become part of our community service mission.
          </p>
        </div>

        <div className="journey-timeline">
          <div className="journey-line" aria-hidden="true" />
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="journey-step"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="journey-step-marker">
                <span className="journey-step-num">{s.step}</span>
                <span className="journey-step-icon">
                  <TrustIcon name={s.icon} size={20} />
                </span>
              </div>
              <motion.div
                className="journey-step-card"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="journey-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <CTAButton onClick={() => navigate("/contact")}>Join as Volunteer</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

export default VolunteerJourney;
