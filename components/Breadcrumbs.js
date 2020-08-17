import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";
import style from "../styles/components/breadcrumbs.module.scss";

export default function Breadcrumbs() {
  const router = useRouter();

  return (
    <span
      className={style.link}
      onClick={(e) => router.back()}
      role="link"
      tabIndex={0}
    >
      <FiArrowLeft />
      Back
    </span>
  );
}
