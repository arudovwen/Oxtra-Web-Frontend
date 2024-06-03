import { useMutation } from "react-query";
import { addVehicle } from "../api/vehicles";
import { uploadFile } from "../api/file";

export const useUploadFile = (options = {}) => {
  const { mutate, isLoading, data } = useMutation(uploadFile, {
    mutationKey: "uploadFile",
    ...options,
  });

  return { mutate, isLoading, data };
};
