import { motion } from "framer-motion";

export default function WebDevelopment() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <h1>Web Development Degree</h1>
    </motion.div>
  );
}
