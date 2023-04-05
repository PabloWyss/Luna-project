import { FaRegThumbsUp } from 'react-icons/fa';
import { Buttons, CommentButton, LikeButton } from './LikeCommentButtonsStyles';
import lunaAPI from "../../Axios/lunaApi";
import {useState} from "react";


const LikeCommentButtons = ({ likesCount, commentsCount, idReview }) => {

    const [likesSumRest, setLikesSumRest] = useState(1)

    const handleClickLike = (e) => {
        e.preventDefault()
        updateLike()

    }

     const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }

    const bodyParameters = {
        key: "value"
    };

    const updateLike = async () => {
    let response = await lunaAPI.post(`/reviews/like/${idReview}/`,bodyParameters, config)
    try {
        likesCount += likesSumRest
        setLikesSumRest(-likesSumRest)
    } catch (error) {
      console.log(error)
      alert('Please sign in in order to Like a review')
    }
  }



  return (
    <Buttons>
      <LikeButton onClick={handleClickLike}>
        <FaRegThumbsUp></FaRegThumbsUp>
        <p>Like</p>
        <p>{likesCount}</p>
      </LikeButton>
      <CommentButton>
        <p>Comment</p>
        <p>{commentsCount}</p>
      </CommentButton>
    </Buttons>
  );
}

export default LikeCommentButtons;