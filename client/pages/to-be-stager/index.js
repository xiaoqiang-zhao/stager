// 成为过来人
const utils = require('../../utils/util.js');

Page({
  data: {
    userInfo: {},
    date: '',
    phone: '',
    content: '',
    count: 0
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '成为过来人'
    });
    this.setData({
      date: utils.formatTime(new Date)
    });
  },

  // 文本域输入事件
  phoneChange(event) {
    this.setData({
      phone: event.detail.value
    });
  },

  // 文本域输入事件
  contentChange(event) {
    this.setData({
      count: event.detail.cursor,
      content: event.detail.value
    });
  },

  // 提交
  submit() {
    wx.showToast({
      title: '提价成功',
      icon: 'success',
      duration: 2000
    });
    wx.navigateTo({
      url: '/pages/index/index'
    });
  }
});