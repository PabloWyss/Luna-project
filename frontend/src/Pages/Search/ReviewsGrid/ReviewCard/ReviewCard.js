import avatar from "../../../../Assets/temp/JohnSmith.jpeg";
import { Card, CardHeader, Comment, LatestComments, CardBody, TextGreyBold, TextOrangeBig, TextOrangeSmall, UserAvatar, UserInfo } from "./ReviewCardStyles";
import LikeCommentButtons from "../../../../Components/LikeCommentButtons/LikeCommentButtons";
import lunaAPI from "../../../../Axios/lunaApi";
import {useEffect, useState} from "react";
import reviews from "../../../User/Reviews/Reviews";

const ReviewCard = (props) => {
    const [userReview,setUserReview] = useState({})


  const obtainSoecificUser = async () => {
    let response = await lunaAPI.get(`/users/users/${props.review.reviewed_by_user}/`,
        {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            }
        )
        try {
            setUserReview(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtainSoecificUser()
    },[])

  return (
    <Card>
      <CardHeader>
        <UserAvatar>
          <img src={userReview.profile_picture}></img>
        </UserAvatar>
        <UserInfo>
          <TextOrangeBig>{userReview.username}</TextOrangeBig>
          <TextGreyBold> 10 Reviews in total</TextGreyBold>
        </UserInfo>
      </CardHeader>
      <CardBody>
        <TextOrangeBig>Restaurant name</TextOrangeBig>
        <TextGreyBold>{props.review.text_content}</TextGreyBold>
        <TextOrangeSmall>read more</TextOrangeSmall>
        <LikeCommentButtons />
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