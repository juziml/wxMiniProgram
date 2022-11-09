const part3App = getApp()
Page({
  data: {
    name: "王二",
    timeNow: part3App.globalData.timeNow + ":"
  },
  getTime(event){
    this.setData({
      time:(new Date()).toLocaleString()
    },function(){
      wx.showToast({
        title:"操作完成",
        duration:1000
      })
    })
  },
  showDialog(){
    const that = this;
    wx.showModal({
      title:"Title-提示",
      content:"content-需要刷新时间吗",
      success(res){
          if(res.confirm){
            that.setData({
              time:(new Date()).toLocaleString()
            },function(){
              wx.showToast({
                title:"操作成功",
                duration:1000,
                icon:"success"
              })
            })
          }else{
            wx.showToast({
              title:"取消操作",
              duration:1000,
              icon:"none"
            })
          }
      }
    })
  }
})