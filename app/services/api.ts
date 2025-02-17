import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://ai.kiut.uz";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});