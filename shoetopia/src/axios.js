import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://the-sndeaker-database.p.rapidapi.com/sneakers",
});

export default instance;