import React, { useState } from 'react';
import axios from "axios";
import {
  Container,
  Form,
  Label,
  Input,
  TextArea,
  Button
} from './EditUserProfileStyles';
import {saveUserProfile} from "../../../Axios/lunaApi";


const EditUserProfile = ({ onSave }) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [thingsILove, setThingsILove] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({
      firstName: firstName,
      location: location,
      thingsILove: thingsILove,
      description: description
    });
  };


  return (
    <Container>
      <h2>Edit User Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Label htmlFor="first-name">First Name:</Label>
        <Input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Label htmlFor="last-name">Last Name:</Label>
        <Input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Label htmlFor="email">E-Mail:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label htmlFor="location">Location:</Label>
        <Input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <Label htmlFor="phone">Phone:</Label>
        <Input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Label htmlFor="things-i-love">Things I Love:</Label>
        <Input
          type="text"
          id="things-i-love"
          value ={thingsILove}
          onChange={(e) => setThingsILove(e.target.value)}
        />

        <Label htmlFor="description">Description:</Label>
        <TextArea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default EditUserProfile;

