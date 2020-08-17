import { FiTwitter, FiMail, FiInstagram } from "react-icons/fi";
// import Link from "next/link";
import style from "../styles/components/footer.module.scss";
import styleUtils from "../styles/components/utils.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <span className={styleUtils.bold}>The Course Reactor Foundation</span>
        <p>Saint Louis, Missouri</p>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <a
              href="https://www.twitter.com/CourseReactor"
              target="_blank"
              rel="noopener noreferrer"
              className={styleUtils.center}
            >
              <FiTwitter />
              <span>Follow us on Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/CourseReactor"
              target="_blank"
              rel="noopener noreferrer"
              className={styleUtils.center}
            >
              <FiInstagram />
              <span>Follow us on Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:info@coursereactor.org"
              className={styleUtils.center}
            >
              <FiMail />
              <span>Email us</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div>
        <h3>Company</h3>
        <ul>
          <li>
            <Link href="/terms-and-conditions">
              <a>Terms and Conditions</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </div> */}
    </footer>
  );
}
