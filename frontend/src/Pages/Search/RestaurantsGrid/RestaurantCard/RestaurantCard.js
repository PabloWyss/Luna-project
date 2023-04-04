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
import {useNavigate} from "react-router-dom";

const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
const baseURLImage = isDev ? 'http://localhost:8001' : 'https://luna-team4.propulsion-learn.ch'

const RestaurantCard = (prop) => {

    const navigate = useNavigate()
    const handleClickDivRestaurantCard = (e) =>{
        e.preventDefault()
        navigate(`/restaurant/${prop.restaurant.id}/`)
    }




  return (
    <Card>
      <Details>
        <RestName onClick={handleClickDivRestaurantCard}>{prop.restaurant.name}</RestName>
        <RestAddress onClick={handleClickDivRestaurantCard}>{prop.restaurant.street}</RestAddress>
        <RatingContainer>
          <RatingStars />
          <ReviewCount>{prop.restaurant.reviews.length}</ReviewCount>
        </RatingContainer>
      </Details>
      <RestaurantImageContainer onClick={handleClickDivRestaurantCard}>
        <RestaurantImg  src={baseURLImage+prop.restaurant.image}></RestaurantImg >
      </RestaurantImageContainer>
    </Card>
  );
}

export default RestaurantCard;