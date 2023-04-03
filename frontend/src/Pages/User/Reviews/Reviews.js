import React from "react";
import {
    Container,
    ReviewsTitleDateDiv,
    Title,
} from './ReviewStyles';
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
