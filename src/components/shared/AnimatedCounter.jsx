import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const hasPlus = value.includes("+");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, numericValue, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {hasPlus ? "+" : ""}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
