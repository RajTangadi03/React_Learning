import axios from "axios";
import toast from "react-hot-toast";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/";
      toast.error("Session expired");
    }
    return Promise.reject(error);
  }
);

export default instance;
