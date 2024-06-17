import * as API from "../url";
import axiosInstance from "../axiosInstance";

export const rentCar = async (body: any) => {
  const response = await axiosInstance.post(API.RENT_CAR, body);
  return response.data;
};
