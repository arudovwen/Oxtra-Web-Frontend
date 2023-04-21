import urls from "../helpers/url_helpers";
import { post, get } from "../helpers/api_helpers";

//Authentication
export async function handleCsrf() {
    return await get(urls.GET_CSRF);
  }

export async function loginUser(user: any, config = {}) {
  return await post(urls.LOGIN_USER, user, config);
}
export async function logOut() {

  localStorage.removeItem("loggedUser");
  window.location.href = "/";
}
export async function registerUser(user: any, config = {}) {
  return await post(urls.REGISTER, user, config);
}
