import styled from "styled-components";

const BannerTextWrapper = styled.div`
  position: absolute;
  height: 100px;
  width: 30%;
  left: 300px; 
  top: 5%;
  z-index: 5;
`;

const BannerText = ({ firstName, lastName, location }) => {
  const initial = lastName ? lastName.charAt(0) : '';
  const name = `${firstName} ${initial}`;

  return (
    <BannerTextWrapper>
      <div>{name}</div>
      <div>{location}</div>
      <div>{'3 reviews'}</div>
      <div>{'7 comments'}</div>
    </BannerTextWrapper>
  );
};

export default BannerText;
