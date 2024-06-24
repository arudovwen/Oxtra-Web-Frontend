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

export const getNonUserVehicles = async ({ queryKey }: any) => {
  const [, filters] = queryKey;
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.append(key, value as string);
    }
  });

  const queryString = params.toString();
  const url = `${API.NON_USER_VEHICLES}${queryString ? `?${queryString}` : ""}`;

  const res = await axiosInstance.get(url);
  return res.data;
};

export const getNonUserVehicle = async ({ queryKey }: any) => {
  const [, id] = queryKey;
  const res = await axiosInstance.get(`${API.NON_USER_VEHICLE}/${id}`);
  return res.data;
};

export const getUserVehicles = async ({ queryKey }: any) => {
  const [, filters] = queryKey;
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.append(key, value as string);
    }
  });

  const queryString = params.toString();
  const url = `${API.USER_VEHICLES}${queryString ? `?${queryString}` : ""}`;

  const res = await axiosInstance.get(url);
  return res.data;
};

export const getUserVehicle = async ({ queryKey }: any) => {
  const [, id] = queryKey;
  const res = await axiosInstance.get(`${API.USER_VEHICLES}/${id}`);
  return res.data;
};

export const getOwnerVehicles = async () => {
  const res = await axiosInstance.get(API.OWNER_VEHICLES);
  return res.data;
};

export const deleteOwnerVehicle = async (query: any) => {
  const res = await axiosInstance.delete(API.DEL_USER_VEHICLES(query));
  return res.data;
};
