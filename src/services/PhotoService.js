import axios from "axios";

const API_URL_TEST = "http://146.190.18.26:8000/api";

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
