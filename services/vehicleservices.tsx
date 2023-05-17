import { put, get, post } from '../helpers/api_helpers';
import urls from '@/helpers/url_helpers';

export async function getAllVehicles(config = {}) {
  return await get(urls.GET_ALL_VEHICLE_DOCUMENTS, config);
}

export async function addVehicle(data: {}, config = {}) {
  return await post(urls.ADD_VEHICLES, data, config);
}
