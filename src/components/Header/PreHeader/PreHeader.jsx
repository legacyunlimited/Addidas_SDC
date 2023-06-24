import React, { useEffect, useState } from "react";
import PreHeaderOverlay from "./PreHeaderOverlay/PreHeaderOverlay";
import styles from "./PreHeader.module.css";

export default function PreHeader() {
  const [preheaderDetails, setPreheaderDetails] =
    useState("RETURNS & EXCHANGE");
  const [isFirstValue, setIsFirstValue] = useState(true);
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstValue((prevValue) => !prevValue);
      setIsFadeIn(true);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setPreheaderDetails(
      isFirstValue ? "RETURNS & EXCHANGE" : "FREE DELIVERIES ON ORDERS OVER £25"
    );
    setIsFadeIn(false);
  }, [isFirstValue]);

  const handleArrowDownClick = () => {
    setIsOverlayVisible((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOverlayVisible]);

  return (
    <header className={styles["preheader-container"]}>
      {isOverlayVisible && <PreHeaderOverlay />}
      <div
        className={`${styles["preheader-details-container"]} ${
          isFadeIn && styles.fadeIn
        }`}
      >
        <h4
          className={`${styles["preheader-details"]} ${
            isFadeIn && styles.fadeIn
          }`}
        >
          {preheaderDetails}
        </h4>
        <img
          className={`${styles["arrow-down"]} ${isFadeIn && styles.fadeIn}`}
          src="./img/arrow-down-white.svg"
          alt="arrow-down"
          onClick={handleArrowDownClick}
        />
      </div>
    </header>
  );
}
