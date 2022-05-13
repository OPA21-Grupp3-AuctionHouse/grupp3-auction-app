import axios from "axios";

const API_URL = "http://localhost:8080/";

const getPublicContent = () => {
  return axios.get(API_URL + "welcomepage");
};

const getStartPageContent = () => {
  return axios.get(API_URL + "startpage");
};

const getCardBazaarContent = () => {
  return axios.get(API_URL + "/api");
};

const UserService = {
  getPublicContent,
  getCardBazaarContent,
  getStartPageContent,
};

export default UserService;
