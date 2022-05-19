import axios from "axios";

const API_URL_TEST = "https://localhost:7029/api";

class DeliveryService {
  getAllDeliveries() {
    return axios.get(`${API_URL_TEST}/Delivery`);
  }

  createDelivery() {
    return axios.post(`${API_URL_TEST}/Delivery/create`);
  }

  getDelivery(id) {
    return axios.get(`${API_URL_TEST}/Delivery/${id}`);
  }

  /*
  getAuction(AuctionId) {
    return axios.get(`${API_URL_TEST}/Finished/getAuctionById`, AuctionId);
  }
  */

  getAllAuctions() {
    return axios.get(`${API_URL_TEST}/Finished/getAllAuctions`);
  }

  postAuction(auction) {
    console.log(auction);
    return axios.post(`${API_URL_TEST}/Finished/addAuction`, auction);
  }
  getAuctionById(auctionId) {
    return axios.get(
      `${API_URL_TEST}/Finished/getAuctionById?AuctionId=` + auctionId
    );
  }
}

export default new DeliveryService();
