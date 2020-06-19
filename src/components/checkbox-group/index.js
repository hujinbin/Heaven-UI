import checkboxGroup from './src/checkbox-group';

checkboxGroup.install = function(Vue) {
  Vue.component(checkboxGroup.name, checkboxGroup);
};

export default checkboxGroup;