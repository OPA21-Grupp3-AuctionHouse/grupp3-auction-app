import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_URL_TEST = "http://localhost:8080/api/user";

class UserService {
  updateInfo(id, user) {
    return axios.put(`${API_URL_TEST}/update/${id}`, user);
  }
  getUserById(id) {
    return axios.get(`${API_URL_TEST}/getById/${id}`, {
      headers: AuthHeader(),
    });
  }
}

export default new UserService();
