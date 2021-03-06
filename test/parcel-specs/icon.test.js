import Vue from 'vue'
import Icon from '../src/icon'

describe('Icon.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Icon)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})