/* @ts-ignore */
import urls from "../helpers/url_helpers";
import { post, get } from "../helpers/api_helpers";
import { User } from "@/hooks/useAuth";

//Authentication
export async function handleCsrf() {
  return await get(urls.GET_CSRF);
}

export async function loginUser(
  user: { email: string; password: string },
  config = {},
) {
  return await post(urls.LOGIN_USER, user, config);
}
export async function logOut() {
  localStorage.clear();
  window.location.href = "/";
}
export async function registerUser(user: User, config = {}) {
  return await post(urls.REGISTER, user, config);
}

export async function changePassword(
  user: {
    oldPassword: string;
    newPassword: string;
    newPassword_confirmation: string;
  },
  config = {},
) {
  return await post(urls.CHANGE_PASSWORD, user, config);
}

export async function resetPassword(
  user: { password: string; password_confirmation: string },
  config = {},
) {
  return await post(urls.RESET_PASSWORD, user, config);
}

export async function forgotPassword(user: { email: string }, config = {}) {
  return await post(urls.FORGOT_PASSWORD, user, config);
}
