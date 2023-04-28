import { put } from '../helpers/api_helpers';
import urls from '@/helpers/url_helpers';

export async function updateUserProfile(
  user: { phoneNumber: string; address: string; id: string },
  config = {}
) {
  // return await put(urls.UPDATE_USER_PROFILE + user.id, user, config);

  return await put(`${urls.UPDATE_USER_PROFILE}/${user.id}`, user, config);
}
