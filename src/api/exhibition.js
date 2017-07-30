/**
 * Created by lxl on 2017/7/25.
 */
import fetch from 'utils/fetch'

export function getBrand () {
  return fetch({
    url: '/api.php/v1/vehicles/getBrand',
    method: 'GET'
  })
}
