import { api } from "./api";

export const teacherService = {
  async getTeacher(id: string) {
    const response = await api.get(`api/v1/teachers/${id}`);
    return response.data;
  },
  
  async getAllTeachers() {
    const response = await api.get("api/v1/teachers/");
    return response.data;
  },

  async getImage(path: string) {
    const response = api.get(`api/v1/get-image/?path=${encodeURIComponent(path)}`);
    return response
  }
};
