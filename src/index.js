import Alert from './components/alert/index.js'
import Button from './components/button/index.js'
import Icon from './components/icon/index.js'
import ButtonGroup from './components/button-group/index.js'
import Input from './components/input/index.js'
import Radio from './components/radio/index.js'
import Checkbox from './components/checkbox/index.js'
import Pagination from './components/pagination/index.js'



const components = [
    Button,
    Icon,
    ButtonGroup,
    Input,
    Radio,
    Checkbox,
    Pagination,
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
    Icon,
    ButtonGroup,
    Input,
    Radio,
    Checkbox,
    Pagination,
}