import React from "react";
import {
    Container,
    Title,
} from './ReviewStyles';
import ReviewComponent from "./ReviewComponent";

const Reviews = () => {
  return (
    <Container>
        <Title>Reviews</Title>
        <ReviewComponent/>
        <ReviewComponent/>
    </Container>
  );
};

export default Reviews;
