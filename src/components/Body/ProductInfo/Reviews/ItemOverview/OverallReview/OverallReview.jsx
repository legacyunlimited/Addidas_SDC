import styles from "./OverallReview.module.css";

export default function OverallReview() {
  return (
    <div className={styles["overall-review-container"]}>
      <div className={styles["top"]}>
        <p className={styles['review-header']}>434 Reviews</p>
        <p className={styles['review-header']}>Write a review</p>
      </div>
      <div className={styles['review-box']}><p>★★★★★ 4.7</p></div>
      <div className={styles['bottom']}>
        <div className={styles['comfort']}>
        <p>★ 4.5</p>
        <p>Comfort</p>
        </div>
        <div className={styles['quality']}>
        <p>★ 4.7</p>
        <p>Quality</p>
        </div>
      </div>
    </div>
  );
}
