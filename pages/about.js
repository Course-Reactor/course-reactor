import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "../components";

export default function About() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <h1>About</h1>
        <p>
          The Course Reactor Foundation exists to democratize education and
          allow people from all walks of life to pursue their interests and
          participate in academia.
        </p>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </Layout>
    </motion.div>
  );
}
