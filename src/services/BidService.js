import axios from "axios";

const API_URL_TEST = "http://localhost:8080/api";

class BidService {
  getBids() {
    return axios.get(`${API_URL_TEST}/all`);
  }

  createBid(bid) {
	  return axios.post(`${API_URL_TEST}/create`, bid)
  }

  getHighestBid(id) {
    return axios.get(`${API_URL_TEST}/highestBid/${id}`)
  }

  getMyHighestBid(auctionId, userId) {
    return axios.get(`${API_URL_TEST}/myHighestBid/${auctionId}/${userId}`)
  }
}

export default new BidService();