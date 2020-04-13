import Vue from 'vue'
import Input from '@/components/input'

describe('input.vue', () => {
  it('input是否存在',()=>{
    expect(Input).to.be.ok;
  })
  it('测试name是否生效', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
