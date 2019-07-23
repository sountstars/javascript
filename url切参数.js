  //切url？参数
  queryURLParameter(url) {
    let regParam = /([^?&=#]+)=?([^?&=#]+)?/ig,
        obj = {};
    url.replace(regParam, (...arg) => {
        obj[arg[1]] = arg[2];
    });
    return obj;
}