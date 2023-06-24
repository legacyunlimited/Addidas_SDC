import Reviews from "./Reviews/Reviews";
import Description from "./Description/Description";
import Details from "./Details/Details";
import Style from "./HowToStyle/Style";
import styles from "./ProductInfo.module.css";
import AccordionButton from "./Accordion/AccordionButton";
import { useEffect, useState } from "react";

export default function ProductInfo() {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/productinfo/1`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProductInfo(data);
      });
  }, []);
  console.log(productInfo);
  return (
    <div className={styles["product-info-container"]}>
      <AccordionButton
        title={
          <div className={styles["overall"]}>
            <button className={styles["toggle-btn"]}>
              <div>Reviews (434)</div>
              <div className={styles["rating"]}>
                <div>4.7</div>
                <div className={styles["stars"]}>★★★★★</div>
              </div>
            </button>{" "}
          </div>
        }
        content={
          <div className={styles["content"]}>
            <Reviews productInfo={productInfo} />
          </div>
        }
      />
      <AccordionButton
        title={<button className={styles["toggle-btn"]}>Description</button>}
        content={
          <div className={styles["content"]}>
            <Description productInfo={productInfo} />
          </div>
        }
      />
      <AccordionButton
        title={<button className={styles["toggle-btn"]}>Details</button>}
        content={
          <div className={styles["content"]}>
            <Details />
          </div>
        }
      />
      <AccordionButton
        title={<button className={styles["toggle-btn"]}>How to style</button>}
        content={
          <div className={styles["content"]}>
            <Style />
          </div>
        }
      />
    </div>
  );
}
