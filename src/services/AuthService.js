import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
  login(formData) {
    return axios.post(API_URL + "login", formData, {
      withCredentials: true,
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

  logout() {
    localStorage.removeItem("user");
  }

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
}

export default new AuthService();
