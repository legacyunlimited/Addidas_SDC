import styles from "./MainHeader.module.css";
export default function MainHeader() {
  return (
    <header className={styles["mainheader-container"]}>
      <ul className={styles["customer-list"]}>
        <li>
          <a href="#">help</a>
        </li>
        <li>
          <a href="#">orders and returns</a>
        </li>
        <li>
          <a href="#">gift cards</a>
        </li>
        <li>
          <a href="#">become a member</a>
        </li>
      </ul>
      <div className={styles["mainheader-bottom"]}>
        <div className={styles["logo-container"]}>
          <a href="#">
            <img src="/adidas-icon.svg" alt="" />
          </a>
        </div>
        <ul className={styles["flyout-menu"]}>
          <li>
            <a href="#">MEN</a>
          </li>
          <li>
            <a href="#">WOMEN</a>
          </li>
          <li>
            <a href="#">KIDS</a>
          </li>
          <li>
            <a href="#">NEW</a>
          </li>
          <li>
            <a href="#">SPORTS</a>
          </li>
          <li>
            <a href="#">COLLECTIONS</a>
          </li>
          <li>
            <a href="#">OUTLET</a>
          </li>
        </ul>
        <div className={styles["auxiliary-menu"]}>
          <div className={styles["searchbar-container"]}>
            <input
              placeholder="Search"
              className={styles["searchbar"]}
              type="text"
            />
            <div className={styles["search-icon"]}>
              <span className={styles["search-icon-wrapper"]}>
                <img src="./img/search_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
              </span>
            </div>
          </div>
          <div className={styles["customer-info"]}>
            <span className={styles["customer-info-wrapper"]}>
              <a href="">
                <img src="./img/user-icon.svg" alt="" />
              </a>
            </span>
          </div>
          <div className={styles["wishlist-info"]}>
            <span className={styles["wishlist-info-wrapper"]}>
              <a href="">
                <img src="./img/heart-icon.svg" alt="" />
              </a>
            </span>
          </div>
          <div className={styles["cart-info"]}>
            <span className={styles["cart-info-wrapper"]}>
              <a href="">
                <img src="./img/shopping-list.svg" alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
