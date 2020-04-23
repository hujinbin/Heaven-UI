import Vue from 'vue'
import Icon from '@/components/icon'

describe('icon.vue', () => {
  it('icon是否存在',()=>{
    expect(Icon).to.be.ok;
  })
  it('测试name是否生效', () => {
    const Constructor = Vue.extend(Icon)
    const vm = new Constructor({
      propsData:{
        name:'loading'
      }
    }).$mount()
    expect(vm.$el.querySelector('.h-icon').getAttribute('class'))
      .to.equal('h-icon-loading')
      vm.$destroy()
  })
  it('测试size是否生效', () => {
    const Constructor = Vue.extend(Icon)
    const vm = new Constructor({
      propsData:{
        size:20
      }
    }).$mount()
    expect(vm.$el.querySelector('.h-icon').textContent)
      .to.equal('')
      vm.$destroy()
  })
})
