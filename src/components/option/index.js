import HOption from './src/option';

HOption.install = function(Vue) {
    Vue.component(HOption.name, HOption);
};

export default HOption;
