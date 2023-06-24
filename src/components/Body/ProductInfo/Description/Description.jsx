import styles from "./Description.module.css";

export default function Description(props) {
  console.log(props)
  return (
    <div>
      <div className={styles["description-container"]}>
        <div className={styles["description"]}>
          
          <h2 className={styles['header']}>{props.productInfo[0].description_title}</h2>
          <p className={styles['paragraph']}>
          {props.productInfo[0].description}
          </p>
        </div>
        <div className={styles["image"]}>
          <img src={props.productInfo[0].description_image} alt="shoe" />
        </div>
      </div>
    </div>
  );
}
