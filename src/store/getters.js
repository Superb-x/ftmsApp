
/**
 * Created by near on 2017/7/24.
 */
const getters = {
  slide: state => state.app.slide,
  clientid: state => state.user.clientid,      // 推送服务令牌（设备唯一标识），用于标识推送信息接收者身份
  carcode: state => state.user.carcode,       // 车架号
  carenginecode: state => state.user.carenginecode, // 发动机号
  carnumber: state => state.user.carnumber,     // 车牌
  carmodel: state => state.user.carmodel,      // 车型
  token: state => state.user.token,         // 唯一令牌
  name: state => state.user.name,          // 名字
  tel: state => state.user.tel,           // 电话
  sex: state => state.user.sex,            // 性别
  lastlogintime: state => state.user.lastlogintime, // 最后一次登陆时间
  status: state => state.user.status,         // 是否绑定车辆
  thumb: state => state.user.thumb,         // 头像
  regid: state => state.user.regid,         // 极光推送id
  isDealer: state => state.user.isDealer
}

export default getters
