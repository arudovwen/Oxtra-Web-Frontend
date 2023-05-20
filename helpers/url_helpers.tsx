const version = '/api/v1';

const urls = {
  //Auth urls
  LOGIN_USER: `${version}/login`,
  REGISTER: `${version}/register`,
  GET_CSRF: `/sanctum/csrf-cookie`,
  CHANGE_PASSWORD: `${version}/change-password`,
  RESET_PASSWORD: `${version}/reset-password`,
  FORGOT_PASSWORD: `${version}/forgot-password`,

  // User urls
  UPDATE_USER_PROFILE: `${version}/user`,

  // Vehicles urls
  GET_ALL_VEHICLE_DOCUMENTS: `${version}/vehicle-documents`,
  //  GET_VEHICLE_DOCUMENTS: `${version}/vehicle-documents/1`,
  ADD_VEHICLES: `${version}/vehicles`,
  ADD_VEHICLE_DOCUMENTS: `${version}/vehicle-documents`,
  RENT_VEHICLE: `${version}/rents`,
  GET_VEHICLES: `${version}/vehicles`,
};
export default urls;
