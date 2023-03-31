import styled from "styled-components";
import starIcon from "../../../Assets/star.svg"
import restaurantImg from "../../../Assets/restaurant-pic.jpg"

const Card = styled.div`
  width: 270px;
  border-radius: 3px;
  border-top: 8px solid #E47D31;
  background-color: #FFFFFF;

  p {
    color: #4C4C4C;
  }
`

const Details = styled.div`
  padding: 20px 15px;
`

const RestName = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 6px;
`

const RestAddress = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 12px;
`

const ReviewCount = styled.p`
  font-size: 20px;
  font-weight: 300;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2px;

  img {
    width: 27px;
  }
`

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