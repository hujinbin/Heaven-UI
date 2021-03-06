import Alert from './components/alert/index.js'
import Button from './components/button/index.js'
import ButtonGroup from './components/button-group/index.js'
import Checkbox from './components/checkbox/index.js'
import CheckboxGroup from './components/checkbox-group/index.js'
import DatePicker from './components/date-picker/index.js'
import Form from './components/form/index.js'
import FormItem from './components/form-item/index.js'
import Icon from './components/icon/index.js'
import Input from './components/input/index.js'
import Option from './components/option/index.js'
import Pagination from './components/pagination/index.js'
import Radio from './components/radio/index.js'
import RadioGroup from './components/radio-group/index.js'
import Rate from './components/rate/index.js'
import Select from './components/select/index.js'
import Switch from './components/switch/index.js'
import Table from './components/table/index.js'
import HTableColumn from './components/table-column/index.js'
import Tag from './components/tag/index.js'


const components = [
    Button,
    ButtonGroup,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    Form,
    FormItem,
    Icon,
    Input,
    Option,
    Pagination,
    Radio,
    RadioGroup,
    Rate,
    Select,
    Switch,
    Table,
    HTableColumn,
    Tag,
  ]
  
  const install = function(Vue, opts = {}) {
    components.map(component => {
      Vue.component(component.name, component);
    })
    Vue.prototype.$alert = Alert;
  }

console.log('Heaven0.0.2')

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
   install(window.Vue);
}

export default {
    install,
    Alert,
    Button,
    ButtonGroup,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    Form,
    FormItem,
    Icon,
    Input,
    Option,
    Pagination,
    Radio,
    RadioGroup,
    Rate,
    Select,
    Switch,
    Table,
    HTableColumn,
    Tag,
}