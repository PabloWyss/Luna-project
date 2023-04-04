import styled from "styled-components"

export const ReviewContainer = styled.div`
  background-color: white;
  width: 650px;
`

export const ReviewHeader = styled.div`
  border: 1px solid #EBEBEB;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const DateContainer = styled.div`
  padding: 13px 9px;
`




export const AddCommentWraper = styled.div`
  display: flex;
  flex-direction: row;

  input{
    width: 400px;
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 400;
  }
`

export const ButtonWraperSmall = styled.div`
  width: 120px;
  flex-shrink: 0;
`