import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "../components";
import { fadeIn, fadeInUp } from "../lib/ui-helpers";
import style from "../styles/pages/index.module.scss";

export default function Home() {
  return (
    <motion.div
      className={style.container}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Layout>
        <motion.nav variants={fadeIn} className={style.nav}>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/programs">
                <a>Programs</a>
              </Link>
            </li>
          </ul>
        </motion.nav>
        <motion.section variants={fadeInUp} className={style.hero}>
          <aside>
            <h1>Course Reactor</h1>
            <p>
              The Course Reactor Foundation exists to democratize education and
              allow people from all walks of life to pursue their interests and
              participate in academia.
            </p>
          </aside>
          <img src="/images/scholar.png" />
        </motion.section>
        {/* <motion.section variants={fadeIn}>
          <Card>
            <ApiProvider>
              <RegistrationForm />
            </ApiProvider>
          </Card>
        </motion.section> */}
        <motion.section variants={fadeIn} className={style.about}>
          <h2>A Different Approach</h2>
          <p>
            We believe in fostering a community of well-grounded, lifelong
            learners. We will achieve this by providing free learning materials
            across a variety of subjects accessible to people of all abilities
            and learning styles. We also wish to faithfully address the
            underrepresentation of BIPOC (Black, Indigenous, and People of
            Color) in professional communities.
          </p>
        </motion.section>
        <motion.section variants={fadeIn} className={style.methods}>
          <div className={style.bumpBottom}>
            <h3>Live Lectures</h3>
            <img src="/images/lecture.png" />
            <p>
              Students will be able to participate in live lectures where they
              can ask questions in a safe learning environment.
            </p>
          </div>
          <div>
            <h3>Self-paced</h3>
            <img src="/images/come-back-later.png" />
            <p>
              Life happens! We won't hold you to harsh deadlines, stringent
              standards, or unrealistic expectations. Take classes at your own
              pace and you'll never be left behind!
            </p>
          </div>
        </motion.section>
        <motion.section variants={fadeIn} className={style.methods}>
          <div>
            <h3>Simulated Workplace</h3>
            <img src="/images/team-work.png" />
            <p>
              Through our programs, you'll participate in simulated work
              environments where you'll get hands on experience dealing with
              real-world problems! Throughout your coursework, you'll also build
              a professional portfolio showcasing your skills.
            </p>
          </div>
        </motion.section>
      </Layout>
    </motion.div>
  );
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};
