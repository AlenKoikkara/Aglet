
const utils = {
  isMobile: () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    }
    return false;
  },

  getQueryParams: (query = null) => {
    return (query || window.location.search.replace("?", ""))
      .split("&")
      .map((pair) => {
        let [key, val] = pair.split("=");

        return [key, decodeURIComponent(val || "")];
      })
      .reduce((result, [key, val]) => {
        result[key] = val;
        return result;
      }, {});
  },

  getUrlWithParams: (url, qParams) => {
    Object.entries(qParams).forEach(([k,v], i) => {
      url += k.concat("=", v) + ((i !== (Object.keys(qParams).length - 1)) ? "&" : "")
    })
    return url
  }
};

export default utils;
