import starIcon from "../../../../Assets/star.svg"
import restaurantImg from "../../../../Assets/temp/restaurant-pic.jpg"
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import { Card, Details, RatingContainer, RestAddress, RestName, ReviewCount } from "./RestaurantCardStyles";

const RestaurantCard = () => {
  return (
    <Card>
      <Details>
        <RestName>Restaurant Name</RestName>
        <RestAddress>Address</RestAddress>
        <RatingContainer>
          <RatingStars />
          <ReviewCount>24</ReviewCount>
        </RatingContainer>
      </Details>
      <div>
        <img src={restaurantImg}></img>
      </div>
    </Card>
  );
}

export default RestaurantCard;