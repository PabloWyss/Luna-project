import starIcon from "../../../../Assets/star.svg"
import restaurantImg from "../../../../Assets/temp/restaurant-pic.jpg"
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import {
    Card,
    Details,
    RatingContainer,
    RestAddress,
    RestaurantImg,
    RestName,
    ReviewCount
} from "./RestaurantCardStyles";

const RestaurantCard = (prop) => {

    console.log(prop.restaurant
    )
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
      <div>
        <RestaurantImg  src={prop.restaurant.image}></RestaurantImg >
      </div>
    </Card>
  );
}

export default RestaurantCard;