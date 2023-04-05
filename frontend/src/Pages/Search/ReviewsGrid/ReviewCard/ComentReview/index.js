import {Comment, TextOrangeSmall} from "../ReviewCardStyles";

const CommentReview = ({comment}) => {
    console.log(comment)
    return (
        <>
            <TextOrangeSmall>Name</TextOrangeSmall>
            <Comment>{comment.text_content}</Comment>
        </>
    )


}

export default CommentReview