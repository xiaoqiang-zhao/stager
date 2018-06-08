//index.js

const data = require('./data.js');

Page({
  data: {
    userInfo: {},
    locationName: '百度科技园附近',
    dataList: data.dataList,
    classificationList: data.classificationList,
    activedClassificationId: 0,
    hidden: true
  },
  onLoad() {
    // 请求授权
    this.authorize();

    wx.setStorage({
      key: 'dataList',
      data: data.dataList
    });

    wx.setStorage({
      key: 'classificationList',
      data: data.classificationList
    });
  },
  authorize() {
    const me = this;
    // 先查询用户是否授权了
    wx.getSetting({
      success(res) {
        // 未授权时，弹框要授权
        if (!res.authSetting['scope.userInfo']) {
          // me.openDialog();
        }
        // 已授权可以直接掉接口获取用户数据
        else {
          wx.getUserInfo({
            success(res) {
              this.setData({
                userInfo: res.userInfo
              });
            }
          });
        }
        // 注：已授权的不可取消授权
      }
    });
  },
  onGotUserInfo(event) {
    // 当授权拒绝时，返回 null
    if (event.detail.userInfo) {
      this.closeDialog();
    }
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
    wx.navigateTo({
      url: '/pages/search/index'
    });
  },
  // 搜索操作
  search() {
    this.setData({
      isActivedSearch: false
    });
  },
  // 打开弹框
  openDialog() {
    this.setData({
      hidden: false
    });
  },
  // 关闭弹窗
  closeDialog() {
    this.setData({
      hidden: true
    });
  }
});
