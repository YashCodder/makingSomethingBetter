import { motion } from "framer-motion";

export default function SlashTransition() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg,#ff1e56,#00f5ff)",
        clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
        zIndex: 9999,
      }}
    />
  );
}