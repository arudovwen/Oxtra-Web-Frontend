import { useMutation, useQuery } from "react-query";
import { getSingleRent, getUsersRent, rentCar } from "../api/rent";

export const useRentCar = (options = {}) => {
  const { mutate, isLoading, data } = useMutation(rentCar, {
    mutationKey: "rentCar",
    ...options,
  });

  return { mutate, isLoading, data };
};

export const useGetUsersRent = (filters = {}, options = {}) => {
  const { isLoading, data, refetch } = useQuery(
    ["getUsersRent", filters],
    getUsersRent,
    {
      ...options,
    }
  );

  return { isLoading, data, refetch };
};

export const useGetSingleRent = (id = "", options = {}) => {
  const { data, isLoading, refetch } = useQuery(
    ["getSingleRent", id],
    () => getSingleRent(id),
    {
      ...options,
    }
  );
  return { isLoading, data, refetch };
};
