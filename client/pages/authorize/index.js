// 授权页
// 获取应用实例
const app = getApp();

Page({
  data: {
    motto: '欢迎来到“附近过来人”',
    authorized: false
  },
  onLoad() {
    // 先查询用户是否授权了
    wx.getSetting({
      success: (res) => {
        // 已授权直接到首页
        if (res.authSetting['scope.userInfo']) {
          // 从本地缓存中获取
          wx.getStorage({
            key: 'userInfo',
            success: (res) => {
              this.getUserInfo({
                detail: {
                  userInfo: res.data
                }
              });
            }
          });
        }
      }
    });
  },
  // 授权用户信息
  getUserInfo(event) {
    // 存储，小程序第二次进入时可以获得上次存储的信息
    wx.setStorage({
      key: 'userInfo',
      data: event.detail.userInfo
    });

    app.globalData.userInfo = event.detail.userInfo;

    this.setData({
      authorized: true
    });

    this.inter();
  },
  inter() {
    wx.navigateTo({
      url: '/pages/index/index'
    });
  }
});
