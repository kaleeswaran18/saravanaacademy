import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./HeroSlider.css";
import CTAButton from "../shared/CTAButton";
import AnimatedCounter from "../shared/AnimatedCounter";

// ^ Update this import path to wherever you actually store the logo file
//   in your project (e.g. src/assets/vs-care-logo.png).

const VIDEO_INTERVAL = 7000;

const FALLBACK_BANNER_SLIDE = {
  id: "fallback",
  mediaType: "video",
  src: "https://videos.pexels.com/video-files/7991576/7991576-hd_1920_1080_25fps.mp4",
  srcSd: "https://videos.pexels.com/video-files/7991576/7991576-sd_640_360_25fps.mp4",
  poster: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80&auto=format&fit=crop",
};

const bannerSlides = [
  {
    id: 1,
    mediaType: "image",
    category: "Education",
    src: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781919635/ChatGPT_Image_Jun_20_2026_07_09_34_AM_hknia6.png",
  },
  {
    id: 2,
    mediaType: "image",
    category: "Training",
    src: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781945960/ChatGPT_Image_Jun_20_2026_02_28_55_PM_fbnqxi.png",
  },
  {
    id: 3,
    mediaType: "image",
    category: "Medical",
    src: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781509444/Screenshot_2026-06-15_131338_gzhnt8.png",
  },
  {
    id: 4,
    mediaType: "image",
    category: "Community",
    src: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781944671/Screenshot_2026-06-20_140734_ct6umc.png",
  },
  {
    id: 5,
    mediaType: "image",
    category: "Volunteer",
    src: "https://res.cloudinary.com/dbrymrvqu/image/upload/v1781506606/sir_yvh4lz.png",
  },
];

function getSlideMediaType(slide) {
  if (slide?.mediaType === "video" || slide?.mediaType === "image") return slide.mediaType;
  if (slide?.type === "video" || slide?.type === "image") return slide.type;
  const mediaSrc = slide?.src || slide?.image || slide?.video || "";
  if (/\.(mp4|webm|ogg|mov)(\?|$)/i.test(mediaSrc)) return "video";
  return mediaSrc ? "image" : "image";
}

function getSlideImageSrc(slide) {
  return slide?.poster || slide?.image || slide?.src || FALLBACK_BANNER_SLIDE.poster;
}

function getSlideVideoSrc(slide, isMobile) {
  if (isMobile && slide?.srcSd) return slide.srcSd;
  return slide?.src || slide?.video || FALLBACK_BANNER_SLIDE.src;
}

function resolveBannerSlides(slides) {
  if (!Array.isArray(slides) || slides.length === 0) return [FALLBACK_BANNER_SLIDE];
  return slides.map((slide, index) => {
    const mediaType = getSlideMediaType(slide);
    const imageSrc = getSlideImageSrc(slide);
    const desktopImage = slide.desktopImage || imageSrc;
    const tabletImage = slide.tabletImage || desktopImage;
    const mobileImage = slide.mobileImage || tabletImage;
    if (mediaType === "video") {
      return {
        ...slide,
        id: slide.id ?? index + 1,
        mediaType: "video",
        poster: imageSrc,
        desktopImage,
        tabletImage,
        mobileImage,
        src: slide.src || slide.video || FALLBACK_BANNER_SLIDE.src,
        srcSd: slide.srcSd || slide.src || slide.video || FALLBACK_BANNER_SLIDE.srcSd,
      };
    }
    return {
      ...slide,
      id: slide.id ?? index + 1,
      mediaType: "image",
      src: slide.src || slide.image || imageSrc || FALLBACK_BANNER_SLIDE.poster,
      poster: imageSrc,
      desktopImage,
      tabletImage,
      mobileImage,
    };
  });
}

const metrics = [
  { value: "10000+", labelTop: "Students",  labelBottom: "Supported" },
  { value: "2500+",  labelTop: "Training",  labelBottom: "Programs"  },
  { value: "100+",   labelTop: "Medical",   labelBottom: "Camps"     },
  { value: "50+",    labelTop: "Community", labelBottom: "Programs"  },
];

const fadeDown = {
  hidden:  { opacity: 0, y: -14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

const wordContainer = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.045, delayChildren: 0.12 } },
};

const wordReveal = {
  hidden:  { opacity: 0, y: 16, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
};

const statsContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
};

