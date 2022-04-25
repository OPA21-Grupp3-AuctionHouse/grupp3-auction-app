 import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api/user"

class UserService{

    updateInfo(id) {
        return axios.get(`${API_URL_TEST}/update/${id}`)
    } 
}

export default new UserService;