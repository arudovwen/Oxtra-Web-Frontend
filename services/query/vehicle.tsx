import { useMutation, useQuery } from "react-query";
import {
  addVehicle,
  addVehicleDocs,
  getBrands,
  getModels,
  getNonUserVehicles,
} from "../api/vehicles";

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

export const useGetModels = (options = {}) => {
  const { mutate, isLoading } = useMutation(getModels, {
    mutationKey: "getModels",
    ...options,
  });

  return { mutate, isLoading };
};

export const useGetBrands = (options = {}) => {
  const { isLoading, data, refetch } = useQuery("getBrands", getBrands, {
    ...options,
  });

  return { isLoading, data, refetch };
};

export const useGetNonUserVehicles = (options = {}) => {
  const { isLoading, data, refetch } = useQuery(
    "getNonUserVehicles",
    getNonUserVehicles,
    {
      ...options,
    }
  );

  return { isLoading, data, refetch };
};
