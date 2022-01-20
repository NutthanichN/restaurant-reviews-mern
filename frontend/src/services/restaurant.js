import axiosClient from "../http-common";

class RestaurantDataService {
  getAll(page = 0) {
    return axiosClient.get(`restaurants?page=${page}`);
  }

  get(id) {
    return axiosClient.get(`restaurants/restaurant?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return axiosClient.get(`restaurants?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return axiosClient.post("restaurants/review", data);
  }

  updateReview(data) {
    return axiosClient.put("restaurants/review", data);
  }

  deleteReview(id, userId) {
    return axiosClient.delete(`restaurants/review?id=${id}`, {data: {user_id: userId}});
  }

  getCuisines(id) {
    return axiosClient.get(`restaurants/cuisines`);
  }
}

export default new RestaurantDataService();
