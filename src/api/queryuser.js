import request from '../utils/request'
import axios from 'axios'

export default {
  // add one and find one
  findaddone (data) {
    // eslint-disable-next-line no-undef
    return request({ url: '/1', method: 'get', params: data, headers: {} })
  },
  findall (data) {
    return request({ url: '/2', method: 'post', params: data })
  }

}

// restFul 封装crud
const base = ''
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  })
}
export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: `${base}${url}`
  })
}
