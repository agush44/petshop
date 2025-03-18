import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-15 shrink-0 place-content-center rounded-md"
    >
      <img
        src="/logo.webp"
        alt="Logo"
        className="w-full h-auto object-contain"
      />
    </motion.div>
  );
};
