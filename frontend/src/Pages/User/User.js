import React, { useState } from 'react';
import {
  Container,
  Background,
  Avatar,
  Summary,
  ProfileNav,
  ProfileNavButtons,
  About
} from './UserStyles';
import Reviews from './Reviews/Reviews';
import Comments from './Comments/CommentsStyles';
import RestaurantStyles from "./Restaurants/RestaurantStyles";
import EditProfile from "./EditUserProfile/EditUserProfileStyles";

const UserProfile = () => {
  const [avatarImage, setAvatarImage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [showReviews, setShowReviews] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setAvatarImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleBackgroundChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setBackgroundImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleReviewsClick = () => {
    setShowReviews(true);
    setShowComments(false);
    setShowRestaurants(false);
    setShowEditProfile(false);
  };

  const handleCommentsClick = () => {
    setShowReviews(false);
    setShowComments(true);
    setShowRestaurants(false);
    setShowEditProfile(false);
  };

  const handleRestaurantsClick= () => {
    setShowReviews(false);
    setShowComments(false);
    setShowRestaurants(true);
    setShowEditProfile(false);
  };

  const handleEditProfileClick= () => {
    setShowReviews(false);
    setShowComments(false);
    setShowRestaurants(false);
    setShowEditProfile(true);
  };

  return (
    <Container>
      <Background htmlFor="background-image" image={backgroundImage}>
        <input id="background-image" type="file" accept="image/*" onChange={handleBackgroundChange} />
      </Background>
      <Avatar htmlFor="avatar-image" image={avatarImage}>
        <input id="avatar-image" type="file" accept="image/*" onChange={handleAvatarChange} />
      </Avatar>
      <Summary />
      <ProfileNav>
        <p>Laurent's Profile</p>
        <ProfileNavButtons>
          <button onClick={handleReviewsClick}>Reviews</button>
          <button onClick={handleCommentsClick}>Comments</button>
          <button onClick={handleRestaurantsClick}>Restaurants</button>
          <button onClick={handleEditProfileClick}>Edit Profile</button>
        </ProfileNavButtons>
      </ProfileNav>
      {showReviews && <Reviews />}
      {showComments && <Comments />}
      {showRestaurants && <RestaurantStyles />}
      {showEditProfile && <EditProfile />}
      <About>
        <h1>About Laurent</h1>
        <h2>He's a cool guy</h2>
      </About>
    </Container>
  );
};

export default UserProfile;
