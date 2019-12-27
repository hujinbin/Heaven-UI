import Alert from './components/alert/index.js'
import Button from './components/button/index.js'
import Icon from './components/icon/index.js'
import ButtonGroup from './components/button-group/index.js'
import Input from './components/input/index.js'
import Radio from './components/radio/index.js'
import Checkbox from './components/checkbox/index.js'
import Pagination from './components/pagination/index.js'

const install = Vue => {
    Vue.component(Button.name, Button)
    Vue.component(Icon.name, Icon)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Input.name, Input)
    Vue.component(Radio.name, Radio)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Pagination.name, Pagination)

    Vue.prototype.$alert = Alert;
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