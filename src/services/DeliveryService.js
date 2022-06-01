import axios from "axios";

const API_URL_TEST = "http://146.190.18.26:80/api";

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
    return axios.post(`${API_URL_TEST}/Finished/addAuction`, auction);
  }
  getAuctionById(auctionId) {
    return axios.get(
      `${API_URL_TEST}/Finished/getAuctionById?AuctionId=` + auctionId
    );
  }
}

export default new DeliveryService();
