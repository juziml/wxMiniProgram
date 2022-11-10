Page({
  data: {
   content:"等待请求"
  },
  onClick(){
    const that = this;
    that.setData({
      content:"开始请求"
    })
    wx.request({
      url:'https://api.github.com/',
      success(res){
        that.setData({content:res.data.toString})
      }
    })
  }
})
function calcula(){

}