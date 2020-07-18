import axios from 'axios'
import { Message } from 'element-ui'
// import store from '../store/index'

// create axios instance
const instance = axios.create({
  baseURL: 'http://localhost:8102',
  timeout: 3000,
  headers: { 'Content-Type': 'nihaoa' }
})

// config axios instance interceptors
// the interceptored request will execute here before then() and catch()
// instance.interceptors.request.use(
//   response => {
//     // do somesthing
//     const code = response.data
//     if (code === 404 || code === 504) {
//       // dosomething
//     }
//     return response
//   },
//   error => {
//     // do something
//     return error
//   })

instance.interceptors.request.use(config => {
  return config
// eslint-disable-next-line handle-callback-err
}, err => {
  Message.error({ message: '请求超时!' })
})
instance.interceptors.response.use(data => {
  if (data.status && data.status === 200 && data.data.status === 500) {
    Message.error({ message: data.data.msg })
    return
  }
  if (data.data.msg) {
    Message.success({ message: data.data.msg })
  }
  return data.data
}, err => {
  if (err.response.status === 504 || err.response.status === 404) {
    Message.error({ message: '服务器被吃了⊙﹏⊙∥' })
  } else if (err.response.status === 403) {
    Message.error({ message: '权限不足,请联系管理员!' })
  } else if (err.response.status === 401) {
    Message.error({ message: err.response.data.msg })
  } else {
    if (err.response.data.msg) {
      Message.error({ message: err.response.data.msg })
    } else {
      Message.error({ message: '未知错误!' })
    }
  }
})

// export axios instance
export default instance
