import {Comment, TextOrangeSmall} from "../ReviewCardStyles";

const CommentReview = ({comment}) => {

    return (
        <>
            <TextOrangeSmall>{comment.comment_by_user}</TextOrangeSmall>
            <Comment>{comment.text_content}</Comment>
        </>
    )


}

export default CommentReview