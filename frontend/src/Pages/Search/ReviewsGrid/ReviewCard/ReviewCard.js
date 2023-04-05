import {
  Card,
  CardHeader,
  Comment,
  LatestComments,
  CardBody,
  TextGreyBold,
  TextOrangeBig,
  TextOrangeSmall,
  UserAvatar,
  UserInfo,
  ReviewTextDiv
} from "./ReviewCardStyles";
import LikeCommentButtons from "../../../../Components/LikeCommentButtons/LikeCommentButtons";
import CommentReview from "./ComentReview";

const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
const baseURLImage = isDev ? 'http://localhost:8001' : 'https://luna-team4.propulsion-learn.ch'

const ReviewCard = (props) => {

  const userID = localStorage.getItem('id')
  const likedByLoginUser = props.review.liked_by_user.includes(Number(userID))
  const firstTwoComents = props.review.comments.slice(0, 2);
  let commentLength = 130

  return (
    <Card>
      <CardHeader>
        <UserAvatar>
          <img src={baseURLImage+props.review.reviewed_by_user.profile_picture}></img>
        </UserAvatar>
        <UserInfo>
          <TextOrangeBig>{props.review.reviewed_by_user.username}</TextOrangeBig>
          <TextGreyBold> 10 Reviews in total</TextGreyBold>
        </UserInfo>
      </CardHeader>
      <CardBody>
        <ReviewTextDiv>
          <TextOrangeBig>{props.review.review_on_restaurant.name}</TextOrangeBig>
          <TextGreyBold>{props.review.text_content.length<commentLength ?
              props.review.text_content :
              `${props.review.text_content.slice(0, commentLength)}...`
          }</TextGreyBold >

          <TextOrangeSmall>
              {props.review.text_content.length<commentLength ?
              "" :
              "read more"}
          </TextOrangeSmall>
        </ ReviewTextDiv>
        <LikeCommentButtons idReview={props.review.id} likedByLoginUser={likedByLoginUser} likesCount={props.review.liked_by_user.length} commentsCount={props.review.comments.length}/>
        <LatestComments>Latest comments</LatestComments>
        {firstTwoComents?.map((comment,index)=>{
          return <CommentReview key={index} comment={comment}/>
        })}
      </CardBody>
    </Card >
  );
}

export default ReviewCard;