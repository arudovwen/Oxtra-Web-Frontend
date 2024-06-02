import { useMutation } from "react-query";
import { addVehicle, addVehicleDocs } from "../api/vehicles";

export const useAddVehicle = (options = {}) => {
  const { mutate, isLoading } = useMutation(addVehicle, {
    mutationKey: "addVehicle",
    ...options,
  });

  return { mutate, isLoading };
};

export const useAddVehicleDocs = (options = {}) => {
  const { mutate, isLoading } = useMutation(addVehicleDocs, {
    mutationKey: "addVehicleDocs",
    ...options,
  });

  return { mutate, isLoading };
};
