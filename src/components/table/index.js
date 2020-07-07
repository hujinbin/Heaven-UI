import HTable from './src/table';

HTable.install = function(Vue) {
    Vue.component(HTable.name, HTable);
};

export default HTable;