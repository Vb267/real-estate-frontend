import axios from "axios";

const API_URL = "http://localhost:8000"; // Your backend URL

export const fetchProperties = async () => {
  const response = await axios.get(`${API_URL}/properties/`);
  return response.data;
};
