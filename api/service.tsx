// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.127.16.111:8507/",
  timeout: 1000000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
