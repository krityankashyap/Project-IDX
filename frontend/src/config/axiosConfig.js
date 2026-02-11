import axios from 'axios';

// Create an Axios instance with default configuration

const axiosInstance= axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default axiosInstance;