import { AnimatePresence } from "framer-motion";
import "modern-normalize/modern-normalize.css";
import "../styles/main.scss";

export default function CourseReactor({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
