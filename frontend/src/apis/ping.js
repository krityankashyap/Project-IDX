import axios from '../config/axiosConfig.js';

export const PingServer = async () => {
  try {
    const response= await axios.get('/apis/v1/ping');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}