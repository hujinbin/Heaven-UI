import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('h-button',Button)
Vue.component('h-icon',Icon)
Vue.component('h-button-group',ButtonGroup)
Vue.component('h-input',Input)

new Vue({
  el:'#app',
})