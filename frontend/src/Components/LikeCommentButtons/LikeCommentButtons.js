import { FaRegThumbsUp } from 'react-icons/fa';
import { Buttons, CommentButton, LikeButton } from './LikeCommentButtonsStyles';


const LikeCommentButtons = ({ likesCount, commentsCount, commentClick }) => {
  const handleCommentOnClick = () => {
    console.log('click')
    commentClick();
  }

  const handleLikeOnClick = () => {
    console.log('click')
  }

  return (
    <Buttons>
      <LikeButton onClick={handleLikeOnClick}>
        <FaRegThumbsUp></FaRegThumbsUp>
        <p>Like</p>
        <p>{likesCount}</p>
      </LikeButton>
      <CommentButton onClick={handleCommentOnClick}>
        <p>Comment</p>
        <p>24</p>
      </CommentButton>
    </Buttons>
  );
}

export default LikeCommentButtons;