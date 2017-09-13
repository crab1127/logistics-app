const Cache = require('./store').default('sessionStorage')

export const isDataType = (data, type = 'Object') => {
  return Object.prototype.toString.call(data) === `[object ${type}]`
}

export const getCatch = (key, params = {}) => {
  if (!isDataType(key, 'String') || !isDataType(params, 'Object')) {
    return {
      cacheKey: null,
      cacheData: null
    }
  }
  const data = Object.assign({}, params)

  // 过滤掉判断和分页的字段
  delete data.isRefresh
  delete data.page
  delete data.pageSize
  delete data.loadmore

  let cacheKey = 'CACHE:' + key
  const keys = Object.keys(data)
  if (keys.length === 1) {
    cacheKey = cacheKey + '_' + data[keys[0]]
  } else if (keys.length > 1) {
    keys.sort().forEach(key => { cacheKey = `${cacheKey}_${data[key]}` })
  }

  const cacheData = Cache.get(cacheKey)

  return {
    cacheKey,
    cacheData
  }
}

export const isEmpty = (str) => {
  return !!str && str !== 'undefined' && str !== 'null'
}

export const getQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  try {
    var r = window.location.href.split('?')[1].match(reg)
    if (r != null) {
      var str = r[2]
      return decodeURIComponent(str)
    }
    return null
  } catch (e) {
    return null
  }
}

/**
 * 时间格式化
 * @param  {[Number]} date 时间戳
 * @param  {[DateString]} fmt  时间格式
 * dateFormat('yyyy-MM-dd hh:mm:ss.S') => 2016-03-12 20:13:32.232
 * @return {[date]} 时间
 */
export const dateFormat = (date, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  if (!date) return ''

  const date1 = new Date(date)
  const o = {
    'M+': date1.getMonth() + 1, // 月
    'd+': date1.getDate(), // 日
    'h+': date1.getHours(), // 小时
    'm+': date1.getMinutes(), // 分
    's+': date1.getSeconds(), // 秒
    'q+': Math.floor((date1.getMonth() + 3) / 3), // 季度S
    'S': date1.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date1.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
 * 合并数据，并过滤重复数据, 向上刷新更多
 * @param {Array} newdata 新数据
 * @param {array} oldData  旧数据
 * @param {String} id 判断是否相同的id
 */
export const topMerge = (newdata, oldData, id) => {
  for (let i = newdata.length - 1; i >= 0; i--) {
    if (!oldData.filter(item => item[id] === newdata[i][id]).length) {
      oldData.unshift(newdata[i])
    }
  }
  return [...oldData]
}

/**
 *  合并数据，并过滤重复数据,向下加载更多，
 * @param {Array} newdata 新数据
 * @param {array} oldData  旧数据
 * @param {String} id 判断是否相同的id
 */
export const downMerge = (newdata, oldData, id) => {
  for (let i = 0; i < newdata.length; i++) {
    if (!oldData.filter(item => item[id] === newdata[i][id]).length) {
      oldData.push(newdata[i])
    }
  }
  return [...oldData]
}
