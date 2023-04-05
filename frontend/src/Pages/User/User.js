import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Background,
  ProfilePicture,
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
import Reviews from './Reviews/Review';
import Comments from './Comments/Comments';
import Restaurant from "./Restaurants/Restaurant";
import EditUserProfile from "./EditUserProfile/EditUserProfie";
import {updateUserData, updateUserProfile} from "../../Redux/Slices/user";
import lunaApi from "../../Axios/lunaApi";



const UserProfile = () => {
  const dispatch = useDispatch();


  const currentUser = useSelector(store => store.user.userData);
  const [user, setUser] = useState(currentUser || []);

  console.log(user)
  const [profilePicture, setProfilePicture] = useState(currentUser?.profile_picture || '');
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

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async (e) => {
      setProfilePicture(e.target.result);

      //
      // upload avatar
      //
      console.log(e)
      const newProfileData = {
        profile_picture: e.target.result
      }

      const response2 = await lunaApi.patch("/users/me/", newProfileData,
      {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
'             Content-Type': 'application/json'
          }
      })
      try {
        dispatch(updateUserData(response2.data))
        // setUser(user);
      } catch (error) {
          throw error.response.data;
          // console.log(error)
      }
      //
      // upload avatar
      //
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
        // upload bg image
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


    /* setFirstName(currentUser?.first_name || '');
    setLastName(currentUser?.last_name || '');
    setLocation(currentUser?.location || '');
    setThingsILove(currentUser?.things_i_love || '');
    setDescription(currentUser?.description || '');
    */
    setUser(currentUser)
    const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
    let baseUrl = isDev ? 'http://localhost:8001' : 'https://luna-team4.propulsion-learn.ch'

    setProfilePicture(baseUrl + currentUser.profile_picture)
    setBackgroundImage(currentUser.background_image ? baseUrl + currentUser.background_image : 'http://localhost:3000/static/media/homepage.51b269f18a4e07566511.jpeg')
  }, [currentUser]);

  return (
    <div>
      <Container>
            <Background image={backgroundImage}>
              {activeView === 'edit'? <input id="background-image" type="file" accept="image/*" onChange={handleBackgroundChange}/> : ""}
            </Background>
            <ProfilePicture image={profilePicture}>
              {activeView === 'edit'? <input id="profile-image" type="file" accept="image/*" onChange={handleProfilePictureChange}/>: ""}
            </ProfilePicture>
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
        {activeView === "restaurants" ?<Restaurant/>: ""}
        {activeView === "edit" ?<EditUserProfile/>: ""}
        <About>
          <AboutTitle>About {firstName}</AboutTitle>
          <h3>Location</h3>
          <p>{location}</p>
          <h3>Luna Member Since</h3>
          <p> {new Date(user.join_date).toLocaleDateString('en-GB')}</p>
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