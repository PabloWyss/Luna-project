import RatingStars from '../../Components/RatingStars/RatingStars.js';
import Button from '../../Components/Button/index';
import mapImg from '../../Assets/temp/restaurant-map.jpg';
import pinImg from '../../Assets/pin.svg';
import webImg from '../../Assets/web.svg';
import phoneImg from '../../Assets/phone.svg';
import moneyImg from '../../Assets/money.svg';
import clockImg from '../../Assets/clock.svg';
import { BodyContainer, ButtonsContainer, ButtonWraper, ButtonWraperSmall, Category, ContactContainer, ContactDetails, FilterBar, HeaderContainer, IconTextContainer, Name, RatingContainer, Separator, TitleContainer } from './RestaurantStyles.js';
import { useSelector } from 'react-redux';
import ReviewsList from './ReviewsList/ReviewsList.js';

const Restaurant = () => {

  const restaurantData = useSelector(state => state.restaurant.restaurantData)
  const reviewsCount = restaurantData.reviews.length;
  console.log(restaurantData, reviewsCount);

  return (
    <div>
      <HeaderContainer>
        <TitleContainer>
          <Name>{restaurantData?.name}</Name>
          <Category>{restaurantData?.category}</Category>
          <RatingContainer>
            <RatingStars />
            <p>{reviewsCount} reviews</p>
          </RatingContainer>
        </TitleContainer>
        <ContactContainer>
          <img src={mapImg}></img>
          <ContactDetails>
            <IconTextContainer>
              <img src={pinImg}></img>
              <p>{restaurantData.street}</p>
            </IconTextContainer>
            <IconTextContainer>
              <img src={phoneImg}></img>
              <p>{restaurantData.phone}</p>
            </IconTextContainer>
            <IconTextContainer>
              <img src={webImg}></img>
              <p>{restaurantData.website}</p>
            </IconTextContainer>
          </ContactDetails>
        </ContactContainer>
      </HeaderContainer>
      <BodyContainer>
        <div>
          <FilterBar>
            <input placeholder='Filter list...'></input>
            <ButtonWraperSmall>
              <Button textInput={'FILTER'} />
            </ButtonWraperSmall>
          </FilterBar>
          <ReviewsList reviewsList={restaurantData.reviews} />
        </div>
        <div>
          <IconTextContainer>
            <img src={clockImg}></img>
            <p>{restaurantData.opening_hours}</p>
          </IconTextContainer>
          <Separator />
          <IconTextContainer>
            <img src={moneyImg}></img>
            <p>Price: {restaurantData.price_range}</p>
          </IconTextContainer>
          <ButtonsContainer>
            <ButtonWraper>
              <Button textInput={'WRITE A REVIEW'} />
            </ButtonWraper>
            <ButtonWraper>
              <Button textInput={'EDIT DATA'} />
            </ButtonWraper>
          </ButtonsContainer>
        </div>
      </BodyContainer >
    </div >
  );
}

export default Restaurant;  