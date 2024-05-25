import axios from "axios";
import * as API from "../url";
import axiosInstance from "../axiosInstance";

export const addVehicle = async (body: any) => {
  const response = await axiosInstance.post(API.VEHICLE, body);
  return response.data;
};
