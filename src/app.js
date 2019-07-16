import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('h-button',Button)
Vue.component('h-icon',Icon)

new Vue({
  el:'#app',
})