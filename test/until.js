import Vue from 'vue';
import Heaven from '../src/index.js';

Vue.use(Heaven);

// 加载对应组件
export const mountVue = function(Compo) {
    return new Vue(Compo).$mount(createElm());
};
