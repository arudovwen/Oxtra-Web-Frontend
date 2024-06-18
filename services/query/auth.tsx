import { useMutation, useQuery } from "react-query";
import {
  getUser,
  login,
  registerUser,
  forgotPassword,
  resetPassword,
} from "../api/auth";

export const useRegisterUser = (options = {}) => {
  const { mutate, isLoading } = useMutation(registerUser, {
    mutationKey: "REGISTER",
    ...options,
  });

  return { mutate, isLoading };
};

export const useLogin = (options = {}) => {
  const { mutate, isLoading } = useMutation(login, {
    mutationKey: "login",
    ...options,
  });

  return { mutate, isLoading };
};

export const useForgotPassword = (options = {}) => {
  const { mutate, isLoading } = useMutation(forgotPassword, {
    mutationKey: "forgotPassword",
    ...options,
  });

  return { mutate, isLoading };
};

export const useResetPassword = (options = {}) => {
  const { mutate, isLoading } = useMutation(resetPassword, {
    mutationKey: "resetPassword",
    ...options,
  });

  return { mutate, isLoading };
};

export const useGetUser = (id = "", options = {}) => {
  const { isLoading, data, refetch } = useQuery(["getUser", id], getUser, {
    ...options,
  });

  return { isLoading, data, refetch };
};
