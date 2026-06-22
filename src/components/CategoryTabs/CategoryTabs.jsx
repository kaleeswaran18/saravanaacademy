import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import TrustIcon from "../shared/TrustIcons";
import "./CategoryTabs.css";

const galleryItems = [
  {
    id: 1,
    title: "Free Medical Camp",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1781364332/2_online-video-cutter.com_mnejei.mp4",
  },
  {
    id: 2,
    title: "Community Welfare Program",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1781364389/3_online-video-cutter.com_jrvbug.mp4",
  },
  {
    id: 3,
    title: "Healthcare Awareness",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1781364382/4_online-video-cutter.com_tj1sk8.mp4",
  },
  {
    id: 4,
    title: "Medical Outreach",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1781364390/5_online-video-cutter.com_ch8gu4.mp4",
  },
  {
    id: 5,
    title: "Trust Activities",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1781364386/6_online-video-cutter.com_de8qmp.mp4",
  },
  {
    id: 6,
    title: "Community Service",
    category: "Medical & Trust",
    type: "video",
    url: "https://res.cloudinary.com/dbrymrvqu/video/upload/v1781364368/7_btxqTOfr_jljeb7.mp4",
  },
  {
    id: 7,
    title: "Medical Camp",
    category: "Medical & Trust",
    type: "image",
    url: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362363/8_diaxcm.jpg",
  },
  {
    id: 8,
    title: "Healthcare Service",
    category: "Medical & Trust",
    type: "image",
    url: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362362/9_ecvwpj.jpg",
  },
  {
    id: 9,
    title: "Trust Volunteers",
    category: "Medical & Trust",
    type: "image",
    url: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362313/10_rydwxw.png",
  },
  {
    id: 11,
    title: "Medical Awareness",
    category: "Medical & Trust",
    type: "image",
    url: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362310/12_q1wdjs.jpg",
  },
  {
    id: 12,
    title: "Patient Care",
    category: "Medical & Trust",
    type: "image",
    url: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362322/13_wvnija.png",
  },
  {
    id: 13,
    title: "Health Camp",
    category: "Medical & Trust",
    type: "image",
    url: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362321/14_hdgtrs.png",
  },
  {
    id: 14,
    title: "Surya Trust",
    category: "Medical & Trust",
    type: "image",
    url: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781362358/15_syghrz.png",
  },
];

const filters = ["All", "Medical & Trust", "Free Seminar", "Placement Training"];

const isVideo = (url) => /\.(mp4|webm|ogg|mov)$/i.test(url);

function CategoryTabs() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section
      className="event-gallery trust-section trust-section--cream"
      id="gallery"
      ref={ref}
    >
      <div className="container">
        <SectionHeader
          icon={<TrustIcon name="camera" size={28} />}
          label="Event Gallery"
          title="Moments of"
          highlight="Impact"
          description="A visual journey through our programs, camps, and community events."
        />

        {/* Filter buttons */}
        <motion.div
          className="gallery-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`gallery-filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid — CSS columns layout */}
        <motion.div
          className="masonry-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                className="masonry-item"
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                whileHover={{ y: -5 }}
                onClick={() => setLightbox(item)}
              >
                {/* Media */}
                {isVideo(item.url) ? (
                  <div className="media-wrap">
                    <video
                      src={item.url}
                      className="gallery-media"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="play-badge" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 2.5L13 8L4 13.5V2.5Z" fill="#C0392B" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="media-wrap">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="gallery-media"
                    />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="masonry-overlay">
                  <span className="masonry-category">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media */}
              {isVideo(lightbox.url) ? (
                <video
                  src={lightbox.url}
                  controls
                  autoPlay
                  playsInline
                  className="lightbox-media"
                />
              ) : (
                <img
                  src={lightbox.url}
                  alt={lightbox.title}
                  className="lightbox-media"
                />
              )}

              {/* Footer info bar */}
              <div className="lightbox-divider" />
              <div className="lightbox-info">
                <div className="lightbox-text">
                  <span className="lightbox-cat">{lightbox.category}</span>
                  <h3>{lightbox.title}</h3>
                </div>
                <button
                  type="button"
                  className="lightbox-close"
                  onClick={() => setLightbox(null)}
                  aria-label="Close lightbox"
                >
                  <TrustIcon name="times" size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CategoryTabs;
