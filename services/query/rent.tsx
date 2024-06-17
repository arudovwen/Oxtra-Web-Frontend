import { useMutation } from "react-query";
import { rentCar } from "../api/rent";

export const useRentCar = (options = {}) => {
  const { mutate, isLoading, data } = useMutation(rentCar, {
    mutationKey: "rentCar",
    ...options,
  });

  return { mutate, isLoading, data };
};
