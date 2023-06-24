import styles from "./BottomFooter.module.css";

export default function BottomFooter() {
  return (
    <footer id={styles["bottom-footer"]}>
      <ul id={styles["bottom-list"]}>
        <li className={styles["bottom-footer-item"]}>
          <a>Cookie Settings</a>
        </li>
        <li className={styles["bottom-footer-item"]}>
          <a>Data Settings</a>
        </li>
        <li className={styles["bottom-footer-item"]}>
          <a>Privacy Centre</a>
        </li>
        <li className={styles["bottom-footer-item"]}>
          <a>Cookies</a>
        </li>
        <li className={styles["bottom-footer-item"]}>
          <a>Privacy Notice</a>
        </li>
        <li className={`${styles["bottom-footer-item"]} ${styles["last"]}`}>
          <a>Terms and Conditions</a>
        </li>
      </ul>
    </footer>
  );
}
