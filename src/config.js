export const PIWIK_SITE_ID = 21

// export const ROOT = 'http://123.206.122.83:8080/lg_service'
// export const ROOT = 'http://rap.taobao.org/mockjsdata/29904'
export const ROOT = 'http://139.199.184.238:8080/lg_service'

export const API = {
  login: ROOT + '/login',
  userInfo: ROOT + '/userInfo',
  userLevel: ROOT + '/external/customer/grade/query',  // 客户登记
  signUp: ROOT + '/external/customer/user/manage',
  country: ROOT + '/common/areaCountry',
  changPass: ROOT + '/external/customer/user/pass',
  user: ROOT + 'external/customer/user/manage',
  addressFrom: ROOT + '/external/customer/addrFrom/manage', // 发件人
  addressReach: ROOT + '/external/customer/addrReach/manage', // 收件人
  order: ROOT + '/external/customer/order/manage',
  fund: ROOT + '/external/customer/fund/manage',
  myfund: ROOT + '/external/customer/fund/myfund',
  product: ROOT + '/external/recommend/product/query',
  cms: ROOT + '/external/customer/index/query',
  quoteChannel: ROOT + '/external/customer/quote/channel',
  mailProduct: ROOT + 'external/customer/product/manage'
}
