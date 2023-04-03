import RatingStars from '../../Components/RatingStars/RatingStars.js';
import Button from '../../Components/Button/index';
import mapImg from '../../Assets/temp/restaurant-map.jpg';
import pinImg from '../../Assets/pin.svg';
import webImg from '../../Assets/web.svg';
import phoneImg from '../../Assets/phone.svg';
import { Category, ContactContainer, ContactDetails, HeaderContainer, IconTextContainer, Name, RatingContainer, TitleContainer } from './RestaurantStyles.js';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #F2F2F2;
`

const FilterBar = styled.div`
  width: 650px;
  display: flex;
  flex-direction: row;

  input{
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
  }
`

const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
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
            <Button textInput={'FILTER'} />
          </FilterBar>
          <ReviewsList>
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
          </ReviewsList>
        </div>
        <div>
          <p>Opening hours</p>
          <p>Price level</p>
          <div>
            <Button textInput={'WRITE A REVIEW'} />
            <Button textInput={'EDIT DATA'} />
          </div>
        </div>
      </BodyContainer>
    </div>
  );
}

export default Restaurant;  