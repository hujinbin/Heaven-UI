import Button from './src/button'
import Icon from './src/icon'
import ButtonGroup from './src/button-group'
import Input from './input'


const install = Vue => {
    Vue.component(Button.name, Button)
    Vue.component(Icon.name, Icon)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Input.name, Input)
}
export default install

// export {Button,Icon,ButtonGroup,Input}