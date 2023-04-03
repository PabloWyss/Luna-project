import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  width: 50%;
  left: 362px;
  margin-top: 150px;
  margin-left: 300px;
  background-color: lightgreen;
`;

const Title = styled.h2`
  font-size: 24px;
  padding: 20px;
`;

const Comments = () => {
  return (
    <Container>
      <Title>Comments</Title>
    </Container>
  );
};

export default Comments;
