import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import TrustIcon from "../shared/TrustIcons";
import "./MedicalEvents.css";

const events = [
  {
    date: "15 Mar",
    title: "Free Health Screening Camp",
    description: "Comprehensive health checkups and preventive care for underserved families.",
    location: "Madurai",
    type: "Health Camp",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
  {
    date: "22 Mar",
    title: "Women's Health Awareness Drive",
    description: "Awareness sessions and counseling on women's health and wellness.",
    location: "Rural Outreach",
    type: "Awareness",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    date: "05 Apr",
    title: "Eye Care & Vision Camp",
    description: "Free eye examinations and vision support for community members.",
    location: "Community Center",
    type: "Vision Care",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
  },
  {
    date: "18 Apr",
    title: "Nutrition & Wellness Workshop",
    description: "Interactive workshop on healthy nutrition and lifestyle practices.",
    location: "School Campus",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1576765607924-3f7b83f7f3d4",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function MedicalEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToActivities = () => {
    document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="medical-events trust-section trust-section--white" id="medical-events" ref={ref}>
      <div className="medical-events-bg" aria-hidden="true" />
      <div className="section-divider" aria-hidden="true" />

      <div className="container medical-events-container">
        <SectionHeader
          icon={<TrustIcon name="heartbeat" size={28} />}
          label="Medical Events"
          title="Health Camps &"
          highlight="Awareness Programs"
          description="Bringing healthcare and awareness directly to communities that need it most."
        />

        <motion.div
          className="events-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {events.map((ev) => (
            <motion.article
              key={ev.title}
              className="event-card gradient-top-border"
              variants={cardVariants}
            >
              <div className="event-image">
                <img src={ev.image} alt={ev.title} loading="lazy" />
                <span className="event-date-badge">{ev.date}</span>
                <span className="event-type-badge">{ev.type}</span>
                <div className="event-image-overlay" aria-hidden="true" />
              </div>

              <div className="event-body">
                <span className="event-type">{ev.type}</span>
                <h3>{ev.title}</h3>
                <p className="event-desc">{ev.description}</p>
                <p className="event-location">
                  <TrustIcon name="mapMarker" size={14} className="event-location-icon" />
                  {ev.location}
                </p>
                <button type="button" className="event-cta" onClick={scrollToActivities}>
                  View Details <span aria-hidden="true">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default MedicalEvents;
