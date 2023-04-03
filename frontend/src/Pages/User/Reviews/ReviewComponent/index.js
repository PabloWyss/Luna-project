import {ReviewsDescriptionDiv, ReviewsDiv, ReviewsTitleDiv} from "../ReviewStyles";
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import React from "react";

const ReviewComponent = () => {

    return (
        <ReviewsDiv >
            <ReviewsTitleDiv>
                <p>
                    Läderach Chocolatier Suisse
                </p>
            </ReviewsTitleDiv>
            <div>
                <RatingStars />
            </div>
            <ReviewsDescriptionDiv>
                <p>
                    This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service.
                </p>
            </ReviewsDescriptionDiv>
        </ReviewsDiv >
    )
}

export default ReviewComponent