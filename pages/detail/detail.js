import { requestGet } from "../../utils/zgrequst";
import regeneratorRuntime from "../../lib/runtime/runtime";

Page({
  data: {
    id: "",
    shop: {},
  },
  onLoad: function (options) {
    var id = parseInt(options.id);
    this.setData({
      id: id,
    });
    this.getDetailData();
  },
  async getDetailData() {
    let result = await requestGet(`/shops/${this.data.id}`);
    this.setData({
      shop: result.data,
    });
    wx.setNavigationBarTitle({
      title: result.data.name
    })
  },
  preview(e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: e.currentTarget.dataset.images,
    });
  },
});
