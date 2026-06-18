import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./VideoSection.css";

function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="video-section trust-section trust-section--cream bg-radial-warm" id="impact-video" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Our Impact
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            See How We <span className="gradient-text">Transform Lives</span> Every Day
          </motion.h2>

          <motion.p
            className="section-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Watch our journey and discover how we help
            communities through education, healthcare,
            and social welfare initiatives.
          </motion.p>
        </div>

        <motion.div
          className="video-wrapper glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ y: -8 }}
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Trust Video"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}

export default VideoSection;
