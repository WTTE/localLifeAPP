// pages/message/message.js
Page({
  data: {
    messages: [],
  },
  onLoad: function (options) {
    const messages = this.data.messages;
    for (var i = 0; i < 18; i++) {
      messages.push({
        title: "免费送票！超有内涵的门票。",
        date: i + " September",
        image: "https://unsplash.it/400/300",
        summary: "最糟糕的，也许就是最幸运的。",
      });
    }
    this.setData({ messages });
  },
  onReady: function () {
    const query = wx.createSelectorQuery()
    //求出bottom的位置
    query.select("#bottom").boundingClientRect();
    query.exec(res=>{
      wx.pageScrollTo({
        scrollTop:res[0].top
      })
    })
  },
});
