import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api/user";

class UserService {
  updateInfo(id, user) {
    return axios.put(`${API_URL_TEST}/update/${id}`, user, { withCredentials: true });
  }
  getUserById(id) {
    return axios.get(`${API_URL_TEST}/getById/${id}`, { withCredentials: true });
  }

  getUser() {
    return axios.get(`${API_URL_TEST}/get`, { withCredentials: true });
  }

  loginUser(formData) {
    return axios.post(`http://localhost:8080/login`, formData, {
      withCredentials: true,
    });
  }
}

export default new UserService();