import config from "@/utils/config";

export const REGISTER_USER = config.api_base_url + "register";
export const LOGIN_USER = config.api_base_url + "login";
export const GET_USER = "/user";
export const VEHICLE = config.api_base_url + "vehicles";
export const VEHICLE_DOC = "vehicle-documents";
export const BRAND = "get-car-brands";
export const MODELS = (id = "") => `get-car-models/${id}`;
export const UPLOAD = "upload";
export const NON_USER_VEHICLES = "get-vehicles";
