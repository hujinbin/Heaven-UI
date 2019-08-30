import Vue from 'vue';
import alert from './alert.vue';
import msg from './msg.vue';


const Alert = function(options) {
    const Alert=Vue.extend(alert)
    const alertComponent = new Alert({el: document.createElement('div')});
    alertComponent.text = options.text;
    // 把alert加入body中
    alertComponent.$appendTo(document.body);
}

export default Alert;