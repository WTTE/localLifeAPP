export function requestGet(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      //请求路径
      url: "https://locally.uieee.com"+url,
      //请求方式
      method: "get",
      //请求参数
      data: data,
      //请求头
      header: {},
      //请求返回结果的数据类型
      dataType: "json",
      //请求成功的回调
      success: function (res) {
        resolve(res)
      },
      //请求失败的回调
      fail: function (err) {
        console.log("请求失败了", err);
        reject(err)
      },
    });
  });
}
