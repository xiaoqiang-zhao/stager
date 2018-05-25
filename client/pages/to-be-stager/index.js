// 成为过来人

Page({
  data: {
    userInfo: {},
    locationName: '百度科技园附近',
    count: 0
  },
  onLoad() {
    // wx.chooseLocation({
    //     success: res => {
    //         this.locationName = res.name;
    //     },
    //     fail: res => {
    //         this.locationName = '未授权获取当前位置';
    //     }
    // });
    wx.setNavigationBarTitle({
      title: '成为过来人'
    });
  },

  // 文本域输入事件
  onInput(event) {
    this.setData({
      count: event.detail.cursor
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