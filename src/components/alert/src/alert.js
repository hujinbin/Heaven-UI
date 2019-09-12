import Vue from 'vue';
import alert from './alert.vue';
import msg from './msg.vue';

let alertComponent = null
 
const Alert = function(options) {
    const Alert=Vue.extend(alert)
    options = options || {};
    if (typeof options === 'string') {
      options = {
        text: options
      };
    }
    alertComponent = new Alert({
        propsData: options
    });
    console.log(options)
    // 把alert加入body中
    alertComponent.$mount();
    document.body.appendChild(alertComponent.$el);
}
// 关闭弹窗
Alert.close=function(){
    document.body.removeChild(alertComponent.$el);
}
// 消息
Alert.Msg = function(options){
    const Msg=Vue.extend(msg)
    if (typeof options === 'string') {
        options = {
          text: options
        };
      }
    const MsgComponent = new Msg({
        propsData: options
    });
    MsgComponent.$mount();
    document.body.appendChild(MsgComponent.$el);
    setTimeout(()=>{
        document.body.removeChild(MsgComponent.$el)
    },2000)
}

Alert.Loading = function(options){
  const Msg=Vue.extend(msg)
  options = {
    loading: true
  };
  const MsgComponent = new Msg({
      propsData: options
  });
  MsgComponent.$mount();
  document.body.appendChild(MsgComponent.$el);
  setTimeout(()=>{
      document.body.removeChild(MsgComponent.$el)
  },2000)
}

export default Alert;