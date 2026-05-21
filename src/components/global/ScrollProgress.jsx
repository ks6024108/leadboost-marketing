import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
      fixed
      top-0
      left-0
      right-0
      h-1
      origin-left
      z-9999
      bg-linear-to-r
      from-cyan-400
      to-violet-500
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgress;
