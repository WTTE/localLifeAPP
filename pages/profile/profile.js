// pages/profile/profile.js
Page({
  data: {
    imgpath:"/assets/images/avatar.png",
    canIUse:wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function (options) {

  },
  loginHandle(e){
    this.setData({
      imgpath:e.detail.userInfo.avatarUrl
    })
  }
})