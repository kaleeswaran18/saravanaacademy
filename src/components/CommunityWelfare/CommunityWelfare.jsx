import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import TrustIcon from "../shared/TrustIcons";
import "./CommunityWelfare.css";

const activities = [
  { icon: "home", title: "Family Support", desc: "Assistance programs for families facing economic and social challenges." },
  { icon: "userClock", title: "Senior Care", desc: "Outreach and wellness programs for elderly community members." },
  { icon: "leaf", title: "Rural Outreach", desc: "Taking welfare initiatives to villages and underserved areas." },
  { icon: "seedling", title: "Youth Empowerment", desc: "Leadership and life skills programs for young community members." },
  { icon: "calendarCheck", title: "Community Events", desc: "Cultural and social gatherings that strengthen community bonds." },
  { icon: "bullhorn", title: "Awareness Drives", desc: "Campaigns on health, education, safety, and social responsibility." },
];

function CommunityWelfare() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="community-welfare trust-section trust-section--warm" id="community-welfare" ref={ref}>
      <div className="container">
        <SectionHeader
          icon={<TrustIcon name="users" size={28} />}
          label="Community Welfare"
          title="Building Stronger"
          highlight="Communities Together"
          description="Holistic welfare programs that uplift families, empower youth, and strengthen the social fabric of our communities."
        />

        <div className="welfare-showcase">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              className="welfare-card"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="welfare-card-icon">
                <TrustIcon name={a.icon} size={24} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <span className="welfare-card-line" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityWelfare;
