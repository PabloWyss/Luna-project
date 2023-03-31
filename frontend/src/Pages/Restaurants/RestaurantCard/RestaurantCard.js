import starIcon from "../../../Assets/star.svg"
import restaurantImg from "../../../Assets/temp/restaurant-pic.jpg"
import { Card, Details, RatingContainer, RestAddress, RestName, ReviewCount } from "./RestaurantCardStyles";

const RestaurantCard = () => {
  return (
    <Card>
      <Details>
        <RestName>Restaurant Name</RestName>
        <RestAddress>Address</RestAddress>
        <RatingContainer>
          <div>
            <img src={starIcon}></img>
            <img src={starIcon}></img>
            <img src={starIcon}></img>
            <img src={starIcon}></img>
            <img src={starIcon}></img>
          </div>
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