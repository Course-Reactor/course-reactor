import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import style from "../styles/components/breadcrumbs.module.scss";

export default function Breadcrumbs() {
  return (
    <Link href="/">
      <a className={style.link}>
        <FiArrowLeft />
        Back home
      </a>
    </Link>
  );
}
