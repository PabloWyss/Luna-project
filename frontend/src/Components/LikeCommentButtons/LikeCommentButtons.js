import { FaRegThumbsUp } from 'react-icons/fa';
import { Buttons, CommentButton, LikeButton } from './LikeCommentButtonsStyles';


const LikeCommentButtons = ({ likesCount, commentsCount }) => {
  return (
    <Buttons>
      <LikeButton>
        <FaRegThumbsUp></FaRegThumbsUp>
        <p>Like</p>
        <p>{likesCount}</p>
      </LikeButton>
      <CommentButton>
        <p>Comment</p>
        <p>24</p>
      </CommentButton>
    </Buttons>
  );
}

export default LikeCommentButtons;