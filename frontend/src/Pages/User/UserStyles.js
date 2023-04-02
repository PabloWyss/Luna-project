import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F8F8F8;
`;

export const Avatar = styled.label`
  background-color: papayawhip;
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
export const ProfileNav = styled.div`
  position: absolute;
  height: 500px;
  width: 200px;
  left: 100px;
  top: 26%;
  z-index: 5;
`;

export const Background = styled.label`
  background-color: rosybrown;
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
  justify-content: flex-end;
  background-color: #F8F8F8;
  height: 600px;
  width: 20%;
  padding: 20px;
  position: absolute;
  margin-top: 150px;
  
`;

export const ProfileNavButtons = styled.div`
display: flex;
flex-direction: column;
`;
