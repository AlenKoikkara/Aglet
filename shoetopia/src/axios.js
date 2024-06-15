import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://shoeswebsite.onrender.com",
});

export default axiosInstance;