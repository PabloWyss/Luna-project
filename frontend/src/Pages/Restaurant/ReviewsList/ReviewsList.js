import styled from "styled-components";
import Review from '../ReviewsList/Review/Review'

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; 
`

const ReviewsList = ({ reviews }) => {
  console.log(reviews)
  return (
    <List>
      {
        reviews?.map(review => {
          return <Review key={review.id} review={review} />
        })
      }
    </List>
  );
}

export default ReviewsList;