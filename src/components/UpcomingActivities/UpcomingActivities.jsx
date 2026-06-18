import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import CTAButton from "../shared/CTAButton";
import TrustIcon from "../shared/TrustIcons";
import "./UpcomingActivities.css";

const activities = [
  { date: "Jun 2026", title: "Summer Education Camp", type: "Education", desc: "Intensive learning program for rural students." },
  { date: "Jul 2026", title: "Placement Training Batch", type: "Career", desc: "Job readiness and interview preparation workshop." },
  { date: "Aug 2026", title: "Community Health Camp", type: "Medical", desc: "Free health screening and awareness session." },
  { date: "Sep 2026", title: "Youth Awareness Summit", type: "Awareness", desc: "Social responsibility and leadership program." },
];

function UpcomingActivities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="upcoming-activities trust-section trust-section--warm bg-radial-warm" id="activities" ref={ref}>
      <div className="container">
        <SectionHeader
          icon={<TrustIcon name="calendarAlt" size={28} />}
          label="Upcoming Events"
          title="Programs"
          highlight="On The Horizon"
          description="Join us at our upcoming education camps, training batches, and community events."
        />

        <div className="activities-timeline">
          {activities.map((act, i) => (
            <motion.div
              key={act.title}
              className="activity-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="activity-date">
                <span>{act.date}</span>
              </div>
              <div className="activity-card glass-card gradient-top-border">
                <span className="activity-type">{act.type}</span>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="activities-cta">
          <CTAButton onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>
            View All Activities
          </CTAButton>
        </div> */}
      </div>
    </section>
  );
}

export default UpcomingActivities;
