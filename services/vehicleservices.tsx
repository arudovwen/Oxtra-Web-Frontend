import { put, get, post } from '../helpers/api_helpers';
 /* @ts-ignore */
import urls from '@/helpers/url_helpers';

export async function getAllVehiclesDocuments(config = {}) {
  return await get(urls.GET_ALL_VEHICLE_DOCUMENTS, config);
}

export async function addVehicle(data: {}, config = {}) {
  return await post(urls.ADD_VEHICLES, data, config);
}

export async function addVehicleDocuments(data: {}, config = {}) {
  return await post(urls.ADD_VEHICLE_DOCUMENTS, data, config);
}

export async function rentVehicle(data: {}, config = {}) {
  return await post(urls.RENT_VEHICLE, data, config);
}

export async function getVehicles(config = {}) {
  return await get(urls.GET_VEHICLES, config);
}

// export async function getVehicleDocuments(config = {}) {
//   return await get(urls.GET_VEHICLE_DOCUMENTS, config);
// }
