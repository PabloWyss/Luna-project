import LikeCommentButtons from "../../../../Components/LikeCommentButtons/LikeCommentButtons";
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import ReviewUser from "../../../../Components/UserCardHeader/UserCardHeader";
import { DateContainer, HeaderRight, ReviewBody, ReviewContainer, ReviewHeader } from "./ReviewStyles";

const Review = ({ review }) => {
  return (
    <ReviewContainer>
      <ReviewHeader>
        <HeaderRight>
          <ReviewUser />
          <RatingStars />
        </HeaderRight>
        <DateContainer>
          <p>{review?.date_created}</p>
        </DateContainer>
      </ReviewHeader>
      <ReviewBody>
        <p>{review?.text_content}</p>
        <LikeCommentButtons likesCount={review?.likes_on_review} />
      </ReviewBody>
    </ReviewContainer>
  );
}

export default Review;