/**
 * Created by near on 2017/7/24.
 */
const user = {
  state: {
    clientid: '',      // 推送服务令牌（设备唯一标识），用于标识推送信息接收者身份
    carcode: '',       // 车架号
    carenginecode: '', // 发动机号
    carnumber: '',     // 车牌
    carmodel: '',      // 车型
    token: '',         // 唯一令牌
    name: '',          // 名字
    tel: '',           // 电话
    sex: 1,            // 性别
    lastlogintime: '', // 最后一次登陆时间
    status: 0,         // 是否绑定车辆
    thumb: '',         // 头像
    regid: '',         // 极光推送id
    isDealer: false    // 经销商？
  },
  mutations: {

  }
}

export default user
