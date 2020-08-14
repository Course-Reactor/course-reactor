import { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Card, Layout } from "../components";
import style from "../styles/pages/index.module.scss";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      easing: easing,
    },
  },
};

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function Home() {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzR8G1WP5g5jLPIY7OxKCEt3aMEJQjc9hU18qGUZGH7tGGKuN4/exec";
    const form = document.forms["enrollment-form"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    });
  });

  return (
    <motion.div
      className={style.container}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Course Reactor</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Course Reactor - Earn a Degree Online" />
        <meta
          name="description"
          content="The Course Reactor Foundation exists to democratize education and allow people from all walks of life to pursue their interests and participate in academia."
        />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.coursereactor.org/" />
        <meta
          property="og:title"
          content="Course Reactor - Earn a Degree Online"
        />
        <meta
          property="og:description"
          content="The Course Reactor Foundation exists to democratize education and allow people from all walks of life to pursue their interests and participate in academia."
        />
        <meta
          property="og:image"
          content="https://www.coursereactor.org/images/share-preview.jpg"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.coursereactor.org/" />
        <meta
          property="twitter:title"
          content="Course Reactor - Earn a Degree Online"
        />
        <meta
          property="twitter:description"
          content="The Course Reactor Foundation exists to democratize education and allow people from all walks of life to pursue their interests and participate in academia."
        />
        <meta
          property="twitter:image"
          content="https://www.coursereactor.org/images/share-preview.jpg"
        />
      </Head>
      <Layout>
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
        <motion.section variants={fadeIn}>
          <Card>
            <header>
              <h2>Web Development Degree</h2>
              <span>
                Class Begins: September 1<sup>st</sup> 2020
              </span>
            </header>
            <form name="enrollment-form" className={style.form}>
              <fieldset>
                <div className={style.horizontal}>
                  <legend>Enrollment Form</legend>
                  <div className={style.field}>
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Enter Full Name"
                      autoComplete="name"
                    />
                  </div>
                  <div className={style.field}>
                    <label htmlFor="email_address">Email</label>
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Enter Email Address"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <button type="submit">Enroll</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </Card>
        </motion.section>
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
