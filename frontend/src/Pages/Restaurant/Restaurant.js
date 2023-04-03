import RatingStars from '../../Components/RatingStars/RatingStars.js';
import Button from '../../Components/Button/index';
import mapImg from '../../Assets/temp/restaurant-map.jpg';
import pinImg from '../../Assets/pin.svg';
import webImg from '../../Assets/web.svg';
import phoneImg from '../../Assets/phone.svg';
import moneyImg from '../../Assets/money.svg';
import clockImg from '../../Assets/clock.svg';
import { Category, ContactContainer, ContactDetails, HeaderContainer, IconTextContainer, Name, RatingContainer, TitleContainer } from './RestaurantStyles.js';
import styled from 'styled-components';
import Review from './Review/Review.js';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 22px;
  background-color: #F2F2F2;
  padding: 25px;
`

const FilterBar = styled.div`
  width: 650px;
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;

  input{
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    margin-right: 20px;
  }
`

const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; 
`

const Separator = styled.div`
  height: 1px;
  background-color: #D8D8D8;
  margin: 15px 0;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 75px;
  margin-top: 30px;
`

const ButtonWraper = styled.div`
  width: 200px;
`

const ButtonWraperSmall = styled.div`
  width: 120px;
`

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
            <input></input>
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