import axios from "axios";

const API_URL_TEST = "http://146.190.18.26:8000/api";

class ProductService {
  getProducts() {
    return axios.get(`${API_URL_TEST}/auctions`, { withCredentials: true });
  }

  createProduct(auction) {
    return axios.post(`${API_URL_TEST}/createauction`, auction, {
      withCredentials: true,
    });
  }

  updateProduct(product) {
    return axios.put(`${API_URL_TEST}/updateauction/`, product, {
      withCredentials: true,
    });
  }
}

export default new ProductService();
