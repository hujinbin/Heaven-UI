import Vue from 'vue'
import Icon from '@/components/icon'

describe('icom.vue', () => {
  it('测试name是否生效', () => {
    const Constructor = Vue.extend(Icon)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})