import { motion } from "framer-motion";
import Link from "next/link";
import { Layout, Breadcrumbs, Card } from "../../components";
import style from "../../styles/pages/programs.module.scss";

export default function Programs() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <Breadcrumbs />
        <h1 className={style.title}>Programs</h1>
        <motion.section className={style.grid}>
          <Card>
            <header>
              <h2>Web Development Degree</h2>
              <span>
                Class Begins: September 1<sup>st</sup> 2020
              </span>
            </header>
            <Link href="/programs/web-development">
              <a>Learn More</a>
            </Link>
          </Card>
          <Card>
            <header>
              <h2>Coming soon...</h2>
            </header>
          </Card>
        </motion.section>
      </Layout>
    </motion.div>
  );
}
