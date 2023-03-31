import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 380px;
  width: 50%;
  left: 362px;
  margin-top: 150px;
  margin-left: 300px;
  background-color: Brown;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  padding: 20px;
`;

const EditUser = () => {
  return (
    <Container>
      <Title>Edit User Profile</Title>
    </Container>
  );
};

export default EditUser
