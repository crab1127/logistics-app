import Vue from 'vue'
import VueResource from 'vue-resource'

import router from '../router'

Vue.use(VueResource)
  // Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
  if (localStorage.token) {
    if (!request.params) {
      request.params = {}
    }
    request.params.access_token = localStorage.token // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  next(response => {
    if (response.status === 401) {
      // router.push({ name: 'Login' })
    }
  })
})

const request = (method = 'GET') => (...args) => {
  return new Promise((resolve, reject) => {
    let request
    switch (method) {
      case 'GET':
        request = Vue.http.get(...args)
        break
      case 'POST':
        request = Vue.http.post(...args)
        break
      case 'PUT':
        request = Vue.http.put(...args)
        break
      case 'DELETE':
        request = Vue.http.delete(...args)
        break
    }
    request
      .then(res => {
        if (res.body.status !== 'success') {
          throw new Error(res.body.message)
        }
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export default {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
}
