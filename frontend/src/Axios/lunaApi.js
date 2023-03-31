import axios from "axios";

const lunaAPI = axios.create({
  baseURL: 'https://luna-team4.propulsion-learn.ch/backend/api/'
})

export default lunaAPI;