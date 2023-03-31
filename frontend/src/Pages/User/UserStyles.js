import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.label`
  background-color: coral;
  position: absolute;
  height: 200px;
  width: 200px;
  left: 100px;
  top: 5%;
  z-index: 5;
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  &:hover {
    opacity: 0.8;
  }
  &::before {
    content: "Upload Avatar";
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & input[type="file"] {
    display: none;
  }
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

export const Background = styled.label`
  background-color: blue;
  height: 15%;
  width: 100%;
  position: absolute;
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  &:hover {
    opacity: 0.8;
  }
  &::before {
    content: "Upload Background";
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & input[type="file"] {
    display: none;
  }
`;

export const About = styled.div`
  align-self: flex-end;
  background-color: lightseagreen;
  height: 900px;
  width: 25%;
  padding: 20px;
`;

