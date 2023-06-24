import Carousel from "./Carousel/Carousel";
import Gallery from "./Gallery/Gallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Body.module.css";

import Metrices from "./Metrices.jsx";
import { useRouter } from "next/router";

{
  /* <Bar data={...} /> */
}

export default function Body(props) {
  const router = useRouter();

  if (!router.query.shoe) return <>Loading...</>;

  return (
    <div id={styles["body-container"]}>
      <div id={styles["main"]}>
        <Metrices />
        <Gallery
          shoe={router.query.shoe}
          handleShoeChange={props.handleShoeChange}
        />
        <ProductInfo shoe={router.query.shoe} />
        {/* complete the look */}
        <Carousel shoe={router.query.shoe} type="complete the look" />
        {/* youmay also like */}
        <Carousel shoe={router.query.shoe} type="you may also like" />
        {/* others also bought */}
        <Carousel shoe={router.query.shoe} type="others also bought" />
        <Carousel shoe={router.query.shoe} type="recently viewed items" />
      </div>
      <div id={styles["sidebar-container"]}>
        <Sidebar />
      </div>
    </div>
  );
}
