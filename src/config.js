export const PIWIK_SITE_ID = 21

// export const ROOT = 'http://123.206.122.83:8080/lg_service'
export const ROOT = 'http://rap.taobao.org/mockjsdata/29904'

export const API = {
  login: ROOT + '/login',
  signUp: ROOT + '/external/customer/user/manage',
  country: ROOT + '/common/areaCountry',
  changPass: ROOT + '/external/customer/user/pass',
  user: ROOT + 'external/customer/user/manage',
  addressFrom: ROOT + '/external/customer/addrFrom/manage', // 发件人
  addressReach: ROOT + '/external/customer/addrReach/manage', // 收件人
  order: ROOT + '/external/customer/order/manage',
  fund: ROOT + '/external/customer/fund/manage',
  myfund: ROOT + '/external/customer/fund/myfund'
}
