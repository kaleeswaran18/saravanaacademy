import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CTAButton from "../shared/CTAButton";
import TrustIcon from "../shared/TrustIcons";
import "./ServicesShowcase.css";

const services = [
  {
    id: "education",
    tag: "Education",
    title: "Education Support",
    description: "Comprehensive academic guidance, scholarship assistance, and mentoring programs that help students from underserved communities pursue their educational dreams.",
    benefits: ["Scholarship guidance", "Academic mentoring", "Learning resources", "Career counseling"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    cta: "Learn About Education Programs",
  },
  {
    id: "placement",
    tag: "Career",
    title: "Placement Training",
    description: "Job readiness workshops, interview preparation, resume building, and direct placement support that bridges the gap between education and employment.",
    benefits: ["Interview coaching", "Resume workshops", "Industry connections", "Soft skills training"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    cta: "Explore Placement Training",
    reverse: true,
  },
  {
    id: "medical",
    tag: "Healthcare",
    title: "Medical Events",
    description: "Free health screening camps, awareness drives, and preventive healthcare initiatives that bring medical support directly to communities in need.",
    benefits: ["Free health camps", "Awareness drives", "Vision screening", "Nutrition workshops"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    cta: "View Medical Events",
  },
  {
    id: "community",
    tag: "Welfare",
    title: "Community Welfare",
    description: "Holistic welfare programs supporting families, senior citizens, and vulnerable communities through sustained outreach and development initiatives.",
    benefits: ["Family support", "Senior care", "Rural outreach", "Youth empowerment"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    cta: "Discover Welfare Programs",
    reverse: true,
  },
];

function ServicesShowcase() {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="services-showcase trust-section trust-section--white" id="services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-heading">
            Programs That <span className="gradient-text">Change Lives</span>
          </h2>
          <p className="section-desc">
            Four pillars of service — each designed to create lasting, measurable impact in our communities.
          </p>
        </div>

        <div className="services-list">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              className={`service-row ${svc.reverse ? "service-row--reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
            >
              <div className="service-row-image">
                <img src={svc.image} alt={svc.title} />
                <span className="service-row-tag">{svc.tag}</span>
              </div>

              <div className="service-row-content">
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>

                <div className="service-benefits">
                  {svc.benefits.map((b) => (
                    <motion.span
                      key={b}
                      className="benefit-chip"
                      whileHover={{ scale: 1.04, y: -2 }}
                    >
                      <TrustIcon name="check" size={12} className="benefit-check" />
                      {b}
                    </motion.span>
                  ))}
                </div>

                <CTAButton
                  showArrow
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {svc.cta}
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesShowcase;
