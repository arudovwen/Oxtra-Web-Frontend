import { put } from "../helpers/api_helpers";
/* @ts-ignore */
import urls from "@/helpers/url_helpers";

export async function updateUserProfile(
  user: { phoneNumber: string; id: string },
  config = {},
) {
  return await put(`${urls.UPDATE_USER_PROFILE}/${user.id}`, user, config);
}
