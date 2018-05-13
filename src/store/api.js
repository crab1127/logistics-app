import request from '@/util/request'
import { API } from '../config'

export const login = body => request.post(API.login, body)
export const signUp = body => request.post(API.signUp, body)
export const userInfo = body => request.get(API.userInfo)
export const userLevel = body => request.get(API.userLevel)

// 国家
export const countryList = () => request.get(API.country)
export const countryDetail = id => request.get(`${API.country}/${id}`)

// 用户
export const changeUserInfo = (id, body) => request.put(`${API.user}/${id}`, body)
export const changeUserPassword = body => request.put(API.changPass, body)

// 发件人
export const addressFromList = params => request.get(API.addressFrom, { params })
export const addressFromDetail = id => request.get(`${API.addressFrom}/${id}`)
export const addressFromCreate = body => request.post(API.addressFrom, body)
export const addressFromUpdate = (id, body) => request.put(`${API.addressFrom}/${id}`, body)
export const addressFromDelete = id => request.del(`${API.addressFrom}/${id}`)

// 收件人
export const addressReachList = params => request.get(API.addressReach, { params })
export const addressReachDetail = id => request.get(`${API.addressReach}/${id}`)
export const addressReachCreate = body => request.post(API.addressReach, body)
export const addressReachUpdate = (id, body) => request(`${API.addressReach}/${id}`, body)
export const addressReachDelete = id => request.del(`${API.addressReach}/${id}`)

// 余额
export const myfund = _ => request.get(API.myfund)
export const fundList = params => request.get(API.fund, { params })
export const fundCreate = body => request.post(API.fund, body)
export const fundUpdate = body => request.put(API.fund, body)

// 订单
export const orderList = params => request.get(API.order, { params })
export const orderDetail = id => request.get(`${API.order}/${id}`)
export const orderCreate = body => request.post(API.order, body)
export const orderUpdate = (id, body) => request(`${API.order}/${id}`, body)
export const orderDelete = id => request.del(`${API.order}/${id}`)

// 产品
export const productList = params => request.get(`${API.product}`, { params })
export const productDetail = id => request.get(`${API.product}/${id}`)

// 咨询
export const cmsList = params => request.get(`${API.cms}`, { params })
export const cmsDetail = id => request.get(`${API.cms}/${id}`)

// 下单过程
export const quoteChannel = params => request.get(`${API.quoteChannel}`, { params })
export const quoteService = id => request.get(`${API.quoteService}/${id}`)
export const quoteServiceInfo = (id, params) => request.get(`${API.quoteServiceInfo}/${id}`, { params })
export const quoteProduct = params => request.get(`${API.quoteProduct}`, { params })
