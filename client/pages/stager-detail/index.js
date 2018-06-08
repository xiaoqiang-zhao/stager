// 过来人详情页

Page({
  data: {
    stager: {},
    // 所属分类信息
    classification: {},
    isCollected: false,
    stagerId: 0
  },
  onLoad(option) {
    const me = this;
    // 获取详情页信息
    wx.getStorage({
      key: 'dataList',
      success(res) {
        const dataList = res.data;
        dataList.some(item => {
          if (item.id == option.stagerId) {
            me.setData({
              stager: item,
              stagerId: option.stagerId
            });
            me.setClassification(item.classificationId);
            return true;
          }
        });
      }
    });
  },
  // 设置所属分类
  setClassification(classificationId) {
    const me = this;
    wx.getStorage({
      key: 'classificationList',
      success(res) {
        const classificationList = res.data;
        classificationList.some(item => {
          if (item.id == classificationId) {
            me.setData({
              classification: item
            });
            return true;
          }
        });
      }
    });
  },
  // 约过来人
  appoint() {
    wx.navigateTo({
      url: '/pages/appointment/index?stagerId=' + this.data.stagerId
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