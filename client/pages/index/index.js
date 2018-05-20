//index.js

Page({
  data: {
    userInfo: {},
    locationName: '百度科技园附近',
    isActivedSearch: false
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
  },
  // 约过来人
  appoint() {
    wx.navigateTo({
      url: '/pages/appointment/index?id=1'
    });
  },
  toBeStager() {
    wx.navigateTo({
      url: '/pages/to-be-stager/index'
    });
  },
  activeSearch() {
    this.setData({
      isActivedSearch: true
    });
  },
  cancelSearch() {
    this.setData({
      isActivedSearch: false
    });
  },
  search() {
    this.setData({
      isActivedSearch: false
    });
  }
});
