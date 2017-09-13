import { PIWIK_SITE_ID } from '../config'
/**
 * piwik 埋点
 */
export const sendPiwik = (params = { title: '' }) => {
  setTimeout(() => {
    const url = encodeURIComponent(location.href)
    const title = document.title
    const path = 'http://ta.harsonserver.com/piwik.php' +
      '?idsite=' + PIWIK_SITE_ID +
      '&t=' + (new Date()).getTime() +
      '&rec=1' +
      '&url=' + url +
      '&title=' + title +
      '&res=' + window.screen.availWidth + 'x' + window.screen.availHeight
    let img = new Image()
    img.src = path
  }, 0)
}
