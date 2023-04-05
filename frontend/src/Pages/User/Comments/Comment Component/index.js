import {CommentsDateP, CommentsDescriptionDiv , CommentsDiv, CommentsTitleDiv} from "../CommentsStyles"
import React from "react";

const CommentComponent = ({ comment }) => {
  return (
    <CommentsDiv>
      <CommentsTitleDiv>
        <p>Comments</p>
        <CommentsDateP>{comment?.date_created}</CommentsDateP>
      </CommentsTitleDiv>
      <CommentsDescriptionDiv>
        <p>{comment?.text_content}</p>
      </CommentsDescriptionDiv>
    </CommentsDiv>
  );
};
export default CommentComponent;
