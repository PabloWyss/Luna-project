import React, { useState } from 'react';
import {
  Container,
  Background,
  Avatar,
  ProfileNav,
  ProfileNavButtons,
  About,
  svg, AboutTitle
} from './UserStyles';
import { ReactComponent as CommentIcon } from '../../Assets/comment.svg';
import { ReactComponent as RestaurantIcon } from '../../Assets/restaurant.svg';
import { ReactComponent as EditIcon } from '../../Assets/edit.svg';
import { ReactComponent as StarIcon } from '../../Assets/star.svg';
import BannerText from "./BannerText";
import Reviews from './Reviews/Reviews';
import Comments from './Comments/CommentsStyles';
import RestaurantStyles from "./Restaurants/RestaurantStyles";
import EditUserProfile from "./EditUserProfile/EditUserProfie";
import lunaAPI, {saveUserProfile} from "../../Axios/lunaApi";

const UserProfile = () => {
  const [avatarImage, setAvatarImage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [thingsILove, setThingsILove] = useState('');
  const [description, setDescription] = useState('');
  const [showReviews, setShowReviews] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [bannerText, setBannerText] = useState('');
  const [activeView, setActiveView] = useState('reviews');
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

  const handleRestaurantsClick = () => {
    setShowReviews(false);
    setShowComments(false);
    setShowRestaurants(true);
    setShowEditProfile(false);
  };

  const handleEditProfileClick = () => {
    setShowReviews(false);
    setShowComments(false);
    setShowRestaurants(false);
    setShowEditProfile(true);
  };

  const handleProfileUpdate = (newProfileData) => {
      setFirstName(newProfileData.firstName);
      setLastName(newProfileData.lastName);
      setLocation(newProfileData.location);
      setThingsILove(newProfileData.thingsILove);
      setDescription(newProfileData.description);


    saveUserProfile(newProfileData);
  };

  return (
  <div>
    <Container>
      <Background htmlFor="background-image" image={backgroundImage}>
        <input id="background-image" type="file" accept="image/*" onChange={handleBackgroundChange} />
      </Background>
      <Avatar htmlFor="avatar-image" image={avatarImage}>
        <input id="avatar-image" type="file" accept="image/*" onChange={handleAvatarChange} />
      </Avatar>
      <BannerText firstName={firstName} lastName={lastName} location={location} />
      <ProfileNav>
        <p>{firstName}'s Profile</p>
        <ProfileNavButtons>
        <ProfileNavButtons>
          <button onClick={handleReviewsClick} clicked={activeView === 'reviews'}> <StarIcon />Reviews</button>
          <button onClick={handleCommentsClick} clicked={activeView === 'comments'}> <CommentIcon />Comments</button>
          <button onClick={handleRestaurantsClick} clicked={activeView === 'restaurants'}>  <RestaurantIcon />Restaurants</button>
          <button onClick={handleEditProfileClick} clicked={activeView === 'edit'}>  <EditIcon />Edit Profile</button>
        </ProfileNavButtons>

        </ProfileNavButtons>
      </ProfileNav>
      {showReviews && <Reviews />}
      {showComments && <Comments />}
      {showRestaurants && <RestaurantStyles />}
      {showEditProfile && <EditUserProfile onSave={handleProfileUpdate} />} {/* Use onSave instead of onSubmit */}
      <About>
        <AboutTitle>About {firstName}</AboutTitle>
        <h3>Location</h3>
        <p>{location}</p>
        <h3>Luna Member Since</h3>
        <p> date! </p>
        <h3>Things I love</h3>
        <p>{thingsILove}</p>
        <h3>Description</h3>
        <p>{description}</p>
      </About>
    </Container>
  </div>
);
};


export default UserProfile;