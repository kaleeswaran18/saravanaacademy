import { useState } from "react";
import { motion } from "framer-motion";

function CTAButton({
  children,
  className = "",
  variant = "primary",
  showArrow = true,
  onClick,
  type = "button",
}) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
    onClick?.(e);
  };

  const cls = variant === "outline" ? "outline-btn" : "primary-btn";

  return (
    <motion.button
      type={type}
      className={`${cls} ${className}`.trim()}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {showArrow && <span className="btn-arrow">→</span>}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="cta-ripple"
          style={{ width: r.size, height: r.size, left: r.x, top: r.y }}
        />
      ))}
    </motion.button>
  );
}

export default CTAButton;
