//index.js
const utils = require('../../utils/util.js');

Page({
  data: {
    date: '',
    id: 0,
    title: '',
    phone: '',
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
              id: item.id,
              title: item.title,
              stager: item,
              stagerId: option.stagerId
            });
            return true;
          }
        });
      }
    });

    this.setData({
      date: utils.formatTime(new Date)
    });
  },
  appoint() {
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000
    });
  },
  onInput(event) {
    this.setData({
      phone: event.detail.value
    });
  },
});
