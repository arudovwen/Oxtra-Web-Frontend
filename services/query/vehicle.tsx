import { useMutation, useQuery } from "react-query";
import {
  addVehicle,
  addVehicleDocs,
  getBrands,
  getModels,
  getNonUserVehicles,
  getNonUserVehicle,
  getUserVehicles,
  getUserVehicle,
  getOwnerVehicles,
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
  const { mutate, isLoading, data } = useMutation(getModels, {
    mutationKey: "getModels",
    ...options,
  });

  return { mutate, isLoading, data };
};

export const useGetBrands = (options = {}) => {
  const { isLoading, data, refetch } = useQuery("getBrands", getBrands, {
    ...options,
  });

  return { isLoading, data, refetch };
};

export const useGetOwnerVehicles = (options = {}) => {
  const { isLoading, data, refetch } = useQuery(
    "getOwnerVehicles",
    getOwnerVehicles,
    {
      ...options,
    }
  );

  return { isLoading, data, refetch };
};

export const useGetNonUserVehicles = (filters = {}, options = {}) => {
  const { isLoading, data, refetch } = useQuery(
    ["getNonUserVehicles", filters],
    getNonUserVehicles,
    {
      ...options,
    }
  );

  return { isLoading, data, refetch };
};

export const useGetNonUserVehicle = (id = "", options = {}) => {
  const { isLoading, data, refetch } = useQuery(
    ["getNonUserVehicle", id],
    getNonUserVehicle,
    {
      ...options,
    }
  );

  return { isLoading, data, refetch };
};

export const useGetUserVehicles = (filters = {}, options = {}) => {
  const { isLoading, data, refetch } = useQuery(
    ["getUserVehicles", filters],
    getUserVehicles,
    {
      ...options,
    }
  );

  return { isLoading, data, refetch };
};

export const useGetUserVehicle = (id = "", options = {}) => {
  const { isLoading, data, refetch } = useQuery(
    ["getUserVehicle", id],
    getUserVehicle,
    {
      ...options,
    }
  );

  return { isLoading, data, refetch };
};
