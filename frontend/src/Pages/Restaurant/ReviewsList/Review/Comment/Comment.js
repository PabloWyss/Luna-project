import { DateText, Main, UserName } from "./CommentStyles";

const Comment = ({ comment }) => {

  return (
    <Main>
      <div>
        <UserName>{comment?.comment_by_user.username}</UserName>
        <p>{comment?.text_content}</p>
      </div>
      <DateText>{comment?.comment_by_user.created_date}</DateText>
    </Main>
  );
}

export default Comment;