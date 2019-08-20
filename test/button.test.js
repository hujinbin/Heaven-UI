import Vue from 'vue'
import Button from '../src/button'

describe('Button.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})