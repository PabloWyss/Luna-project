import {ReviewsDateP, ReviewsDescriptionDiv, ReviewsDiv, ReviewsTitleDiv} from "../../Reviews/ReviewStyles";

const CommentComponent = () => {

    return (
        <ReviewsDiv>
            <ReviewsTitleDiv>
                <p>
                    Review 1
                </p>
                <ReviewsDateP>
                    01.01.2018 15:22
                </ReviewsDateP>
            </ReviewsTitleDiv>
            <ReviewsDescriptionDiv>
                <p>
                    This is horrible!
                </p>
            </ReviewsDescriptionDiv>
        </ReviewsDiv>
    )
}

export default CommentComponent