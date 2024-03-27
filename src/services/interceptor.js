import axios from "axios";
import { BASE_URL } from "../api/urls";
// import { refreshToken } from '../api/refresh';
// import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    //   const refresh = sessionStorage.getItem('refresh_token');
    if (error.response.status === 401) {
      const accessToken = sessionStorage.getItem("token");
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      return api(originalRequest);
    } else {
      sessionStorage.clear();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default api;
