//index.js

Page({
  data: {
    userInfo: {},
    locationName: '百度科技园附近'
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '预约'
    });
  },
  appoint() {
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000
    });
  }
});
