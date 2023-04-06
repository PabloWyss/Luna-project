import {CommentsDateP, CommentsDescriptionDiv , CommentsDiv, CommentsTitleDiv} from "../CommentsStyles"
import React from "react";

const CommentComponent = ({ comment }) => {
  return (
    <CommentsDiv>
      <CommentsTitleDiv>
        <CommentsDateP>{comment?.created_date}</CommentsDateP>
      </CommentsTitleDiv>
      <CommentsDescriptionDiv>
        <p>{comment?.text_content}</p>
      </CommentsDescriptionDiv>
    </CommentsDiv>
  );
};
export default CommentComponent;
