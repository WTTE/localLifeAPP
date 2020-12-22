import { requestGet } from "../../utils/zgrequst";
import regeneratorRuntime from "../../lib/runtime/runtime";

Page({
  data: {
    id: "",
    value: "",
    list: [],
    pageIndex: 1,
    pageSize: 10,
    starValue: 3,
    hasMore: true, //控制是否有更多数据
    totalCount: 0, //总数据条数
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name
    })
    this.setData({
      id: options.category,
    });
    this.getListData();
  },
  async getListData() {
    let result = await requestGet(`/categories/${this.data.id}/shops`, {
      _page: this.data.pageIndex,
      _limit: this.data.pageSize,
    });
    this.setData({
      list: [...this.data.list, ...result.data],
      totalCount: parseInt(result.header["x-total-count"]),
    });
  },
  onSearch() {
    console.log("onSearch", this.data.value);
  },
  onCancel() {
    this.setData({
      value: "",
    });
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onStarChange(event) {
    this.setData({
      starValue: event.detail,
    });
  },
  onReachBottom: function () {
    let totalPage = Math.ceil(this.data.totalCount / this.data.pageSize);
    this.data.pageIndex++;
    this.setData({
      pageIndex: this.data.pageIndex,
    });
    if (this.data.pageIndex < totalPage) {
      this.getListData();
    } else {
      this.setData({
        hasMore: false,
      });
    }
  },
  //下拉刷新
  onPullDownRefresh:async function(){
    //重置数据源
    this.setData({
      pageIndex: 1,
      list: [],
      hasMore: true,
    })
    //加载第一页数据
    await this.getListData();
    //关闭下拉刷新
    wx.stopPullDownRefresh()
  }
});
