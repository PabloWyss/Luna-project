import styled from "styled-components";
import homepage from "../../Assets/homepage.jpeg"

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeBanner = styled.div`
  background-image: url(${homepage});
  width: 100%;
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div{
    background-color: white;
    width: 400px;
    padding: 20px;
  }
`

export const HomeBody = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;

  >p {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    margin: 29px 0 11px 0;
  }
`

export const Underline = styled.div`
  background-color: #E47D31;
  height: 3px;
  width: 265px;
  margin-bottom: 42px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`