import React, {useEffect, useState} from "react";
import CommentComponent from "./Comment Component";
import {useSelector} from "react-redux";
import lunaAPI from "../../../Axios/lunaApi";
import Review from "../Reviews/ReviewComponent";
import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  left: 362px;
  margin-top: 150px;
  margin-left: 300px;
  font-weight: 700;
  border: 1px solid #EBEBEB ;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: 700;
  background: white;
  color: #303030;
`;
 const CommentsTitleDateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 95%;
  padding-top: 20px;
`

const CommentsList = ({ userID }) => {
  const [commentsList, setReviewsList] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getCommentsFromUserByID = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await lunaAPI.get(`comments/user/${userID}/`, config);
        setReviewsList(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getCommentsFromUserByID();
  }, [userID]);
return (
    <div>
      {
        commentsList.map(comment => {
          return <Review key={comment.id} review={comment} />
        })
      }
    </div>
  );
}


const Comments = () => {
    const currentUser = useSelector(store => store.user.userData);

    return (
    <Container>
        <CommentsTitleDateDiv>
            <Title>Comments</Title>
        </CommentsTitleDateDiv>
        <CommentsList userID={currentUser.id} />
        <CommentComponent/>
        <CommentComponent/>
        <CommentComponent/>
    </Container>
  );
};

export default Comments;
