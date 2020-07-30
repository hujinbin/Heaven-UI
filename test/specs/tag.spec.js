import Vue from 'vue'
import Tag from '@/components/tag'

describe('tag.vue', () => {
  it('tag',()=>{
    expect(Tag).to.be.ok;
  })

  it('create', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      template: `
      <h-tag></h-tag>
      `
    }).$mount()
    expect(vm.$el.classList.contains('h-tag')).to.be.true;
  });
})
