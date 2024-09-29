import axios from "axios";

const API_URL = "http://localhost:8000"; // Your FastAPI backend URL

// Fetch all properties
export const fetchProperties = async () => {
  const response = await axios.get(`${API_URL}/properties/`);
  return response.data;
};

// Fetch a single property by ID
export const fetchPropertyById = async (id) => {
  const response = await axios.get(`${API_URL}/properties/${id}`);
  return response.data;
};

// Create a new property
export const createProperty = async (property) => {
  const response = await axios.post(`${API_URL}/properties/`, property);
  return response.data;
};
