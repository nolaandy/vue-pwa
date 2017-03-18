module.exports = {
  buildRequestURL: (url, params) => {
    Object.keys(params).forEach((key) => {
      var value = params[key]
      if (url.indexOf('?') > -1) {
        url += `&${key}=${value}`
      } else {
        url += `?${key}=${value}`
      }
    })
    return url
  }
}
