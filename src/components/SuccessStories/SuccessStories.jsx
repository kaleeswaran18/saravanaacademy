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
  name: "Malala Yousafzai",
  role: "Education Activist & Nobel Peace Prize Laureate",
  quote: "One child, one teacher, one book, and one pen can change the world.",
  highlight: "Education Empowers",
  image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1782392808/Malala_Yousafzai_Is_Married_Activist_Shares_First_Photos_from_Ceremony__Partners_for_Life_kemfyi.jpg"
},
  {
    name: "Dr. A.P.J. Abdul Kalam",
    role: "Former President of India",
    quote:
      "The ignited minds of the youth are the most powerful resource on the earth. Excellence happens not by accident. It is a process.",
    highlight: "Dream • Learn • Achieve",
    image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362363/AbdulKalam_y7vvvr.jpg",
  },
  {
  name: "Sudha Murty",
  role: "Author, Philanthropist & Educator",
  quote: "Education is the foundation upon which we build our future.",
  highlight: "Shaping Young Minds",
  image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1782392825/download_30_p13owb.jpg"
},
  {
    name: "Dr. B.R. Ambedkar",
    role: "Father of the Indian Constitution",
    quote: "Cultivation of mind should be the ultimate aim of human existence.",
    highlight: "Education Empowers",
    image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362309/Ambedkar_us6tpw.jpg",
  },
  {
    name: "Swami Vivekananda",
    role: "Spiritual Leader",
    quote: "Arise, awake, and stop not until the goal is reached.",
    highlight: "Never Give Up",
    image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362365/Swami_Vivekanand_jdv9pc.jpg",
  },
  {
    name: "Nelson Mandela",
    role: "Former President of South Africa",
    quote: "Education is the most powerful weapon which you can use to change the world.",
    highlight: "Education Changes Lives",
    image: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362349/NelsonMandela_dbtugn.jpg",
  },
  {
    name: "N. R. Narayana Murthy",
    role: "Founder of Infosys",
    quote: "Excellence is a continuous journey, never a destination.",
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

        {/* ── Hero Split Header ── */}
        <div className="stories-hero">
          {/* Left — Logo big */}
          <motion.div
            className="stories-hero-left"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img
                srcSet="https://res.cloudinary.com/dbrymrvqu/image/upload/v1782386142/ChatGPT_Image_Jun_25__2026__04_43_44_PM-removebg-preview_bjwltd.png"
              src=""
              alt="V's Care Youngsters"
              className="stories-hero-logo"
            />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            className="stories-hero-right"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="stories-hero-label">
              <TrustIcon name="star" size={16} />
              Empowering the Youth, Building the Nation
            </span>
            <h2 className="stories-hero-highlight">Think Beyond the Impossible</h2>
            <p className="stories-hero-desc">
              Dr. P. Saravanan firmly believes that today's youth are the foundation of
              tomorrow's nation. Through quality education, skill development, healthcare,
              and employment opportunities, he is committed to empowering every young
              individual to build a stronger and more prosperous society...
            </p>
            <div className="stories-hero-divider" />
          </motion.div>
        </div>

        {/* ── Cards + Featured ── */}
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
