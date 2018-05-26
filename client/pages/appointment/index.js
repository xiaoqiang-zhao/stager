//index.js

Page({
  data: {
    stager: {},
    stagerId: 0
  },
  onLoad(option) {
    wx.setNavigationBarTitle({
      title: '预约'
    });

    const me = this;
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
            return true;
          }
        });
      }
    });
  },
  appoint() {
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000
    });
  }
});
