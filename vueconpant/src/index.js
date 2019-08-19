import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'

const install = Vue => {
    Vue.component(Button.name, Button)
    Vue.component(Icon.name, Icon)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Input.name, Input)
}
export default install

// export {Button,Icon,ButtonGroup,Input}