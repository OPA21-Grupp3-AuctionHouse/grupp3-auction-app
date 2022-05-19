import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api/photos";

class ProductService {
  getPhotoById(id) {
    return axios.get(`${API_URL_TEST}/${id}`, { withCredentials: true });
  }

  addPhoto(formData) {
    return axios.post(`${API_URL_TEST}/add`, formData, {
      withCredentials: true,
      
    });
  }
}

export default new ProductService();
