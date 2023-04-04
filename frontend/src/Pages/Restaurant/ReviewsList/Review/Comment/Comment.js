import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #EBEBEB;
  padding: 10px;
  font-weight: 300;
`

const UserName = styled.p`
  font-weight: 700;
  color: #E47D31;
  margin-bottom: 4px;
`

const DateText = styled.p`
  font-size: 12px;
`

const Comment = () => {
  return (
    <Main>
      <div>
        <UserName>User name</UserName>
        <p>Comment</p>
      </div>
      <DateText>12.04.2023 13:32</DateText>
    </Main>
  );
}

export default Comment;