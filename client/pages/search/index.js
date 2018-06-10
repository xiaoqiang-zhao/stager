//index.js
const utils = require('../../utils/util.js');

Page({
  data: {
    dataList: [],
    searchResultList: [],
    date: '',
    isShowEmpty: false
  },
  onLoad() {
    this.setData({
      date: utils.formatTime(new Date)
    });
  },
  // 退出搜索状态
  cancelSearch() {
    wx.navigateBack();
  },
  // 搜索操作
  search(event) {
    this.setData({
      isShowEmpty: true
    });

    // api 埋点
    wx.reportAnalytics('search', {
      date: this.data.date,
      search_text: event.detail.value,
    });
  }
});
