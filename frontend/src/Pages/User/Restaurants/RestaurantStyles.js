import React from 'react';
import RestaurantsComponent from "./RestaurantsComponent";
import {Title, Container, ReviewsTitleDateDiv} from "../Reviews/ReviewStyles";
import OrangeButton from "../../../Components/Button";
import {RestaurantButtonDiv} from "./RestaurantsComponent/RestaurantComponent.style";

const Restaurant = () => {
  return (
      <div>
        <Container>
            <ReviewsTitleDateDiv>
                <Title>Restaurants</Title>
            </ReviewsTitleDateDiv>
            <RestaurantsComponent/>
            <RestaurantsComponent/>
            <RestaurantButtonDiv >
              <OrangeButton textInput={'Create Restaurant'}/>
            </RestaurantButtonDiv >
        </Container>

      </div>
      );


};

export default Restaurant;
