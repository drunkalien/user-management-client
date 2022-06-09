import axios, { AxiosError } from "axios";

export const requestInstance = axios.create({
  baseURL: "https://user-management-itransition.herokuapp.com/",
});

requestInstance.interceptors.request.use((config: any) => {
  const token = window.localStorage.getItem("token");

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});

requestInstance.interceptors.response.use(
  (config: any) => config,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.replace("/login");
    }
  }
);

export default requestInstance;
