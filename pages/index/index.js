import { requestGet } from "../../utils/zgrequst";
import regeneratorRuntime from "../../lib/runtime/runtime";

Page({
  data: {
    slides: [],
    categories:[]
  },
  onLoad(options) {
    this.getSlides();
    this.getCategories();
  },
  async getSlides(){
    let result = await requestGet("/slides");
    this.setData({
      slides: result.data,
    });
  },
  async getCategories(){
    let result = await requestGet("/categories");
    this.setData({
      categories: result.data,
    });
    //https://locally.uieee.com/categories
  }
});
