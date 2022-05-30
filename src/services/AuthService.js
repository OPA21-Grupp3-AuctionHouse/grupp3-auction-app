import axios from "axios";

const API_URL = "http://146.190.18.26:8000/";

class AuthService {
  login(formData) {
    return axios
      .post(API_URL + "login", formData, {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.setItem("user", res.data.username);
        return res;
      });
  }

  /*
  login(username, password) {
    return axios
      .post(
        API_URL + "login",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response;
      });
  }
  */

  register(formData) {
    return axios.post(API_URL + "register", formData, {
      withCredentials: true,
    });
  }

  /*
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  */
  updatePassword(formData) {
    return axios.post(`${API_URL}updatePassword`, formData, {
      withCredentials: true,
    });
  }
}

export default new AuthService();
