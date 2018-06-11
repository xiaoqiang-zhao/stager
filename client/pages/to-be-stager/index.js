// 成为过来人

Page({
  data: {
    userInfo: {},
    date: '',
    nickName: '',
    content: '',
    count: 0
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '成为过来人'
    });
    this.setData({
      date: utils.formatTime(new Date),
      nickName: app.globalData.userInfo.nickName
    });
  },

  // 文本域输入事件
  onInput(event) {
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