const version = '/api/v1';
const urls = {
  //Auth urls
  LOGIN_USER: `${version}/login`,
  REGISTER: `${version}/register`,
  GET_CSRF: `/sanctum/csrf-cookie`,
};
export default urls;
