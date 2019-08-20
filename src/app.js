import Vue from '../node_modules/vue'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'

Vue.component('h-button',Button)
Vue.component('h-icon',Icon)
Vue.component('h-button-group',ButtonGroup)
Vue.component('h-input',Input)

new Vue({
  el:'#app',
})