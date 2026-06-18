import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import CTAButton from "../shared/CTAButton";
import TrustIcon from "../shared/TrustIcons";
import "./VolunteerSection.css";

const roles = [
  { icon: "clipboardList", title: "Event Coordinator", desc: "Help plan and manage trust events and community programs." },
  { icon: "graduationCap", title: "Student Mentor", desc: "Guide students in academics, career choices, and personal growth." },
  { icon: "tools", title: "Training Support", desc: "Assist in skill development and placement training sessions." },
  { icon: "heartbeat", title: "Medical Camp Support", desc: "Support health camps with logistics and patient coordination." },
  { icon: "bullhorn", title: "Awareness Campaign Volunteer", desc: "Spread awareness on health, education, and social welfare." },
];

function VolunteerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="volunteer-section trust-section trust-section--cream bg-radial-warm" id="volunteer" ref={ref}>
      <div className="container">
        <SectionHeader
          icon={<TrustIcon name="handsHelping" size={28} />}
          label="Volunteer Opportunities"
          title="Join Our"
          highlight="Mission of Service"
          description="Your time and skills can transform lives. Explore volunteer roles and become part of our community."
        />

        <div className="volunteer-grid">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="volunteer-card gradient-top-border glass-card"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <span className="volunteer-icon">
                <TrustIcon name={role.icon} size={24} />
              </span>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="volunteer-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <CTAButton onClick={scrollToContact}>Become a Volunteer</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

export default VolunteerSection;
