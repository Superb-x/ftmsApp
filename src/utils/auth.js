/**
 * Created by near on 2017/7/24.
 */
import Cookies from 'js-cookie'

const TOKENKEY = 'ftmsApp'

export function getToken () {
  return Cookies.get(TOKENKEY)
}

export function setToken (name, token) {
  return Cookies.set(name, token)
}

export function removeToken () {
  return Cookies.remove(TOKENKEY)
}
