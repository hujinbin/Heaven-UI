import HTag from './src/tag';

HTag.install = function(Vue) {
    Vue.component(HTag.name, HTag);
};

export default HTag;