import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('h-button',Button)
Vue.component('h-icon',Icon)
Vue.component('h-button-group',ButtonGroup)

new Vue({
  el:'#app',
})