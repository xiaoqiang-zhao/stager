// 过来人详情页

Page({
  data: {
    userInfo: {},
    // 收藏
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
  showToast() {
    let text = '收藏成功';
    if (isCollected) {
      text = '取消收藏成功';
    }

    wx.setData({
      isCollected: !isCollected
    });

    wx.showToast({
      title: text,
      icon: 'success',
      duration: 2000
    });
  }
});