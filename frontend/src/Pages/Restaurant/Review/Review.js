import styled from "styled-components";
import RatingStars from "../../../Components/RatingStars/RatingStars";
import ReviewUser from "../../../Components/UserCardHeader/UserCardHeader";

const ReviewContainer = styled.div`
  background-color: white;
  width: 650px;
`

const ReviewHeader = styled.div`
  border: 1px solid #EBEBEB;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

const ReviewBody = styled.div`

  p{
    padding: 9px;
  }
`

const Review = () => {
  return (
    <ReviewContainer>
      <ReviewHeader>
        <HeaderRight>
          <ReviewUser />
          <RatingStars />
        </HeaderRight>
        <div>
          <p>Date</p>
        </div>
      </ReviewHeader>
      <ReviewBody>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu fermentum lectus. Vestibulum vitae tempor metus. Fusce iaculis convallis sapien a elementum. Vestibulum fringilla luctus odio, id pharetra eros mollis.</p>
      </ReviewBody>
    </ReviewContainer>
  );
}

export default Review;