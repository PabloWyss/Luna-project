import starIcon from "../../../../Assets/star.svg"
import restaurantImg from "../../../../Assets/temp/restaurant-pic.jpg"
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import {
    Card,
    Details,
    RatingContainer,
    RestAddress,
    RestaurantImageContainer,
    RestaurantImg,
    RestName,
    ReviewCount
} from "./RestaurantCardStyles";

const RestaurantCard = (prop) => {

  return (
    <Card>
      <Details>
        <RestName>{prop.restaurant.name}</RestName>
        <RestAddress>{prop.restaurant.street}</RestAddress>
        <RatingContainer>
          <RatingStars />
          <ReviewCount>{prop.restaurant.reviews.length}</ReviewCount>
        </RatingContainer>
      </Details>
      <RestaurantImageContainer>
        <RestaurantImg  src={prop.restaurant.image}></RestaurantImg >
      </RestaurantImageContainer>
    </Card>
  );
}

export default RestaurantCard;