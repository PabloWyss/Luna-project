import {ReviewsDateP, ReviewsDescriptionDiv, ReviewsDiv, ReviewsTitleDiv} from "../ReviewStyles";
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import React from "react";


const ReviewComponent = ({ review }) => {

    return (
        <ReviewsDiv >
            <ReviewsTitleDiv>
                <p>
                    RestaurantsName
                </p>
                <ReviewsDateP>
                {review?.date_created}
                </ReviewsDateP>
            </ReviewsTitleDiv>
            <div>
                <RatingStars />
            </div>
            <ReviewsDescriptionDiv>
                <p>
                    {review?.text_content}
                </p>
            </ReviewsDescriptionDiv>
        </ReviewsDiv >
    )
}

export default ReviewComponent