import axios from "axios";
import * as API from "../url";
import axiosInstance from "../axiosInstance";

export const registerUser = async (body: any) => {
  const response = await axios.post(API.REGISTER_USER, body);
  return response.data;
};

export const login = async (body: any) => {
  const response = await axios.post(API.LOGIN_USER, body);
  return response.data;
};

export const getUser = async ({ queryKey }: any) => {
  const [, id] = queryKey;
  const apiUrl = `${API.GET_USER}/${id}`;

  const res = await axiosInstance.get(apiUrl);
  return res.data;
};
