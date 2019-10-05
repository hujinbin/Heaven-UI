import Vue from 'vue'
import Button from '@/components/button'

describe('button.vue', () => {
  it('button是否存在',()=>{
    expect(Button).to.be.ok;
  })
  it('测试name是否生效', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
