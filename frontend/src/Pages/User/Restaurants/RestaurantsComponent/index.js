import {ReviewsDateP, ReviewsDescriptionDiv, ReviewsDiv, ReviewsTitleDiv} from "../../Reviews/ReviewStyles";
import RatingStars from "../../../../Components/RatingStars/RatingStars";
import React from "react";

const RestaurantsComponent = () => {

    return (
        <ReviewsDiv >
            <ReviewsTitleDiv>
                <p>
                    Laurentio Gelato Store
                </p>
                <ReviewsDateP>
                01.01.2018 15:22
                </ReviewsDateP>
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

export default RestaurantsComponent