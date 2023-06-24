import React, { useState, useEffect } from "react";
import styles from "./ShoeInventory.module.css";
import { useRouter } from "next/router";

const ShoeInventory = () => {
  const router = useRouter();
  // State variables
  const [selectedSize, setSelectedSize] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [shoeInventory, setShoeInventory] = useState([]);
  const [scarcity, setScarcity] = useState(false);
  const [clickedSize, setClickedSize] = useState(null);

  useEffect(() => {
    // Fetch shoe inventory on component mount
    fetchShoeInventory();
  }, []);

  const fetchShoeInventory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sidebar/${router.query.shoe}`
      );
      const data = await response.json();
      setShoeInventory(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching shoe inventory:", error);
    }
  };

  const handleSizeClick = (size) => {
    if (size.stock === 0) {
      setShowModal(true);
      setSelectedSize(size);
    } else if (size.stock < 5) {
      setShowModal(false);
      setScarcity(true);
      console.log(`Selected size ${size.size}`);
    } else {
      setShowModal(false);
      setScarcity(false);
      console.log(`Selected size ${size.size}`);
    }
    setClickedSize(size);
  };

  return (
    <div className={styles.buySection}>
      {/* Sizes heading */}
      <div className={styles.headingContainer}>
        <div className={styles.heading}>Sizes</div>
      </div>
      <div className={styles.sizeSelector}>
        {/* Render shoe buttons */}
        {shoeInventory.map((shoe, index) => (
          <React.Fragment key={shoe.size}>
            <button
              className={`${styles.sizeButton} ${
                selectedSize === shoe && shoe.stock !== 0
                  ? styles.selectedSize
                  : ""
              } ${shoe.stock === 0 ? styles.outOfStock : ""} ${
                clickedSize === shoe && shoe.stock !== 0
                  ? styles.clickedSize
                  : ""
              }`}
              onClick={() => handleSizeClick(shoe)}
            >
              {shoe.stock === 0 && (
                <>
                  {shoe.size}
                  <img
                    className={styles.notificationIcon}
                    src="./img/notification.jpg"
                    alt="notification"
                  />
                </>
              )}
              {shoe.stock !== 0 && shoe.size}
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* Scarcity message */}
      {scarcity && (
        <div className={styles.scarcityMessage}>
          Don't miss out, last items available.
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => console.log(e.target.value)}
          />
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}

      {/* Side control */}
      <div className={styles.sideControl}>
        <img className={styles.ruler} src="./img/ruler.jpg" alt="ruler" />
        <span className={styles.sizeGuide}>Size guide</span>
      </div>

      {/* Fit guidance */}
      <div className={styles.fitGuidanceContainer}>
        <div className={styles.sizeAdvice}>
          <img
            className={styles.informationIcon}
            src="./img/informationIcon.png"
            alt="information icon"
          />
          <p className={styles.sizeAlert}>
            <span className={styles.trueToSize}>True to size.</span>
            <span className={styles.sizeRecommendation}>
              We recommend ordering your usual size.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoeInventory;
