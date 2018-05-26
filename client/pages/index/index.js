//index.js

var data = require('./data.js');

Page({
  data: {
    userInfo: {},
    locationName: '百度科技园附近',
    isActivedSearch: false,
    dataList: data.dataList,
    classificationList: data.classificationList
  },
  onLoad() {
    wx.setStorage({
      key: 'dataList',
      data: data.dataList
    });
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
  toStagerDetailPage(event) {
    const stagerId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/stager-detail/index?stagerId=' + stagerId
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