const statReveal = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/* ─────────────────────────────────────────────────────────
   SlideImage — renders a plain <img> (no <picture> wrapper)
   so object-fit: cover works without extra CSS on <picture>.
   The img itself fills the layer via .video-hero-poster CSS.
───────────────────────────────────────────────────────── */
function SlideImage({ slide, isActive, className }) {
  const src =
    slide.desktopImage ||
    slide.src          ||
    slide.image        ||
    slide.poster       ||
    FALLBACK_BANNER_SLIDE.poster;

  return (
    <img
      src={src}
      alt=""
      className={className}
      loading={isActive ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

/* ─────────────────────────────────────────────────────────
   HeroMediaLayer — renders image or video for one slide
───────────────────────────────────────────────────────── */
function HeroMediaLayer({ slide, isActive, isAdjacent, useVideo, videoSrc }) {
  const videoRef  = useRef(null);
  const [videoReady,  setVideoReady]  = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const isVideoSlide = getSlideMediaType(slide) === "video";

  useEffect(() => {
    setVideoReady(false);
    setVideoFailed(false);
  }, [slide.id]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !isVideoSlide || !useVideo || videoFailed) return;
    if (isActive) {
      el.currentTime = 0;
      el.play().catch(() => setVideoFailed(true));
    } else {
      el.pause();
    }
  }, [isActive, isVideoSlide, useVideo, videoFailed]);

  if (!isVideoSlide) {
    return (
      <SlideImage
        slide={slide}
        isActive={isActive}
        className="video-hero-poster"
      />
    );
  }

  const showVideo  = useVideo && !videoFailed && (isActive || isAdjacent);
  const posterSrc  = slide.desktopImage || slide.poster || getSlideImageSrc(slide);

  return (
    <>
      <SlideImage
        slide={slide}
        isActive={isActive}
        className={`video-hero-poster${videoReady && isActive ? " is-hidden" : ""}`}
      />
      {showVideo && (
        <video
          ref={videoRef}
          className={`video-hero-video${videoReady ? " is-ready" : ""}`}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          onCanPlay={()    => setVideoReady(true)}
          onLoadedData={()  => setVideoReady(true)}
          onError={()      => setVideoFailed(true)}
        />
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   HeroSlider — main component
───────────────────────────────────────────────────────── */
function HeroSlider({ slides = bannerSlides }) {
  const [current,  setCurrent]  = useState(0);
  const [useVideo, setUseVideo] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate    = useNavigate();
  const heroSlides  = resolveBannerSlides(slides);

  const goNext = useCallback(() => {
    setCurrent((p) => (p + 1) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setInterval(goNext, VIDEO_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext]);

  useEffect(() => {
    const reduced  = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileMq = window.matchMedia("(max-width: 768px)");
    const update   = () => { setIsMobile(mobileMq.matches); setUseVideo(!reduced); };
    update();
    mobileMq.addEventListener("change", update);
    return () => mobileMq.removeEventListener("change", update);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const nextIndex    = (current + 1) % heroSlides.length;
  const fallbackPoster = getSlideImageSrc(heroSlides[0]);

  return (
    <section className="video-hero" id="home">
      {/* ── Media layers ── */}
      <div className="video-hero-media" aria-hidden="true">
        <img
          src={fallbackPoster}
          alt=""
          className="video-hero-poster-fallback"
          aria-hidden="true"
          decoding="async"
        />

        {heroSlides.map((slide, i) => (
          <motion.div
            key={slide.id}
            className="video-hero-layer"
            initial={false}
            animate={{ opacity: current === i ? 1 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: "none" }}
          >
            <HeroMediaLayer
              slide={slide}
              isActive={current === i}
              isAdjacent={i === nextIndex}
              useVideo={useVideo}
              videoSrc={getSlideVideoSrc(slide, isMobile)}
            />
          </motion.div>
        ))}
      </div>

      {/* ── Overlays ── */}
      <div className="video-hero-overlay-base"     aria-hidden="true" />
      <div className="video-hero-overlay-gradient" aria-hidden="true" />
      <div className="video-hero-glow"             aria-hidden="true" />

      {/* ── Content ── */}
      <div className="container video-hero-inner">
        <div className="video-hero-content">

          <motion.div
            className="video-hero-badge"
            variants={fadeDown}
            initial="hidden"
            animate="visible"
          >

            <picture>
              <source
                media="(max-width: 991px)"
                srcSet="https://res.cloudinary.com/dbrymrvqu/image/upload/v1782386142/ChatGPT_Image_Jun_25__2026__04_43_44_PM-removebg-preview_bjwltd.png"
              />
              <img
                src={'https://res.cloudinary.com/dbrymrvqu/image/upload/v1782390929/ChatGPT_Image_Jun_25__2026__06_04_51_PM-removebg-preview_jnhgdx.png'}
                alt="V's Care — Shaping Young Minds"
                className="video-hero-badge-logo-img"
              />
            </picture>
          </motion.div>

          <motion.h1 variants={wordContainer} initial="hidden" animate="visible">
            <span className="video-hero-line">
              {["Empowering", "Communities"].map((w) => (
                <motion.span key={w} className="video-hero-word" variants={wordReveal}>
                  {w}{" "}
                </motion.span>
              ))}
            </span>
            <span className="video-hero-line">
              <motion.span className="video-hero-word"      variants={wordReveal}>Through </motion.span>
              <motion.span className="video-hero-highlight" variants={wordReveal}>Education</motion.span>
              <motion.span className="video-hero-word"      variants={wordReveal}> &</motion.span>
            </span>
            <span className="video-hero-line">
              <motion.span className="video-hero-highlight" variants={wordReveal}>Social Service</motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="video-hero-subtitle"
            variants={fadeUp}
            custom={0.38}
            initial="hidden"
            animate="visible"
          >
            Supporting students, conducting placement training, organizing medical camps,
            and creating positive social impact through dedicated service initiatives.
          </motion.p>

          <motion.div
            className="video-hero-actions"
            variants={fadeUp}
            custom={0.46}
            initial="hidden"
            animate="visible"
          >
            <CTAButton
              className="video-hero-btn-primary"
              onClick={() => scrollTo("education-programs")}
            >
              Explore Programs
            </CTAButton>
            <CTAButton
              variant="outline"
              className="video-hero-btn-outline"
              onClick={() => navigate("/contact")}
            >
              Become A Volunteer
            </CTAButton>
          </motion.div>

          <motion.div
            className="video-hero-metrics"
            variants={statsContainer}
            initial="hidden"
            animate="visible"
            aria-label="Trust impact metrics"
          >
            {metrics.map((m) => (
              <motion.button
                key={m.labelTop}
                type="button"
                className="hero-metric"
                variants={statReveal}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                onClick={() => scrollTo("impact-stats")}
              >
                <strong className="hero-metric-value">
                  <AnimatedCounter value={m.value} />
                </strong>
                <span className="hero-metric-label">
                  {m.labelTop}
                  <br />
                  {m.labelBottom}
                </span>
              </motion.button>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
