import HTableColumn from './src/table-column';

HTableColumn.install = function(Vue) {
    Vue.component(HTableColumn.name, HTableColumn);
};

export default HTableColumn;