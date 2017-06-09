import apiCaller from './index'

export default function updateQtyApi(_id, updateType) {
  return apiCaller('put', `api/services/v1/cart/${_id}`, { updateType })
}
