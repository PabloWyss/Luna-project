import RatingStars from '../../Components/RatingStars/RatingStars.js';
import Button from '../../Components/Button/index';
import mapImg from '../../Assets/temp/restaurant-map.jpg';
import pinImg from '../../Assets/pin.svg';
import webImg from '../../Assets/web.svg';
import phoneImg from '../../Assets/phone.svg';
import moneyImg from '../../Assets/money.svg';
import clockImg from '../../Assets/clock.svg';
import { BodyContainer, ButtonsContainer, ButtonWraper, ButtonWraperSmall, Category, ContactContainer, ContactDetails, FilterBar, HeaderContainer, IconTextContainer, Name, RatingContainer, ReviewsList, Separator, TitleContainer } from './RestaurantStyles.js';
import Review from './Review/Review.js';

const Restaurant = () => {
  return (
    <div>
      <HeaderContainer>
        <TitleContainer>
          <Name>Restaurant name</Name>
          <Category>Restaurant category</Category>
          <RatingContainer>
            <RatingStars />
            <p>68 reviews</p>
          </RatingContainer>
        </TitleContainer>
        <ContactContainer>
          <img src={mapImg}></img>
          <ContactDetails>
            <IconTextContainer>
              <img src={pinImg}></img>
              <p>Address</p>
            </IconTextContainer>
            <IconTextContainer>
              <img src={phoneImg}></img>
              <p>Phone Number</p>
            </IconTextContainer>
            <IconTextContainer>
              <img src={webImg}></img>
              <p>Website</p>
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
          <ReviewsList>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </ReviewsList>
        </div>
        <div>
          <IconTextContainer>
            <img src={clockImg}></img>
            <p>Opening hours</p>
          </IconTextContainer>
          <Separator />
          <IconTextContainer>
            <img src={moneyImg}></img>
            <p>Price level</p>
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