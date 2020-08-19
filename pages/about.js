import { motion } from "framer-motion";
import { Breadcrumbs, Layout } from "../components";
import style from "../styles/pages/about.module.scss";
import { fadeIn, fadeInUp } from "../lib/ui-helpers";

export default function About() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <Breadcrumbs />
        <h1 className={style.title}>About</h1>
        <motion.section variants={fadeIn} className={style.section}>
          <h2>Mission Statement</h2>
          <p className={style.mission}>
            The Course Reactor Foundation exists to democratize education and
            allow people from all walks of life to pursue their interests and
            participate in academia without economic or social barriers.
          </p>
        </motion.section>
        <motion.section variants={fadeIn} className={style.section}>
          <h2>Goals</h2>
          <ol className={style.list}>
            <li>Foster a community of well-grounded, lifelong learners.</li>
            <li>
              Provide free learning materials across a variety of subjects
              accessible to people of all abilities and learning styles.
            </li>
            <li>
              To faithfully address the underrepresentation of BIPOC (Black,
              Indigenous, and People of Colour) in professional communities.
            </li>
          </ol>
          <p>
            The goals of The Course Reactor Foundation are foundationally rooted
            in addressing social and economic inequalities that have primarily
            manifested themselves in the exclusion of certain minority groups
            through a collaboration of policy and social barriers. While Course
            Reactor exists primarily to address these issues, we more broadly
            believe in the liberation of education and academia for all people
            and through our programs, hope to provide equitable pathways for
            anyone who wishes to pursue them.
          </p>
        </motion.section>
        <div className={style.grid}>
          <motion.section variants={fadeInUp}>
            <div>
              <h3>Education</h3>
              <p>
                We believe that education is a fundamental human right. The
                goals of Course Reactor are to provide a curriculum that is
                relevant, historically accurate, and democratically accepted
                amongst the appropriate bodies that govern over that subject
                matter. While we wish to provide education materials that span
                broadly amongst these topics, we hope to tailor our programs
                towards career readiness and providing skills that can be useful
                in progressing innovation.
              </p>
            </div>
          </motion.section>
          <motion.section variants={fadeInUp}>
            <h3>Career Readiness</h3>
            <p>
              While the primary function of Course Reactor is not to explicitly
              place candidates in jobs or to act as a staffing or recruitment
              agency, we wish to provide quality and reputable resources to make
              students and prospective job candidates’ transition into these
              lines of work easier. We can achieve this through strategic
              partnerships with industry professionals and by providing a
              curriculum that advances skills while having a direct community
              impact.
            </p>
          </motion.section>
          <motion.section variants={fadeInUp}>
            <h3>Community Outreach</h3>
            <p>
              The Course Reactor Foundation is committed to remaining focused on
              positively impacting communities who find themselves disadvantaged
              for any number of reasons. Our courses are tailored towards
              providing students a chance to work on projects that demonstrate
              their skills while also providing valuable tools to the community.
            </p>
          </motion.section>
        </div>
        <motion.section variants={fadeIn} className={style.section}>
          <h2>Foundation</h2>
          <p>
            The Course Reactor Foundation is a non-profit corporation registered
            in the state of Missouri. As of August 2020, the foundation is
            supported 100% by private donation from the founding members. While
            we plan on accepting donations in the future, we first want to
            ensure that we are only asking for as much as it costs us to
            operate. We firmly believe in being transparent, and will provide
            statements including our vendors, operating expenses, every dollar
            we take in donations, what we spend that money on, and how much cash
            on hand we may hold at any given time. Right now, our founding
            members, instructors, and any assistants are giving their time and
            labor voluntarily without compensation. In the future, we want to
            ensure that we pay our staff fair and equitable wages, so we will
            post every paid employee, operator, manager, and executive's salary.
            All board members, operators, and managers will be elected
            democratically and elections will be held according to the bylaws.
            Board members, excluding any who may also act as staff, are not
            compensated by the foundation, but may receive reimbursement for any
            expenses they may accrue while supporting the foundation with all
            expense reports being posted for public review.
          </p>
        </motion.section>
      </Layout>
    </motion.div>
  );
}
