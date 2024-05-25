import config from "@/utils/config";
import axios from "axios";

const baseURL = config.api_base_url;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const onRequest = (request: any) => {
  // @ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));
  // @ts-ignore
  const id = JSON.parse(localStorage.getItem("id"));
  request.headers.Authorization = `Bearer ${(id ? id : user)?.token}` || "";

  return request;
};

const onRequestError = (error: any) => {
  return Promise.reject(error);
};

const onResponse = (response: any) => {
  return response;
};

const onResponseError = async (error: any) => {
  const statusCode = error.response?.status;
  if (statusCode === 401) {
    window.location.href = "/login";
  }
  return Promise.reject(error);
};

// https://axios-http.com/docs/interceptors
axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
