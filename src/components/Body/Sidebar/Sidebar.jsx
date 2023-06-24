import styles from "./Sidebar.module.css";
import React, { useState } from "react";
import ShoeInventory from "./ShoeInventory";

export default function Sidebar() {
  const [leftFootText, setLeftFootText] = useState("");
  const [leftFootLetters, setLeftFootLetters] = useState(0);
  const [rightFootText, setRightFootText] = useState("");
  const [rightFootLetters, setRightFootLetters] = useState(0);
  const [increasePrice, setIncreasePrice] = useState(0);
  const maxLetters = 10;
  let price = 84.5;
  let embellish = 7.5;

  const handleLeftFootChange = (event) => {
    const input = event.target.value;
    const inputLength = input.length;
    setLeftFootText(input);
    setLeftFootLetters(maxLetters - inputLength);

    if (inputLength > 0 && rightFootText.length > 0) {
      embellish *= 2;
      setIncreasePrice(price + embellish); // Increase price by $15 if both feet have text
    } else if (inputLength > 0 || rightFootText.length > 0) {
      setIncreasePrice(price + embellish); // Increase price by $7.50 if one foot has text
    } else {
      setIncreasePrice(price); // Reset the price if no foot has text
    }
  };

  const handleRightFootChange = (event) => {
    const input = event.target.value;
    const inputLength = input.length;
    setRightFootText(input);
    setRightFootLetters(maxLetters - inputLength);

    if (inputLength > 0 && leftFootText.length > 0) {
      embellish *= 2;
      setIncreasePrice(price + embellish); // Increase price by $15 if both feet have text
    } else if (inputLength > 0 || leftFootText.length > 0) {
      setIncreasePrice(price + embellish); // Increase price by $7.50 if one foot has text
    } else {
      setIncreasePrice(price); // Reset the price if no foot has text
    }
  };

  const handleClearAll = () => {
    setLeftFootText("");
    setLeftFootLetters(0);
    setRightFootText("");
    setRightFootLetters(0);
  };

  return (
    <div className={styles["sidebar-container"]}>
      {/* Sidebar Description */}
      <div className={styles.description}>
        <div className={styles.preHeader}>
          <div className={styles.productCategory}>
            <span>Originals</span>
          </div>
          <button className={styles.reviewCount} link=".ProductInfo/reviews">
            * * * * * 434
          </button>
        </div>
        <h1 className={styles.productTitle}>
          <span>ZX 5K BOOST SHOES</span>
        </h1>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>
            <s>130 </s>
          </div>
          <div className={styles.discountPrice}>84.50</div>
        </div>
        <div className={styles.colorName}>
          Core Black / Core Black / Grey Six
        </div>
      </div>

      {/* Embellishment/Personalization */}
      <div className={styles.sideBarEmbellishments}>
        <span className={styles.heading}>Personalise</span>
        <p className={styles.embellishDescription}>
          Add name or number to personalise your adidas or to create the perfect
          gift!
        </p>
        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <label
              htmlFor={styles.leftShoeText}
              className={styles.input_label}
            ></label>
            <div className={styles.inputBoxContainer}>
              <input
                id={styles.leftShoeText}
                name="leftShoeText"
                type="text"
                value={leftFootText}
                onChange={handleLeftFootChange}
                maxLength={maxLetters}
                className={styles.inputBox}
                role="textbox"
                placeholder="Left Foot"
              />
              <span className={styles.inputCount}>
                {leftFootLetters} / {maxLetters}
              </span>
            </div>
          </div>
          <div className={styles.input}>
            <label
              htmlFor={styles.rightShoeText}
              className={styles.input_label}
            ></label>
            <div className={styles.inputBoxContainer}>
              <input
                id={styles.rightShoeText}
                type="text"
                value={rightFootText}
                onChange={handleRightFootChange}
                maxLength={maxLetters}
                className={styles.inputBox}
                placeholder="Right Foot"
              />
              <span className={styles.inputCount}>
                {rightFootLetters} / {maxLetters}
              </span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className={styles.summary}>
          <button className={styles.clearButton} onClick={handleClearAll}>
            Clear All
          </button>
          {leftFootLetters !== 0 || rightFootLetters !== 0 ? (
            <div>
              <span className={styles.priceTotal}>In total:</span>
              <span className={styles.embellishPrice}>
                £{price.toFixed(2)} + £{embellish.toFixed(2)} = £
                {increasePrice.toFixed(2)}
              </span>
            </div>
          ) : null}
        </div>
      </div>

      <div>
        <ShoeInventory />
      </div>

      {/* Add To Bag */}
      <div id={styles.AddToBag} tabindex="-1">
        <button type="button" className={styles.AddToBag} title="Add To Bag">
          <span className={styles.AddToBagTitle}>ADD TO BAG</span>
          <img className={styles.rtarrowicon} src="./img/RTArrowIcon.png" />
        </button>
        <div className={styles.addWishListContainer}>
          <div className={styles.favContainer}>
            <img className={styles.favoriteIcon} src="./img/favoriteIcon.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
