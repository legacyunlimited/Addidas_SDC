import { useEffect, useState, useRef } from "react";
import styles from "./Gallery.module.css";
import { useRouter } from "next/router";

export default function Gallery(props) {
  const [galleryArray, setGalleryArray] = useState(null);

  const router = useRouter();

  const getAPI = async () => {
    let apiURL = `${process.env.NEXT_PUBLIC_API_URL}/gallery/${router.query.shoe}`;
    let response = await fetch(apiURL);
    let data = await response.json();
    setGalleryArray(data);
  };
  useEffect(() => {
    getAPI();
  }, []);
  useEffect(() => {
    getAPI();
  }, [props.shoe]);

  return (
    galleryArray && (
      <>
        <div id={styles["gallery"]} className={styles[""]}>
          {galleryArray.map((image, index) => {
            if (image.i == 2) {
              return (
                <ProductVideo
                  video={image.image_url}
                  key={`gallery-${index}`}
                />
              );
            }
            return (
              <ProductImage
                index={image.i}
                url={image.image_url}
                key={`gallery-${index}`}
              />
            );
          })}
        </div>
        <ShowMoreButton />
        <ShoePicker handleShoeChange={props.handleShoeChange} />
      </>
    )
  );
}

function ProductImage(props) {
  return (
    <div className={styles["gallery-container"]}>
      <img className={styles["image"]} src={props.url}></img>
    </div>
  );
}

function ProductVideo(props) {
  const [videoPlay, setVideoPlay] = useState(true);
  return (
    <div className={styles["gallery-container"]}>
      <video
        autoPlay
        loop
        alt="video"
        playsInline=""
        src={props.video}
        onClick={(e) => {
          videoPlay ? e.target.pause() : e.target.play();
          setVideoPlay(!videoPlay);
        }}
        id="video-item"
      ></video>
    </div>
  );
}

function ShowMoreButton(props) {
  const [showBtn, setShowBtn] = useState("Show More");
  const [arrow, setArrow] = useState(
    <svg id={styles["arrow"]} height={20} width={20}>
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M1.5 9 8 15.5 14.5 9"
      ></path>
    </svg>
  );
  const [arrowDown, setArrowDown] = useState(false);
  return (
    <>
      <div id={styles["btn-container"]}>
        <button
          type="button"
          onClick={() => {
            showMore();
            if (!arrowDown) {
              setArrowDown(true);
              setShowBtn("Show Less");
              setArrow(
                <svg id={styles["arrow"]} height={20} width={20}>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M1.5 14.5 8 8l6.5 6.5"
                  ></path>
                </svg>
              );
            } else {
              setArrowDown(false);
              setShowBtn("Show More");
              setArrow(
                <svg id={styles["arrow"]} height={20} width={20}>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M1.5 9 8 15.5 14.5 9"
                  ></path>
                </svg>
              );
            }
          }}
        >
          <span>{showBtn}</span>
          {arrow}
        </button>
      </div>
    </>
  );
}

function ShoePicker(props) {
  const [isStatic, setIsStatic] = useState(true);
  const urlArr = [
    {
      url: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f26fbfd3503a405bad10adf3017c51ef_9366/ZX_5K_Boost_Shoes_Grey_GW3039_01_standard.jpg",
      id: 3,
    },
    {
      url: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/528f520383204ef0b49bad710158e1a2_9366/ZX_5K_Boost_Shoes_White_GW3043_01_standard.jpg",
      id: 2,
    },
    {
      url: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e871521fbe724ca0b713ad7400c3e265_9366/ZX_5K_Boost_Shoes_Black_GX8664_01_standard.jpg",
      id: 1,
    },
  ];
  return (
    <div className="" id={styles["shoe-selection-container"]}>
      <h2>3 COLOURS AVAILABLE</h2>
      <div id={styles["shoe-selection-gallery"]}>
        {urlArr.map((shoe, index) => {
          return (
            <ShoeSelection
              shoe={shoe}
              handleShoeChange={props.handleShoeChange}
              key={`shoe-picker-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}

function ShoeSelection(props) {
  return (
    <div
      className={styles["shoe-selection-element"]}
      onClick={() => {
        props.handleShoeChange(props.shoe.id);
      }}
    >
      <img src={props.shoe.url} alt="shoe_pick" id={props.shoe.id} />
    </div>
  );
}

function showMore() {
  document.getElementById(styles["gallery"]).classList.toggle(styles["show"]);
}
