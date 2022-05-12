import axios from "axios";

const API_URL = "http://localhost:8080/";

const getPublicContent = () => {
  return axios.get(API_URL + "welcomepage");
};

const getUserContent = () => {
  return axios.get(API_URL + "startpage");
};

const UserService = {
  getPublicContent,
  getUserContent,
};

export default UserService;
