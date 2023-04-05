import React, {useEffect, useState} from "react";
import CommentComponent from "./Comment Component";
import {useSelector} from "react-redux";
import lunaAPI from "../../../Axios/lunaApi";
import Review from "../Reviews/ReviewComponent";
import styled from 'styled-components';
import  { Container, Title, CommentsTitleDateDiv} from "./Styles";


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

        const response = await lunaAPI.get(`/comment/${userID}/`, config);
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
