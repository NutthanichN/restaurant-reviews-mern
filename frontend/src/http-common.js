import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api/v1/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});

export default axiosClient;
