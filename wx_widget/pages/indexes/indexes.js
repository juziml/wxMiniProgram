/*
 * @Author: shiyanzhang
 * @Date: 2021-08-24 19:27:04
 * @Description:
 * @FilePath: /tdesign-miniprogram/example/pages/indexes/indexes.ts
 */
Page({
    data: {},
    onLoad() { },
    onReady() { },
    onShow() { },
    tapShowLetter() {
        wx.navigateTo({ url: '/pages/indexes/display/index?type=letter' });
    },
    tapShowNumber() {
        wx.navigateTo({ url: '/pages/indexes/display/index?type=number' });
    },
});

//# sourceMappingURL=indexes.js.map
