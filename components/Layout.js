// import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter } from "../components/icons";
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
      <footer className={style.footer}>
        <div>
          <span>The Course Reactor Foundation</span>
          <p>Saint Louis, Missouri</p>
        </div>
        <div>
          <h3>Contact</h3>
          <Twitter />
          <span>Follow on Twitter!</span>
        </div>
        <div>
          <h3>Company</h3>
          Terms and Conditions Privacy Policy
        </div>
      </footer>
    </motion.div>
  );
}
