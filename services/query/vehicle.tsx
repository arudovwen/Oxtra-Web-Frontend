import { useMutation } from "react-query";
import { addVehicle } from "../api/vehicles";

export const useAddVehicle = (options = {}) => {
  const { mutate, isLoading } = useMutation(addVehicle, {
    mutationKey: "LOGIN",
    ...options,
  });

  return { mutate, isLoading };
};
