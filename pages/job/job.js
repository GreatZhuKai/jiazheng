// pages/movie/movie.js
var API_URL = "https://www.easy-mock.com/mock/5a2fa1b3c430642f15c63503/jobs/jobs"

Page({
  /**
   * 页面的初始数据
   */
  data: {
    title:"加载中...",
    jobs:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var that = this;
    // 显示消息提示框
    wx.showToast ({
       title:"加载中...",
       icon:"loading",
       duration:2000
    });

    wx.request({
      url: API_URL,
      // data: {
      //     data: data
      //  },
      
      success: function(res) {
        wx.hideToast();
        var data = res.data;
        that.setData({
          jobs: res.data.data.jobs
        })
         console.log(that.data.jobs)
      }
    })
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