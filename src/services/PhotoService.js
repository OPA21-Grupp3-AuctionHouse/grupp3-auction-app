import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api/";

class ProductService {
  getPhotoById(id) {
    return axios.get(`${API_URL_TEST}download/${id}`, {
      withCredentials: true,
    });
  }

  addPhoto(formData) {
    return axios.post(`${API_URL_TEST}upload`, formData, {
      withCredentials: true,
    });
  }
}

export default new ProductService();
