import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
  login(formData) {
    return axios
      .post(API_URL + "login", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
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
}

export default new AuthService();
