import { useEffect, useState } from "react";
import styled from "styled-components";
import lunaAPI from "../../../Axios/lunaApi";
import Review from '../ReviewsList/Review/Review'

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; 
`

const ReviewsList = ({ restaurantID }) => {
  const [reviewsList, setReviewsList] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getReviewsFromRestaurantByID = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await lunaAPI.get(`reviews/restaurant/${restaurantID}/`, config);
        setReviewsList(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getReviewsFromRestaurantByID();
  }, []);

  return (
    <List>
      {
        reviewsList.map(review => {
          return <Review key={review.id} review={review} />
        })
      }
    </List>
  );
}

export default ReviewsList;