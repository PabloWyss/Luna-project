import React, { useState } from 'react';
import { Container, Background, Avatar, Summary, About } from './UserStyles';

const UserProfile = () => {
  const [avatarImage, setAvatarImage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

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

  return (
    <Container>
      <Background htmlFor="background-image" image={backgroundImage}>
        <input id="background-image" type="file" accept="image/*" onChange={handleBackgroundChange} />
      </Background>
      <Avatar htmlFor="avatar-image" image={avatarImage}>
        <input id="avatar-image" type="file" accept="image/*" onChange={handleAvatarChange} />
      </Avatar>
      <Summary />
      <About />
    </Container>
  );
};

export default UserProfile;
