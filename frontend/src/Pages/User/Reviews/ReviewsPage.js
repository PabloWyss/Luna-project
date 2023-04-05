import React from "react";
import {
    Container,
    ReviewsTitleDateDiv,
    Title,
} from './ReviewPageStyles';
import ReviewComponent from "./ReviewComponent";

const Reviews = () => {
  return (
    <Container>
        <ReviewsTitleDateDiv>
            <Title>Reviews</Title>
        </ReviewsTitleDateDiv>
        <ReviewComponent/>
        <ReviewComponent/>
        <ReviewComponent/>
        <ReviewComponent/>
    </Container>
  );
};

export default Reviews;
