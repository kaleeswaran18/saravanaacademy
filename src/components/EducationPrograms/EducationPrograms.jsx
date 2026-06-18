import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import TrustIcon from "../shared/TrustIcons";
import "./EducationPrograms.css";

const programs = [
  {
    icon: "brain",
    title: "Logical Thinking",
    desc: "Enhancing analytical thinking, reasoning, and problem-solving skills to confidently clear MNC aptitude assessments.",
  },
  {
  icon: "graduationCap",
  title: "Mock Interviews",
  desc: "Practice real-time HR and technical interviews with expert guidance, improve communication skills, and gain the confidence to succeed in top MNC recruitment drives.",
},
  {
    icon: "code",
    title: "Coding & Technical Skills",
    desc: "Master programming fundamentals, data structures, algorithms, and coding interview techniques for top MNC opportunities.",
  },
  {
    icon: "briefcase",
    title: "Placement Preparation",
    desc: "Mock interviews, resume building, communication skills, and HR interview training to help youngsters secure careers in leading MNCs.",
  },
];

function EducationPrograms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="education-programs trust-section trust-section--cream" id="education-programs" ref={ref}>
      <div className="section-bg-accent" aria-hidden="true" />
      <div className="container">
        <SectionHeader
  icon={<TrustIcon name="graduationCap" size={28} />}
  label="Placement Training"
  title="Building Future Careers for"
  highlight="Youngsters"
  description="Empowering young minds with logical reasoning, aptitude, coding fundamentals, communication, and interview preparation to secure rewarding careers in leading multinational companies."
/>

        <div className="edu-programs-layout">
          <motion.div
            className="edu-programs-image"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362337/code_idyysu.png"
              alt="Education support"
            />
            <div className="edu-programs-badge">
              <strong>10000+</strong>
              <span>Students Guided</span>
            </div>
          </motion.div>

          <div className="edu-programs-grid">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                className="edu-program-card"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 + i * 0.08 }}
              >
                <span className="edu-program-icon">
                  <TrustIcon name={p.icon} size={24} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationPrograms;
