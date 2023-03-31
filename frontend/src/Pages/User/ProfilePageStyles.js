import styled from 'styled-components';

export const Container = styled.div`
display: flex;
    flex-direction: column;
`;


export const Avatar = styled.div`
  background-color: coral;
  position: absolute;
  height: 200px;
  width: 200px;
  left: 100px;
  top: 5%;
  z-index: 5;
`;

export const Summary = styled.div`
  background-color: red;
  position: absolute;
  height: 100px;
  width: 30%;
  left: 300px; /* the width of the coral box */
  top: 5%;
  z-index: 5;
`;


export const Background = styled.div`
  background-color: blue;
  height: 15%;
  width: 100%;
  position: absolute;
`;

export const About = styled.div`
  align-self: flex-end;
  background-color: lightseagreen;
  height: 900px;
  width: 25%;
  padding: 20px;
`;