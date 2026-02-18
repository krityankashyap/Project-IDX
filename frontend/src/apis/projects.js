import axios from "../config/axiosConfig.js"

export const createProjectApi= async () =>{

  try {
    const response= await axios.post('/apis/v1/projects');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}