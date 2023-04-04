import RatingStars from '../../Components/RatingStars/RatingStars.js';
import Button from '../../Components/Button/index';
import mapImg from '../../Assets/temp/restaurant-map.jpg';
import pinImg from '../../Assets/pin.svg';
import webImg from '../../Assets/web.svg';
import phoneImg from '../../Assets/phone.svg';
import moneyImg from '../../Assets/money.svg';
import clockImg from '../../Assets/clock.svg';
import { BodyContainer, ButtonsContainer, ButtonWraper, ButtonWraperSmall, Category, ContactContainer, ContactDetails, FilterBar, HeaderContainer, IconTextContainer, Name, NoReviewsText, RatingContainer, Separator, TitleContainer } from './RestaurantStyles.js';
import ReviewsList from './ReviewsList/ReviewsList.js';
import lunaAPI from '../../Axios/lunaApi.js';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const Restaurant = () => {
  const { restaurantID } = useParams();
  const [restaurantData, setRestaurantData] = useState({})

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getRestaurantByID = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await lunaAPI.get(`restaurants/${restaurantID}/`, config);
        setRestaurantData(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getRestaurantByID();
  }, []);



  return (
    <div>
      <HeaderContainer img={restaurantData?.image}>
        <TitleContainer>
          <Name>{restaurantData?.name}</Name>
          <Category>{restaurantData?.category}</Category>
          <RatingContainer>
            <RatingStars />
            <p>{restaurantData?.reviews?.length} reviews</p>
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
          {
            restaurantData.reviews?.length !== 0 ?
              <ReviewsList restaurantID={restaurantID} />
              :
              <NoReviewsText>
                No reviews yet
              </NoReviewsText>
          }
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