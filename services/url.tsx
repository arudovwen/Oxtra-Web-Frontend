import config from "@/utils/config";

export const REGISTER_USER = config.api_base_url + "register";
export const LOGIN_USER = config.api_base_url + "login";
export const FORGOT_PASSWORD = config.api_base_url + "forgot-password";
export const RESET_PASSWORD = config.api_base_url + "reset-password";
export const GET_USER = "/user";
export const VEHICLE = config.api_base_url + "vehicles";
export const VEHICLE_DOC = "vehicle-documents";
export const BRAND = "get-car-brands";
export const MODELS = (id = "") => `get-car-models/${id}`;
export const UPLOAD = "upload";
export const RENT_CAR = "rents";
export const NON_USER_VEHICLES = "get-vehicles";
export const NON_USER_VEHICLE = "get-vehicle";
