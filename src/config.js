import axios from "axios";

// Load the base URL from the environment variables
const baseURL = import.meta.env.BASE_URL;

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
