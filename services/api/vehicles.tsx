import axios from "axios";
import * as API from "../url";
import axiosInstance from "../axiosInstance";

export const addVehicle = async (body: any) => {
  const response = await axiosInstance.post(API.VEHICLE, body);
  return response.data;
};

export const addVehicleDocs = async (body: any) => {
  const response = await axiosInstance.post(API.VEHICLE_DOC, body);
  return response.data;
};

export const getModels = async (query: any) => {
  const response = await axiosInstance.get(API.MODELS(query));
  return response.data;
};

export const getBrands = async () => {
  const response = await axiosInstance.get(API.BRAND);
  return response.data;
};

export const getNonUserVehicles = async () => {
  const response = await axiosInstance.get(API.NON_USER_VEHICLES);
  return response.data;
};
