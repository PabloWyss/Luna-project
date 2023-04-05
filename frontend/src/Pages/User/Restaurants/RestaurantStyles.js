import React from 'react';
import RestaurantsComponent from "./RestaurantsComponent";
import {Title, Container, ReviewsTitleDateDiv} from "../Reviews/ReviewStyles";
import OrangeButton from "../../../Components/Button";
import {RestaurantButtonDiv} from "./RestaurantsComponent/RestaurantComponent.style";
import { NavLink } from 'react-router-dom';

const Restaurant = () => {
  return (
    <div>
      <Container>
        <ReviewsTitleDateDiv>
          <Title>Restaurants</Title>
        </ReviewsTitleDateDiv>
        <RestaurantsComponent />
        <RestaurantsComponent />
        <RestaurantButtonDiv>
          <NavLink to="/restaurants/new/">
            <OrangeButton textInput={'Create Restaurant'} />
          </NavLink>
        </RestaurantButtonDiv>
      </Container>
    </div>
  );
};


export default Restaurant;
