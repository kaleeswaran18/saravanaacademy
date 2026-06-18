import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import TrustIcon from "../shared/TrustIcons";
import "./SuccessStories.css";

const stories = [
{
  name: "Dr. P. Saravanan",
  role: "Founder, Surya Trust | Ex. MLA",
  quote:
    "Healthcare, education, and employment are the foundation of a progressive society. My mission is to create opportunities so that every youngster in Tamil Nadu can learn, grow, and build a successful future with dignity.",
  highlight: "Healthcare • Education • Employment",
  image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362339/doctorcheck_mcfkap.png",
},
  {
    name: "Dr. A.P.J. Abdul Kalam",
    role: "Former President of India",
    quote:
      "The ignited minds of the youth are the most powerful resource on the earth.Excellence happens not by accident. It is a process.",
    highlight: "Dream • Learn • Achieve",
    image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362363/AbdulKalam_y7vvvr.jpg",
  },
  {
    name: "Dr. B.R. Ambedkar",
    role: "Father of the Indian Constitution",
    quote:
      "Cultivation of mind should be the ultimate aim of human existence.",
    highlight: "Education Empowers",
    image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362309/Ambedkar_us6tpw.jpg",
  },
  {
    name: "Swami Vivekananda",
    role: "Spiritual Leader",
    quote:
      "Arise, awake, and stop not until the goal is reached.",
    highlight: "Never Give Up",
    image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362365/Swami_Vivekanand_jdv9pc.jpg",
  },
  {
    name: "Nelson Mandela",
    role: "Former President of South Africa",
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
    highlight: "Education Changes Lives",
    image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362349/NelsonMandela_dbtugn.jpg",
  },
  {
    name: "N. R. Narayana Murthy",
    role: "Founder of Infosys",
    quote:
      "Excellence is a continuous journey, never a destination.",
    highlight: "Build Skills • Build Careers",
    image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362343/NarayanaMurthy_vhntnc.jpg",
  },
];

function SuccessStories() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % stories.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="success-stories trust-section trust-section--cream" id="stories" ref={ref}>
      <div className="container">
        <SectionHeader
          icon={<TrustIcon name="star" size={28} />}
          label="Empowering the Youth, Building the Nation"
          title="V's Care Youngsters"
          highlight="Think Beyond the Impossible"
          description="Dr. P. Saravanan firmly believes that today's youth are the foundation of tomorrow's nation. Through quality education, skill development, healthcare, and employment opportunities, he is committed to empowering every young individual to build a stronger and more prosperous society..."
        />

        <div className="stories-layout">
          <div className="stories-cards-grid">
            {stories.map((story, i) => (
              <motion.button
                key={story.name}
                type="button"
                className={`story-mini-card ${current === i ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <img src={story.image} alt={story.name} />
                <div>
                  <strong>{story.name}</strong>
                  <span>{story.role}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="story-featured gradient-top-border"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="story-featured-image">
                <img src={stories[current].image} alt={stories[current].name} />
                <span className="story-highlight-badge">{stories[current].highlight}</span>
              </div>
              <div className="story-featured-content">
                <p className="story-quote">"{stories[current].quote}"</p>
                <h4>{stories[current].name}</h4>
                <span>{stories[current].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
