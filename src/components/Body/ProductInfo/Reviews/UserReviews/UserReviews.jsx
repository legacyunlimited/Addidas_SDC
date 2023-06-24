import styles from "./UserReviews.module.css";

export default function UserReviews(props) {
  console.log(props.productInfo);

  return (
    <div>
      <button className={styles["sort-btn"]}>Sort by</button>
      <div className={styles["user-review-container"]}>
        {props.productInfo.map((review) => (
          <div className={styles["user-review"]}>
            <h1 className={styles["header"]}>{review.title}</h1>
            <div className={styles["stars"]}>{review.stars} stars</div>
            <p>{review.body}</p>
            <div className={styles["info"]}>
              {review.account} | {review.review_date} | Verified Purchaser |
              Incentivised Review
            </div>
            <div className={styles["info"]}>
              Colour: Cloud White / Cloud White / Cloud White | Size: 9
            </div>
            <div className={styles["helpful"]}>
              <p>Helpful? </p>
              <img
                className={styles["thumb"]}
                src="./img/thumb_up_FILL0_wght400_GRAD0_opsz48.svg"
              />
              <p>{review.likes}</p>
              <img
                className={styles["thumb"]}
                src="./img/thumb_down_FILL0_wght400_GRAD0_opsz48.svg"
              />
              <p>0</p>
            </div>
            <p className={styles["report"]}>Report review</p>
          </div>
        ))}

        {/* <div className={styles["user-review"]}>
           <h1 className={styles["header"]}>Fantasic</h1>
           <div className={styles["stars"]}>★★★★★</div>
          <p>Excellent 💥💥💥💥💥 Amazing 🤩 couldnt be happier</p>
           <div className={styles["info"]}>
             NRDon | May 14, 2023 | Verified Purchaser | Incentivised Review
           </div>
           <div className={styles["info"]}>
             Colour: Cloud White / Cloud White / Cloud White | Size: 9
           </div>
           <p>Helpful?</p>
           <p className={styles["report"]}>Report review</p>
         </div> */}
      </div>
    </div>
  );
}
