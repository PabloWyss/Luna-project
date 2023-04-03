import styled from "styled-components";
import Review from '../ReviewsList/Review/Review'

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; 
`

const ReviewsList = ({ reviewsList }) => {
  console.log(reviewsList)
  return (
    <List>
      {reviewsList ?
        reviewsList.map(review => {
          return <Review key={review.id} review={review} />
        })
        :
        <p> No comments yet</p>
      }
    </List>
  );
}

export default ReviewsList;