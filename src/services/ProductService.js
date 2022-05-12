import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api";

class ProductService {
  getProducts() {
    return axios.get(`${API_URL_TEST}/auctions`);
  }

  createProduct(auction) {
	  return axios.post(`${API_URL_TEST}/createauction`, auction)
  }
}

export default new ProductService();
