const version = '/api/v1';

const urls = {
  //Auth urls
  LOGIN_USER: `${version}/login`,
  REGISTER: `${version}/register`,
  GET_CSRF: `/sanctum/csrf-cookie`,
  CHANGE_PASSWORD: `${version}/change-password`,
  RESET_PASSWORD: `${version}/reset-password`,
};
export default urls;
