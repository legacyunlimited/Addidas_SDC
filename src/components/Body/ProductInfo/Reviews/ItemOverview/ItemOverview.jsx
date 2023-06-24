import OverallReview from "./OverallReview/OverallReview";
import Sizing from "./Sizing/Sizing";
import Filter from "./Filter/Filter";
import StarRating from "./StarRatings/StarRatings";
import styles from "./ItemOverview.module.css";

export default function ItemOverview() {
  return (
    <div>
      <div><OverallReview /></div>
      <div><Sizing /></div>
      <div><Filter /></div>
      <div><StarRating /></div>
    </div>
  );
}
