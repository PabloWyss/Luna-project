import React, { useState, useEffect } from "react";
import { ReviewsDateP, ReviewsDiv, ReviewsTitleDiv } from "../../Reviews/ReviewStyles";
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import lunaAPI from "../../../../Axios/lunaApi";
import { NavLink } from "react-router-dom";
import { RestaurantLink } from "./RestaurantStyles";

const RestaurantsComponent = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await lunaAPI.get("/restaurants");
        setRestaurants(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurants();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const timestamp = Date.parse(dateString);
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", options);
  };



  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantLink to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
          <ReviewsDiv>
            <ReviewsTitleDiv>
              <p>{restaurant.name}</p>
              <ReviewsDateP>{formatDate(restaurant.date_created)}</ReviewsDateP>
            </ReviewsTitleDiv>
            <div>
              <RatingStars rating={restaurant.average_rating} isVoting={false} />
            </div>
          </ReviewsDiv>
        </RestaurantLink>
      ))}
    </>
  );
};

export default RestaurantsComponent;
