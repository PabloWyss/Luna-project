import { useState } from "react";
import styled from "styled-components";
import Star from "./Star/Star";

const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const RatingStars = ({ rating, isVoting }) => {
  const [votingRating, setVotingRating] = useState(0);

  if (isVoting) {
    return (
      <StarsContainer>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            filled={value <= votingRating}
            onClick={() => {
              setVotingRating(value)
            }}
          />
        ))}
      </StarsContainer>
    );
  }

  return (
    <StarsContainer>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
        />
      ))}
    </StarsContainer>
  );
}
export default RatingStars;

