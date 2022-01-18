import axiosClient from "../http-common";

class RestaurantDataService {
  getAll(page = 0) {
    return axiosClient.get(`?page=${page}`);
  }

  get(id) {
    return axiosClient.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return axiosClient.get(`?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return axiosClient.post("/review", data);
  }

  updateReview(data) {
    return axiosClient.put("/review", data);
  }

  deleteReview(id) {
    return axiosClient.delete(`/review?id=${id}`);
  }

  getCuisines(id) {
    return axiosClient.get(`/cuisines`);
  }
}

export default new RestaurantDataService();
