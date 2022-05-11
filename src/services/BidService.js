import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api";

class BidService {
  getBids() {
    return axios.get(`${API_URL_TEST}/all`);
  }

  createBid(bid) {
    return axios.post(`${API_URL_TEST}/create`, bid);
  }
}

export default new BidService();
