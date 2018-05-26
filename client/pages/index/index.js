//index.js

var data = require('./data.js');

Page({
  data: {
    userInfo: {},
    locationName: '百度科技园附近',
    isActivedSearch: false,
    dataList: data.dataList,
    classificationList: data.classificationList,
    activedClassificationId: 0
  },
  onLoad() {
    wx.setStorage({
      key: 'dataList',
      data: data.dataList
    });
  },
  // 约过来人
  appoint(event) {
    const stagerId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/appointment/index?stagerId=' + stagerId
    });
  },
  // 成为过来人
  toBeStager() {
    wx.navigateTo({
      url: '/pages/to-be-stager/index'
    });
  },
  // 跳到详情页
  toStagerDetailPage(event) {
    const stagerId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/stager-detail/index?stagerId=' + stagerId
    });
  },
  // 改变分类
  onChangeClassification(event) {
    const classificationId = event.currentTarget.dataset.id;
    const list = [];
    data.dataList.forEach(item => {
      if (item.classificationId === classificationId || classificationId === 0) {
        list.push(item);
      }
    });
    this.setData({
      dataList: list,
      activedClassificationId: classificationId
    });
  },
  // 激活搜索状态
  activeSearch() {
    this.setData({
      isActivedSearch: true
    });
  },
  // 退出搜索状态
  cancelSearch() {
    this.setData({
      isActivedSearch: false
    });
  },
  // 搜索操作
  search() {
    this.setData({
      isActivedSearch: false
    });
  }
});
