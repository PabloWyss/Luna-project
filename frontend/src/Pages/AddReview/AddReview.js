import { useSelector } from 'react-redux'
import RatingStars from '../../Components/RatingStars/RatingStars'
import Button from '../../Components/Button'
import { BodyContainer, HeaderContainer, TitleContainer, Name, Category, RatingContainer, ButtonWraper, TextArea } from './AddReviewStyles'
import lunaAPI from '../../Axios/lunaApi'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const AddReview = () => {
    const [reviewText, setReviewText] = useState();
    const { restaurantID } = useParams();
    const restaurantData = useSelector(state => state.restaurant.restaurantData)

    const handleInputChange = (e) => {
        e.preventDefault();
        setReviewText(e.target.value)
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        postReview();
    }

    const postReview = async () => {
        if (!localStorage.getItem('token')) {
            return;
        }
        try {
            const data = {
                text_content: reviewText,
                rating: 3,
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            };
            const response = await lunaAPI.post(`reviews/new/${restaurantID}/`, data, config)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <HeaderContainer img={restaurantData?.image}>
                <TitleContainer>
                    <Name>{restaurantData?.name}</Name>
                    <Category>{restaurantData?.category}</Category>
                    <RatingContainer>
                        <RatingStars rating={restaurantData?.average_rating} isVoting={false} />
                        <p>{restaurantData?.reviews?.length} reviews</p>
                    </RatingContainer>
                </TitleContainer>
            </HeaderContainer>
            <BodyContainer>
                <RatingContainer>
                    <RatingStars isVoting={true} />
                    <p>Select your rating</p>
                </RatingContainer>
                <TextArea
                    type="text"
                    onChange={handleInputChange}
                    placeholder={`Your review helps others learn about great local businesses.

                    Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.`}
                    required
                />
                <ButtonWraper>
                    <Button textInput={'SUBMIT'} onClickAction={handleSubmitClick} />
                </ButtonWraper>
            </BodyContainer>
        </>
    )
}

export default AddReview