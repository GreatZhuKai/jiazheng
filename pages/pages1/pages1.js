// pages/pages1/pages1.js

const API_URL = '';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },

  search:function(e){
    wx.showToast({
      title:"加载中..",
      icon:"loading",
      duration:10000
    });
    var that = this;
    wx.request({
      url:'',
      data:{},
      header:{
        "Content-Type":"json"
        // 'Content-Type':'application/json'
      },
      success:function(res){
        console.log(res.data);
        wx.hideToast();
        that.setData({
          // movies:res.data.subjects
        })
      }
    });
  } , 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})