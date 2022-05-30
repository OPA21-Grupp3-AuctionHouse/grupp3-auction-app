import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api";

class BidService {
  getBids() {
    return axios.get(`${API_URL_TEST}/allBids`, { withCredentials: true });
  }

  createBid(bid) {
    return axios.post(`${API_URL_TEST}/create`, bid, { withCredentials: true });
  }

  getHighestBid(id) {
    return axios.get(`${API_URL_TEST}/highestBid/${id}`, {
      withCredentials: true,
    });
  }

  getMyHighestBid(auctionId, userId) {
    return axios.get(`${API_URL_TEST}/myHighestBid/${auctionId}/${userId}`, {
      withCredentials: true,
    });
  }
}

export default new BidService();
