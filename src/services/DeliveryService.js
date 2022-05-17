import axios from "axios";

const API_URL_TEST = "https://localhost:7029/api/Delivery";

class DeliveryService {
  getAllDeliveries() {
    return axios.get(`${API_URL_TEST}`);
  }

  createDelivery() {
    return axios.post(`${API_URL_TEST}/create`);
  }

  getDelivery(id) {
    return axios.get(`${API_URL_TEST}/${id}`);
  }
}

export default new DeliveryService();
