import * as API from "../url";
import { uploadInstance } from "../axiosInstance";

export const uploadFile = async (body: any) => {
  const response = await uploadInstance.post(API.UPLOAD, body);
  return response.data;
};
