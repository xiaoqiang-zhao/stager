//index.js

Page({
  data: {
    dataList: [],
    searchResultList: [],
    isShowEmpty: false
  },
  onLoad() {
    const me = this;
    wx.getStorage({
      key: 'dataList',
      success(res) {
        const dataList = res.data;
        me.setData({
          dataList
        });
      }
    });
  },
  // 约过来人
  appoint(event) {
    const stagerId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/appointment/index?stagerId=' + stagerId
    });
  },
  // 跳到详情页
  toStagerDetailPage(event) {
    const stagerId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/stager-detail/index?stagerId=' + stagerId
    });
  },
  // 退出搜索状态
  cancelSearch() {
    wx.navigateTo({
      url: '/pages/index/index'
    });
  },
  // 搜索操作
  search(event) {
    // event.detail.value
    this.setData({
      isShowEmpty: true
    });
  }
});
