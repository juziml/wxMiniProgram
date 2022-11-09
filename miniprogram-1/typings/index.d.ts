/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    timeNow:String
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}