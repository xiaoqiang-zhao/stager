// 过来人详情页

Page({
  data: {
    userInfo: {},
    isCollected: false
  },
  onLoad() {
    
  },
  // 约过来人
  appoint() {
    wx.navigateTo({
      url: '/pages/appointment/index?id=1'
    });
  },
  // 显示消息提示框
  showCollectedToast() {
    let text = '收藏成功';
    if (this.data.isCollected) {
      text = '取消收藏成功';
    }

    this.setData({
      isCollected: !this.data.isCollected
    });

    wx.showToast({
      title: text,
      icon: 'success',
      duration: 2000
    });
  }
});