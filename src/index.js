import Alert from './components/alert/index'
import Button from './components/button/index'
import Icon from './components/icon/index'
import ButtonGroup from './components/button-group/index'
import Input from './components/input/index'

const install = Vue => {
    Vue.component(Button.name, Button)
    Vue.component(Icon.name, Icon)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Input.name, Input)

    Vue.prototype.$alert = Alert;
}
export default install

// export {Button,Icon,ButtonGroup,Input}