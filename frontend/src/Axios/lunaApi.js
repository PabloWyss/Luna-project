import axios from "axios";

const lunaAPI = axios.create({
  baseURL: 'https://luna-team4.propulsion-learn.ch/backend/api/'
})

export const saveUserProfile = (newProfileData) => {
  return axios.post('/user', newProfileData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export default lunaAPI;
