import Link from "next/link";
import { motion } from "framer-motion";
import { FiTwitter, FiMail } from "react-icons/fi";
import style from "../styles/components/layout.module.scss";
import styleUtils from "../styles/components/utils.module.scss";

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
          <span className={styleUtils.bold}>The Course Reactor Foundation</span>
          <p>Saint Louis, Missouri</p>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a
                href="https://www.twitter.com/CourseReactor"
                target="_blank"
                rel="noopener noreferrer"
                className={styleUtils.center}
              >
                <FiTwitter />
                <span>Follow on Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@coursereactor.org"
                className={styleUtils.center}
              >
                <FiMail />
                <span>Email Us</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/terms-and-conditions">
                <a>Terms and Conditions</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </motion.div>
  );
}
