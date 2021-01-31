import { motion } from "framer-motion";
import Link from "next/link";
import { Layout, Breadcrumbs, Card } from "../../components";
import { fadeInLeft } from "../../lib/ui-helpers";
import style from "../../styles/pages/programs.module.scss";
import styleUtils from "../../styles/components/utils.module.scss";

export default function Programs() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <Breadcrumbs />
        <h1 className={style.title}>Programs</h1>
        <section className={style.grid}>
          <motion.div variants={fadeInLeft}>
            <Card>
              <header>
                <h2>Web Development Degree</h2>
                <span>Next Cohort Begins: Fall 2021</span>
              </header>
              <Link href="/programs/web-development">
                <a className={styleUtils.bold}>Learn More</a>
              </Link>
            </Card>
          </motion.div>
          <motion.div variants={fadeInLeft}>
            <Card>
              <header>
                <h2>More coming soon...</h2>
              </header>
            </Card>
          </motion.div>
        </section>
      </Layout>
    </motion.div>
  );
}
