// pages/mine_AddInformation/addInformation.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: "",
  },

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
    const self = this
    var languageType = app.globalData.languageType
    self.setData({
      imageSrc: app.globalData.userInfo.avatarUrl,
      ChangeLanguage: app.globalData.userChangeLanguage[languageType],
      ClientInfo: app.globalData.userClientInfo[languageType],
      Manual: app.globalData.userManual[languageType],
      MoreInfo: app.globalData.userMoreInfo[languageType],
      Logout: app.globalData.userLogout[languageType]
    })
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