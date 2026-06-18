import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TrustIcon from "../shared/TrustIcons";
import "./ContactInfo.css";

const contactCards = [
  { icon: "phone", title: "Phone", value: "+91 6380319582" },
  { icon: "envelope", title: "Email", value: "Drsaravanaacademy@gmail.com" },
  { icon: "mapMarker", title: "Address", value: "7-A Maruthupandiar Nagar, 4th Main Road, Narimedu, Madurai - 625002" },
  { icon: "clock", title: "Working Hours", value: "Mon - Sat, 10:00 AM - 10:00 PM" },
];

const socialLinks = [
  { label: "Facebook", icon: "f" },
  { label: "Instagram", icon: "◎" },
  { label: "YouTube", icon: "▶" },
  { label: "LinkedIn", icon: "in" },
];

function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="contact-info-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="contact-info-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Find Us <span className="gradient-text">Here</span>
        </motion.h2>

        <div className="contact-info-grid">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="info-card glass-card gradient-top-border"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <span className="info-icon">
                <TrustIcon name={card.icon} size={24} />
              </span>
              <h4>{card.title}</h4>
              <p>{card.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h4>Follow Our Journey</h4>
          <div className="social-icons">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href="#"
                aria-label={s.label}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactInfo;
