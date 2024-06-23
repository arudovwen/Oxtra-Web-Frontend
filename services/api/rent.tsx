import * as API from "../url";
import axiosInstance from "../axiosInstance";

export const rentCar = async (body: any) => {
  const response = await axiosInstance.post(API.RENT_CAR, body);
  return response.data;
};

export const getSingleRent = async (id: any) => {
  const response = await axiosInstance.get(API.RENT_CAR + `/${id}`);
  return response.data;
};

export const getUsersRent = async ({ queryKey }: any) => {
  const [, filters] = queryKey;
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.append(key, value as string);
    }
  });

  const queryString = params.toString();
  const url = `${API.RENT_CAR}${queryString ? `?${queryString}` : ""}`;

  const res = await axiosInstance.get(url);
  return res.data;
};
