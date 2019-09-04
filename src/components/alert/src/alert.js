import Vue from 'vue';
import alert from './alert.vue';
import msg from './msg.vue';

let alertComponent = null
 
const Alert = function(options) {
    const Alert=Vue.extend(alert)
    alertComponent = new Alert({
        text: options
    });
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
    console.log(options)
    const Msg=Vue.extend(msg)
    const MsgComponent = new Msg({
        text: options
    });
    MsgComponent.$mount();
    console.log(MsgComponent.$el)
    document.body.appendChild(MsgComponent.$el);
    setTimeout(()=>{
        document.body.removeChild(MsgComponent.$el)
    },2000)
}

export default Alert;