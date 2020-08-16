import { motion } from "framer-motion";
import { Layout, Breadcrumbs } from "../../components";

export default function WebDevelopment() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <Breadcrumbs />
        <h1>Web Development Degree</h1>
      </Layout>
    </motion.div>
  );
}
