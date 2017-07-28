/**
 * Created by lxl on 2017/7/25.
 */
import fetch from '@/utils/fetch'

export function getBanner () {
  return fetch({
    url: '/api.php/v1/News/indexTopList',
    method: 'GET'
  })
}

export function getWeather () {
  return fetch({
    url: '/api.php/v1/tools/weather',
    method: 'GET'
  })
}

export function getInfoStatus (token) {
  return fetch({
    url: '/v1/user/userMessageUnread',
    method: 'GET',
    params: {token: token, t: new Date().getTime()}
  })
}
