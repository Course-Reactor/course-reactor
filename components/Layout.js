import { motion } from "framer-motion";
import Footer from "./Footer";

import style from "../styles/components/layout.module.scss";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Layout({ children }) {
  return (
    <motion.div variants={stagger} className={style.container}>
      <main className={style.main}>{children}</main>
      <Footer />
    </motion.div>
  );
}
