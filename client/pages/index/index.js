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


    // wx.showModal({
    //   title: '标题',
    //   content: '内容'
    // });
  },
  authorize() {
    // 先查询用户是否授权了
    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userLocation']) {
    //       wx.authorize({
    //         scope: 'scope.userLocation',
    //         success() {
    //             // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //             // wx.startRecord()
    //         }
    //       });
    //     }
    //   }
    // });
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
    wx.showModal({
      title: '标题',
      content: '内容'
    });
  },
  // 关闭弹窗
  closeDialog() {
    this.setData({
      hidden: true
    });
  }
});
