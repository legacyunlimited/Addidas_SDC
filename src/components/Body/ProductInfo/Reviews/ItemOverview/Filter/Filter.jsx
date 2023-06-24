import styles from "./Filter.module.css"

export default function Filter() {
  return (
    <div className={styles['filter-container']}>
      <h1 className={styles['filter-header']}>Filter reviews by</h1>
      <div className={styles['filter-btn']}>
        <button className={styles['btn']}>Satisfaction</button>
        <button className={styles['btn']}>Color</button>
        <button className={styles['btn']}>Comfort</button>
        <button className={styles['btn']}>Appearance</button>
        <button className={styles['btn']}>Quality</button>
      </div>
      <h1 className={styles['filter-header']}>More filters</h1>
    </div>
  )
}
