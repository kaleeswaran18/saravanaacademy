import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import TrustIcon from "../shared/TrustIcons";
import "./FAQSection.css";

const faqs = [
  { q: "What services does Surya Trust provide?", a: "We offer education support, placement training, skill development, medical camps, community welfare programs, and awareness campaigns." },
  { q: "How can I volunteer with the trust?", a: "Visit our Contact page and fill out the volunteer inquiry form. Our team will connect with you about available roles." },
  { q: "Who can benefit from your education programs?", a: "Students from underserved communities seeking academic guidance, career counseling, and placement training are welcome." },
  { q: "How are medical camps organized?", a: "We partner with healthcare professionals to conduct free screening camps, awareness drives, and wellness workshops in communities." },
  { q: "How can I get in touch for general enquiries?", a: "You can reach us via phone, email, or the contact form on our Contact page. We respond within 24-48 hours." },
];

function FAQSection() {
  const [open, setOpen] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="faq-section trust-section trust-section--white" id="faq" ref={ref}>
      <div className="container">
        <SectionHeader
          icon={<TrustIcon name="questionCircle" size={28} />}
          label="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Find answers about our services, volunteering, events, and trust activities."
        />

        <motion.div
          className="faq-list"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                {faq.q}
                <span className="faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;
