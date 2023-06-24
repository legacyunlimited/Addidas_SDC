import React, { useEffect, useState } from 'react';
import styles from './PreHeaderOverlay.module.css';

export default function PreHeaderOverlay() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleCloseClick = () => {
    setIsOverlayVisible(false);
  };

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOverlayVisible]);

  return (
    <>
      {isOverlayVisible && (
        <div className={styles['overlay-wrapper']}>
          <div className={styles['panel-content-container']}>
            <div className={styles['close-icon-container']}>
              <div className={styles['close-btn-box']}>
                <span className={styles['close-btn']} onClick={handleCloseClick}>
                  &times;
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
