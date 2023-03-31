import avatar from "../../../Assets/temp/JohnSmith.jpeg"
import { FaRegThumbsUp } from 'react-icons/fa'
import { Buttons, Card, CardHeader, Comment, CommentButton, LatestComments, LikeButton, CardBody, TextGreyBold, TextOrangeBig, TextOrangeSmall, UserAvatar, UserInfo } from "./ReviewCardStyles";

const ReviewCard = () => {
  return (
    <Card>
      <CardHeader>
        <UserAvatar>
          <img src={avatar}></img>
        </UserAvatar>
        <UserInfo>
          <TextOrangeBig>User Name</TextOrangeBig>
          <TextGreyBold> 10 Reviews in total</TextGreyBold>
        </UserInfo>
      </CardHeader>
      <CardBody>
        <TextOrangeBig>Restaurant name</TextOrangeBig>
        <TextGreyBold>Went there for the first time, we have a very spicy chicken wings Alabama style, I have to say I was very impressed about the quality of the chicken, the place looks great but...s</TextGreyBold>
        <TextOrangeSmall>read more</TextOrangeSmall>
        <Buttons>
          <LikeButton>
            <FaRegThumbsUp></FaRegThumbsUp>
            <p>Like</p>
            <p>63</p>
          </LikeButton>
          <CommentButton>
            <p>Comment</p>
            <p>24</p>
          </CommentButton>
        </Buttons>
        <LatestComments>Latest comments</LatestComments>
        <TextOrangeSmall>Name</TextOrangeSmall>
        <Comment>Is good! but too expensive!</Comment>
        <TextOrangeSmall>Name</TextOrangeSmall>
        <Comment>I totally agree with you!</Comment>
      </CardBody>
    </Card >
  );
}

export default ReviewCard;