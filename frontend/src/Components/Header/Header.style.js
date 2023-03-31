import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #D8D8D8;
`

export const HeaderLeftDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  align-items: center;
  font-size: 16px;
  padding-left: 2%;
`

export const HeaderRightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  align-items: center;
  padding-right: 2%;
`

export const HeaderLinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  font-weight: 700;
  font-size: 20px;
`

export const HeaderButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  align-items: stretch;
  background: #E47D31;
  border-radius: 28px;
  height: 40px;
  width: 200px;
`

export const HeaderButtonLeft = styled.button`
  background: none;
  border: none;
  color: white;
  width: 50%;
  border-right: 1px solid white;
  font-weight: 400;
  font-size: 16px;
`

export const HeaderButtonRight = styled.button`
  background: none;
  border: none;
  color: white;
  width: 50%;
  font-weight: 400;
  font-size: 16px;  
`