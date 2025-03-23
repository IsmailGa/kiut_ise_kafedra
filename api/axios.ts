import axios from "axios";

const api = axios.create({
  baseURL: `https://ai.kiut.uz/api/v1`,
});

export default api;
