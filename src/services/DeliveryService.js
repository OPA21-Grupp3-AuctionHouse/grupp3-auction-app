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

  postDelivery(auction) {
    return axios.post(`${API_URL_TEST}/Finished/addAuction`, auction);
  }
}

export default new DeliveryService();
