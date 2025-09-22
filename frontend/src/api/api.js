import axios from "axios";

const API_URL = "http://localhost:8000"; // Replace with your backend URL

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(`${API_URL}/upload/`, formData);
};

export const askQuestion = async (question) => {
  return axios.post(`${API_URL}/chat/`, { question });
};
