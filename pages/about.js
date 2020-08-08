import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <h1>About</h1>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </motion.div>
  );
}
