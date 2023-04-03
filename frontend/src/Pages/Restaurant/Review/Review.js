import styled from "styled-components";

const ReviewContainer = styled.div`
  background-color: lightblue;
`

const Review = () => {
  return (
    <ReviewContainer>
      <div>
        Header
      </div>
      <div>
        Body
      </div>
    </ReviewContainer>
  );
}

export default Review;