import { motion } from "framer-motion";
import {
  Layout,
  Breadcrumbs,
  Card,
  RegistrationForm,
  ApiProvider,
} from "../../components";
import { fadeInLeft, fadeIn } from "../../lib/ui-helpers";
import style from "../../styles/pages/web-development.module.scss";

export default function WebDevelopment() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <Breadcrumbs />
        <h1 className={style.title}>Web Development Degree</h1>
        <motion.section className={style.instructor} variants={fadeInLeft}>
          <Card>
            <div>
              <h2>Meet the Instructor</h2>
              <span>Ryan Coleman</span>
              <p>
                "It feels like I've been writing code for as long as I've been
                alive. Growing up with a burning curiosity for how computers
                work lead me to start programming at a very young age. I've been
                working as a software developer for a little over 3 years and I
                can't wait to share my passion with you!"
              </p>
            </div>
            <img
              src="https://gravatar.com/avatar/17afc368444419fdcf05a8015d9c3d82?s=150"
              alt="Instructor Ryan Coleman"
            />
          </Card>
        </motion.section>
        <motion.section variants={fadeIn} className={style.overview}>
          <h2>Overview</h2>
          <p>
            Our Web Development Degree is the perfect place to start for someone
            who wants to land a job as an entry-level developer. In this
            program, you'll learn the basics without all the complex stuff
            getting in the way. You'll work on backend services and front-end
            UIs. You'll also build sample projects and work with a team of real
            people on a real project!
          </p>
        </motion.section>
        <motion.section className={style.materials} variants={fadeIn}>
          <h2>Prerequisites &amp; Learning Materials</h2>
          <p>
            In order to be successful in this program, you may want to ensure
            the following things:
          </p>
          <ul>
            <li>
              Access to a computer with a stable internet connection. While a
              camera and microphone are not required, you'll find that your
              experience will be much better if you have those, or a mobile
              device, handy.
            </li>
            <li>
              Ability to install and run software, if you need help with this,
              email us and we can get you some help!
            </li>
            <li>
              You'll want to have good reading skills and understand basic
              mathematics. While the concepts in this course may be challenging,
              we cater our curriculum towards empowering people of all
              abilities.
            </li>
            <li>
              About 6 hours a week for lecture, group work, and homework
              assignments.
            </li>
          </ul>
        </motion.section>
        <motion.section className={style.syllabus} variants={fadeIn}>
          <h2>What You'll Learn</h2>
          <ul>
            <li>
              Basic introduction to how computers work and how programs run.
            </li>
            <li>How to write code.</li>
            <li>Basic testing and debugging skills.</li>
            <li>Working with and building a user interface.</li>
            <li>Working with and building a backend API.</li>
            <li>Project management and Agile.</li>
            <li>Working on a team of developers.</li>
            <li>Mental health tips and navigating imposter syndrome.</li>
          </ul>
        </motion.section>
        <motion.section variants={fadeIn}>
          <h2>Register Today!</h2>
          <ApiProvider>
            <RegistrationForm />
          </ApiProvider>
        </motion.section>
      </Layout>
    </motion.div>
  );
}
