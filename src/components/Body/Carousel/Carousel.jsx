import styles from "./Carousel.module.css";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function Carousel(props) {
  const [imageArray, setImageArray] = useState();
  const getAPI = async () => {
    let apiURL = `${process.env.NEXT_PUBLIC_API_URL}/imagecarousel/${props.shoe}`;
    let response = await fetch(apiURL);
    let data = await response.json();
    setImageArray(data);
    console.log(data);
  };
  useEffect(() => {
    getAPI();
  }, []);
  useEffect(() => {
    getAPI();
  }, [props.shoe]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <h1 className={styles["slider-header"]}>{props.type}</h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroup={3}
        scrollbar={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={styles["swiper"]}
      >
        {imageArray &&
          imageArray.map((image, index) => {
            if (image.element == props.type) {
              return (
                <SwiperSlide key={`${image.element}-${index}`}>
                  <CarouselElement
                    className={styles["product-card"]}
                    image={image.image_url}
                    product_title={image.product_title}
                  />
                </SwiperSlide>
              );
            }
          })}
      </Swiper>
      <svg ref={navigationNextRef} className={styles["carousel-btn-next"]}>
        <path
          d="m17.59 7 5 5-5 5M0 12h22"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></path>
      </svg>
      <svg ref={navigationPrevRef} className={styles["carousel-btn-prev"]}>
        <path
          fill="none"
          stroke="currentColor"
          stroke-iterlimit="10"
          strokeWidth="2"
          d="m6.4 17-5-5 5-5M2 12h22"
        ></path>
      </svg>
    </>
  );
}

function CarouselElement(props) {
  return (
    <div className={styles["product-card"]}>
      <div
        className={styles["card-top"]}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <p className={styles["price"]}>$10</p>
      </div>
      <div className={styles["card-bottom"]}>
        {props.product_title ? (
          <h1>{props.product_title}</h1>
        ) : (
          <h1>Cyka Blyat</h1>
        )}
        <p className={styles["card-desc"]}>Originals</p>
      </div>
    </div>
  );
}
