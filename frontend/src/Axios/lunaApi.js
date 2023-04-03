import axios from "axios";

const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
const baseURL = isDev ? 'http://localhost:8001/backend/api' : 'https://luna-team4.propulsion-learn.ch/backend/api'


const lunaAPI = axios.create({
  baseURL: baseURL

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
