import React from 'react';
import CommentComponent from "./Comment Component";
import {ReviewsTitleDateDiv, Title, Container} from "../Reviews/ReviewStyles";


const Comments = () => {
  return (
    <Container>
        <ReviewsTitleDateDiv>
            <Title>Comments</Title>
        </ReviewsTitleDateDiv>
        <CommentComponent/>
        <CommentComponent/>
        <CommentComponent/>
    </Container>
  );
};

export default Comments;
