import { useState, useEffect } from "react";
import { ReviewsDateP, ReviewsDescriptionDiv, ReviewsDiv, ReviewsTitleDiv } from "../ReviewStyles";
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import lunaAPI from "../../../../Axios/lunaApi";

const ReviewComponent = ({ review }) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await lunaAPI.get(`/restaurants/${review.restaurant}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurant();
  }, [review.restaurant]);

  return (
    <ReviewsDiv>
      <ReviewsTitleDiv>
        <p>{review?.review_on_restaurant?.name}</p>
        <ReviewsDateP>{review?.date_created}</ReviewsDateP>
      </ReviewsTitleDiv>
      <div>
        <RatingStars />
      </div>
      <ReviewsDescriptionDiv>
        <p>{review?.text_content}</p>
      </ReviewsDescriptionDiv>
    </ReviewsDiv>
  );
};

export default ReviewComponent;
