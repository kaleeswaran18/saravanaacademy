import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import CTAButton from "../shared/CTAButton";
import AnimatedCounter from "../shared/AnimatedCounter";
import "./AboutSection.css";

const EASE = [0.22, 1, 0.36, 1];

const pillars = [
  {
    title: "Saravana Multi-Speciality Hospital Pvt Ltd",
    text: "Providing quality, affordable, and compassionate healthcare with advanced medical facilities, ensuring every patient receives exceptional treatment and personalized care.",
    icon: "hospital",
  },
  {
    title: "Dr. Saravana Academy",
    text: "Empowering college students across Tamil Nadu through free career seminars, industry-oriented skill development, affordable placement training, and dedicated career support to help them achieve successful careers.",
    icon: "academy",
  },
  {
    title: "Surya Trust",
    text: "Dedicated to saving lives by providing free heart surgeries for children and offering high-quality medical treatments at up to 50% reduced costs for underprivileged and economically weaker families.",
    icon: "heart",
  },
  {
    title: "Founder's Vision",
    text: "Dr. P. Saravanan firmly believes that quality education, accessible healthcare, and meaningful employment are the three pillars of a better society. Guided by this vision, he continues to provide free and affordable initiatives that empower individuals, uplift families, and create lasting positive change across communities.",
    icon: "vision",
  },
];

// Reuses the same proven numbers shown in the Hero section for
// brand-consistent trust signals (no invented/unverified stats).
const trustStats = [
  { value: "10000+", label: "Students Supported" },
  { value: "2500+", label: "Training Programs" },
  { value: "100+", label: "Medical Camps" },
  { value: "50+", label: "Community Programs" },
];

const statsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const statReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

function PillarIcon({ type }) { const icons = { hospital: ( <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M7 3v18M17 3v18M5 7h14M5 21h14M10 10h4M12 8v4M9 21v-4h6v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /> </svg> ), academy: ( <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M2 9l10-5 10 5-10 5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /> <path d="M6 11v4c0 2 3 4 6 4s6-2 6-4v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /> </svg> ), heart: ( <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M12 21s-7-4.6-9-9c-1.2-2.8.4-6 3.7-6 2 0 3.2 1 4.3 2.6C12.1 7 13.3 6 15.3 6c3.3 0 4.9 3.2 3.7 6-2 4.4-9 9-9 9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /> <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /> </svg> ), vision: ( <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="1.8" /> <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" /> </svg> ), }; return <span className="pillar-icon">{icons[type]}</span>; }

function PillarCard({ pillar, delay, isInView }) {
  return (
    <motion.div
      className="pillar-card"
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: EASE }}
      whileHover={{ y: -6 }}
    >
      <PillarIcon type={pillar.icon} />
      <div>
        <h4>{pillar.title}</h4>
        <p>{pillar.text}</p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <section
      className="why-trust trust-section trust-section--white"
      id="about"
      ref={ref}
    >
      <div className="why-trust-glow" aria-hidden="true" />

      <div className="container">

        <SectionHeader
          label="About Our Founder"
          title="A Vision to Empower"
          highlight="Every Life"
          description="Dr. Saravanan's dream is to build a society where no one is left behind by ensuring access to quality education, healthcare, and meaningful employment opportunities."
        />

        {/* ---------- TRUST STATS ---------- */}
        <motion.div
          className="founder-stats"
          variants={statsContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          aria-label="Impact at a glance"
        >
          {trustStats.map((stat) => (
            <motion.div key={stat.label} className="founder-stat" variants={statReveal}>
              <strong className="founder-stat-value">
                <AnimatedCounter value={stat.value} />
              </strong>
              <span className="founder-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="founder-layout">

          {/* ---------- ROW 1 ---------- */}

          <div className="founder-row">

            <motion.div
              className="founder-media"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: .7, ease: EASE }}
            >

              <div className="media-frame">

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="founder-video"
                >
                  <source
                    src="https://res.cloudinary.com/dbrymrvqu/video/upload/v1781502385/Create_a_cinematic_AI_animatio_om745e.mp4"
                    type="video/mp4"
                  />
                </video>

              </div>

            </motion.div>

            <motion.div
              className="card-column"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: .7, ease: EASE }}
            >

              <PillarCard pillar={pillars[0]} delay={0.2} isInView={isInView}/>
              <PillarCard pillar={pillars[1]} delay={0.3} isInView={isInView}/>

            </motion.div>

          </div>

          {/* ---------- ROW 2 ---------- */}

          <div className="founder-row">

            <motion.div
              className="founder-media"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: .7, ease: EASE }}
            >

              <div className="media-frame">

                <img
                  src="https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362346/doctorsaravana_ad8lp1.png"
                  alt="Founder"
                />

              </div>

            </motion.div>

            <motion.div
              className="card-column"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: .7, ease: EASE }}
            >

              <PillarCard pillar={pillars[2]} delay={0.4} isInView={isInView}/>
              <PillarCard pillar={pillars[3]} delay={0.5} isInView={isInView}/>

            </motion.div>

          </div>

          <div className="founder-btn">

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} style={{ display: "inline-block" }}>
              <CTAButton
                onClick={() =>
                  document
                    .getElementById("impact-stats")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See Our Impact
              </CTAButton>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} style={{ display: "inline-block" }}>
              <CTAButton
                variant="outline"
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </CTAButton>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}