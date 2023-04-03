import styled from 'styled-components';
import headerImg from '../../Assets/temp/restaurantpage.jpg';

export const HeaderContainer = styled.div`
  height: 500px;
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #FFFFFF;
  position: relative;
`

export const TitleContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 33px 0 58px 130px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
`

export const Category = styled.p`
  font-size: 24px;
  font-weight: 300;
`

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 31px;

  p{
    font-size: 20px;
    font-weight: 300;
  }
`

export const ContactContainer = styled.div`
  width: 360px;
  height: 335px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  right: 130px;
  top: 30px;
`

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 25px;
`

export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  img{
    width: 18px;
  }

  p{
    font-size: 20px;
    color: #4C4C4C;
  }
`
