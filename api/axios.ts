import axios from "axios";

const api = axios.create({
  baseURL: `http://ai.kiut.uz/api/v1`,
});

export default api;
