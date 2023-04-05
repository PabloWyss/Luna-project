import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Background,
  Avatar,
  ProfileNav,
  ProfileNavButtons,
  About,
  AboutTitle
} from './UserStyles';
import { ReactComponent as CommentIcon } from '../../Assets/comment.svg';
import { ReactComponent as RestaurantIcon } from '../../Assets/restaurant.svg';
import { ReactComponent as EditIcon } from '../../Assets/edit.svg';
import { ReactComponent as StarIcon } from '../../Assets/star.svg';
import BannerText from "./BannerText";
import Reviews from './Reviews/ReviewsList';
import Comments from './Comments/CommentsStyles';
import RestaurantStyles from "./Restaurants/RestaurantStyles";
import EditUserProfile from "./EditUserProfile/EditUserProfie";
import { updateUserProfile } from "../../Redux/Slices/user";


const UserProfile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(store => store.user.userData);
  const [avatarPicture, setAvatarPicture] = useState(currentUser?.avatar || '');
  const [backgroundImage, setBackgroundImage] = useState(currentUser?.background_image || '');
  const [firstName, setFirstName] = useState(currentUser?.first_name || '');
  const [lastName, setLastName] = useState(currentUser?.last_name || '');
  const [location, setLocation] = useState(currentUser?.location || '');
  const [thingsILove, setThingsILove] = useState(currentUser?.things_i_love || '');
  const [description, setDescription] = useState(currentUser?.description || '');
  const [showReviews, setShowReviews] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [bannerText, setBannerText] = useState('');
  const [activeView, setActiveView] = useState('reviews');
  const [backgroundEditable, setBackgroundEditable] = useState(true);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setAvatarPicture(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleBackgroundChange = (event) => {
    console.log(backgroundEditable)
    if (backgroundEditable) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result)
        setBackgroundImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
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
    if (showEditProfile) {
      setShowEditProfile(false);
    } else {
      setShowReviews(false);
      setShowComments(false);
      setShowRestaurants(false);
      setShowEditProfile(true);
      setBackgroundEditable(true);
    }

  };
  useEffect(() => {
    console.log("use effect")
    setFirstName(currentUser?.first_name || '');
    setLastName(currentUser?.last_name || '');
    setLocation(currentUser?.location || '');
    setThingsILove(currentUser?.things_i_love || '');
    setDescription(currentUser?.description || '');
  }, [currentUser]);

 return (
    <div>
      <Container>
            <Background image={backgroundImage}>
              {activeView === 'edit'? <input id="background-image" type="file" accept="image/*" onChange={handleBackgroundChange}/> : ""}
            </Background>
            <Avatar image={avatarPicture}>
              {activeView === 'edit'? <input id="avatar-image" type="file" accept="image/*" onChange={handleAvatarChange}/>: ""}
            </Avatar>
        <BannerText firstName={firstName} lastName={lastName} location={location}/>
        <ProfileNav>
          <p>{firstName}'s Profile</p>
          <ProfileNavButtons>
            <ProfileNavButtons>
              <button onClick={() => {setActiveView("reviews")}}><StarIcon/>Reviews</button>
              <button onClick={() => {setActiveView("comments")}}><CommentIcon/>Comments
              </button>
              <button onClick={() => {setActiveView("restaurants")}}><RestaurantIcon/>Restaurants
              </button>
              <button onClick={() => {setActiveView("edit")}}><EditIcon/>Edit Profile</button>
            </ProfileNavButtons>

          </ProfileNavButtons>
        </ProfileNav>
        {activeView === "reviews" ? <Reviews/> : ""}
        {activeView === "comments" ?<Comments/>: ""}
        {activeView === "restaurants" ?<RestaurantStyles/>: ""}
        {activeView === "edit" ?<EditUserProfile/>: ""}
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