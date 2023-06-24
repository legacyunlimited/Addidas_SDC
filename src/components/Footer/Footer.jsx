import styles from "./Footer.module.css";
import BottomFooter from "./BottomFooter/BottomFooter";
import MidFooter from "./MidFooter/MidFooter";
import TopFooter from "./TopFooter/TopFooter";

export default function Footer() {
  return (
    <>
      <TopFooter />
      <MidFooter />
      <BottomFooter />
    </>
  );
}
