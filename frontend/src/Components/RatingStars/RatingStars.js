import { useState } from "react";
import styled from "styled-components";
import Star from "./Star/Star";

const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const RatingStars = (props) => {
  const [rating, setRating] = useState(props.average_rating);

  return (
    <StarsContainer>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => {
            setRating(value)
          }}
        />
      ))}
    </StarsContainer>
  );
}
export default RatingStars;

