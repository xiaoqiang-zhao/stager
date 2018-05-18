//index.js

Page({
    data: {
        userInfo: {},
        locationName: '正在获取位置信息...'
    },
    onLoad() {
        // wx.chooseLocation({
        //     success: res => {
        //         this.locationName = res.name;
        //     },
        //     fail: res => {
        //         this.locationName = '未授权获取当前位置';
        //     }
        // });
    }
});
