import styles from "./Details.module.css";

export default function Details() {
  return (
    <div>
      <div className={styles["details-container"]}>
        <ul>
          <li className={styles['list-items']}>Lace closure</li>
          <li className={styles['list-items']}>Mesh upper with suede overlays</li>
          <li className={styles['list-items']}>Textile lining</li>
          <li className={styles['list-items']}>Boost Midsole</li>
        </ul>
        <ul>
          <li className={styles['list-items']}>Rubber outsole</li>
          <li className={styles['list-items']}>Product colour: Core Black / Core Black / Grey Six</li>
          <li className={styles['list-items']}>Product code: GX8664</li>
        </ul>
      </div>
    </div>
  );
}
