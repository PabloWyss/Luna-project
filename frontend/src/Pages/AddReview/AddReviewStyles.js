import styled from 'styled-components';

export const ParentContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

export const HeaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0;
background: black;
height: 204px;
`

export const BackgroundImage = styled.img`
min-width: 100%;
object-fit: cover;
height: 40vh;
`

// the form coniainer should be in the middle having a width: 832px; height: 431px;v left: 304px; top: 301px;

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 832px;
height: 431px;
background: blue;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 3px;
`

