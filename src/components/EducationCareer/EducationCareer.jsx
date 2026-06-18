import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import TrustIcon from "../shared/TrustIcons";
import "./EducationCareer.css";

const timeline = [
  { step: "01", title: "Career Assessment", desc: "Understanding goals, strengths, and career aspirations." },
  { step: "02", title: "Skill Training", desc: "Industry-ready workshops in communication, technology, and soft skills." },
  { step: "03", title: "Interview Coaching", desc: "Mock interviews, resume reviews, and presentation skills." },
  { step: "04", title: "Job Placement", desc: "Connecting trained candidates with employment opportunities." },
  { step: "05", title: "Ongoing Mentorship", desc: "Continued guidance for long-term career success." },
];

function EducationCareer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="education-career trust-section trust-section--white" id="placement-training" ref={ref}>
      <div className="container">
        <SectionHeader
          icon={<TrustIcon name="briefcase" size={28} />}
          label="Placement Training"
          title="Your Career"
          highlight="Roadmap to Success"
          description="A structured pathway from skill assessment to job placement — helping youth build meaningful careers."
        />

        <div className="education-layout">
          <motion.div
            className="placement-image"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img src="https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362339/doctorcheck_mcfkap.png" alt="Placement training" />
          </motion.div>

          <div className="career-timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={item.step}
                className="timeline-item"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              >
                <div className="timeline-marker">
                  <span>{item.step}</span>
                  {i < timeline.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationCareer;
