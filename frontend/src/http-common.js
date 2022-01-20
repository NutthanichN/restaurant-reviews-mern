import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://ap-southeast-1.aws.data.mongodb-api.com/app/restaurant-reviews-vrzbn/endpoint/api/v1/",
  headers: {
    "Content-type": "application/json"
  }
});

export default axiosClient;
