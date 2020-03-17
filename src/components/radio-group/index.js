import HRadioGroup from './src/radio-group';

HRadioGroup.install = function(Vue) {
    Vue.component(HRadio.name, HRadioGroup);
};

export default HRadioGroup;
