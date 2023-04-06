import styled from "styled-components";
import LikeCommentButtons from "../../../../Components/LikeCommentButtons/LikeCommentButtons";
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import ReviewUser from "../../../../Components/UserCardHeader/UserCardHeader";
import { ButtonWraperSmall, DateContainer, AddCommentWraper, HeaderRight, ReviewContainer, ReviewHeader, ReviewContent, CommentList, ShowHideCommentBtn, ReviewFooter } from "./ReviewStyles";
import Button from '../../../../Components/Button'
import Comment from "./Comment/Comment";
import { useState } from "react";
import { formatDate } from "../../../../helpers";
import {getCLS} from "web-vitals";

const Review = ({ review }) => {
  const [areAllCommentsShown, setAreAllCommentsShown] = useState(false)
  const handleShowHideCommentsClick = () => {
    setAreAllCommentsShown(prev => !prev);
  }

  const commentClick = () => {
    setAreAllCommentsShown(true)
  }

  return (
    <ReviewContainer>
      <ReviewHeader>
        <HeaderRight>
          <ReviewUser userName={review?.reviewed_by_user.username} />
          <RatingStars rating={review.rating} />
        </HeaderRight>
        <DateContainer>
          <p>{formatDate(review?.date_created)}</p>
        </DateContainer>
      </ReviewHeader>
      <div>
        <div>
          <ReviewContent>{review?.text_content}</ReviewContent>
          {
            areAllCommentsShown ?
              <div>
                <ReviewFooter>
                  <AddCommentWraper>
                    <input placeholder='Add a comment...'></input>
                    <ButtonWraperSmall>
                      <Button textInput={'POST'} />
                    </ButtonWraperSmall>
                  </AddCommentWraper>
                  <ShowHideCommentBtn onClick={handleShowHideCommentsClick}>Hide</ShowHideCommentBtn>
                </ReviewFooter>
                <CommentList>
                  <Comment></Comment>
                  <Comment></Comment>
                  <Comment></Comment>
                  <Comment></Comment>
                </CommentList>
              </div>
              :
              <div>
                <ReviewFooter>
                  <LikeCommentButtons likesCount={review?.likes_on_review} commentClick={commentClick} />
                  <ShowHideCommentBtn onClick={handleShowHideCommentsClick}>View all comments</ShowHideCommentBtn>
                </ReviewFooter>
              </div>
          }
        </div>
      </div>
    </ReviewContainer>
  );
}

export default Review;