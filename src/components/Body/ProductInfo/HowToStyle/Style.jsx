import styles from "./Style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function Style() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  let data = [
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA.jpg",
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA.jpg",
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA.jpg",
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA.jpg",
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA.jpg",
    },
  ];
  return (
    <div>
      <div className={styles["style-container"]}>
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroup={3}
          scrollbar={true}
          grabCursor={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className={styles["swiper"]}
        >
          {data &&
            data.map((image) => {
              return (
                <SwiperSlide className="test">
                  <CarouselElement
                    className={styles["product-card"]}
                    image={image.image_url}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <svg
          ref={navigationNextRef}
          className={styles["carousel-btn-next"]}
          onClick={() => {
            console.log("forward");
          }}
        >
          <path
            d="m17.59 7 5 5-5 5M0 12h22"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></path>
        </svg>
        <svg
          ref={navigationPrevRef}
          className={styles["carousel-btn-prev"]}
          onClick={() => {
            console.log("backward");
          }}
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-iterlimit="10"
            strokeWidth="2"
            d="m6.4 17-5-5 5-5M2 12h22"
          ></path>
        </svg>
      </div>
    </div>
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
        <h1>Cyka Blyat</h1>
        <p className={styles["card-desc"]}>Originals</p>
      </div>
    </div>
  );
}
