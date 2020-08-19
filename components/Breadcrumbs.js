import { useRouter } from "next/router";
import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import style from "../styles/components/breadcrumbs.module.scss";

export default function Breadcrumbs() {
  const router = useRouter();
  const pathArray = router.asPath.split("/");
  const path =
    pathArray.length > 2
      ? pathArray.slice(0, pathArray.length - 1).join("/")
      : "/";

  return (
    <div className={style.container}>
      <Link href={path}>
        <a className={style.link}>
          <FiArrowLeft />
          Back
        </a>
      </Link>
      <Link href="/">
        <a className={style.link}>
          Home <FiHome />
        </a>
      </Link>
    </div>
  );
}
