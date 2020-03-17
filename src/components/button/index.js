import HButton from './src/button';

HButton.install = function(Vue) {
  Vue.component(HButton.name, HButton);
};

export default HButton;
