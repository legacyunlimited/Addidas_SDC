import styles from "./TopFooter.module.css";

export default function TopFooter() {
  return (
    <div id={styles["footer-container"]}>
      <div id={styles["pre-footer"]}>
        <span id={styles["member-message"]}>
          BECOME A MEMBER & GET 10% OFF*
        </span>
        <button id={styles["sign-up-btn"]}>
          <span>SIGN UP FOR FREE</span>
          <div id={styles["img-container"]}>
            <img id={styles["arrow"]}></img>
          </div>
        </button>
      </div>
    </div>
  );
}
