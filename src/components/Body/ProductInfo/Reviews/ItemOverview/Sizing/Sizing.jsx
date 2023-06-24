import styles from "./Sizing.module.css";

export default function Sizing() {
  return (
    <div className={styles["sizing-container"]}>
      <div className={styles["size"]}>
        <h1 className={styles["header"]}>Size</h1>
        <div className={styles["bar"]}>
          <div className={styles["triangle"]}></div>
        </div>
        <div className={styles["bottom-row"]}>
          <p>Too small</p>
          <p>Perfect</p>
          <p>Too large</p>
        </div>
      </div>
      <div className={styles["width"]}></div>
      <h1 className={styles["header"]}>Width</h1>
      <div className={styles["bar"]}>
        <div className={styles["triangle"]}></div>
      </div>
      <div className={styles["bottom-row"]}>
        <p>Too narrow</p>
        <p>Perfect</p>
        <p>Too wide</p>
      </div>
    </div>
  );
}
