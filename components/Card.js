import style from "../styles/components/card.module.scss";

export default function Card({ children }) {
  return <div className={style.card}>{children}</div>;
}
