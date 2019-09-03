import Vue from 'vue';
import alert from './alert.vue';
import msg from './msg.vue';


const Alert = function(options) {
    const Alert=Vue.extend(alert)
    const alertComponent = new Alert({
        text: options
    });
    // 把alert加入body中
    alertComponent.$mount();
    console.log(alertComponent)
    console.log(alertComponent.$el)
    document.body.appendChild(alertComponent.$el);
    setTimeout(()=>{
        document.body.removeChild(alertComponent.$el)
    },2000)
}

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