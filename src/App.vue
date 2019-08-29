<template>
  <div id="app">
    icon 测试
    <h-icon name="loading"></h-icon>
    按钮测试
      <h-button @click="add">默认</h-button>
      <h-button type="success">默认</h-button>
      <h-button type="success" size="mini">小号</h-button>

      输入框
      <h-input v-model="value"></h-input>
      {{value}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      value:''
    }
  },
  mounted(){
    this.$alert('测试')
    this.$alert.msg('测试')
  },
  methods:{
    add(){
      console.log(1111)
    }
  }
}
</script>

<style>
</style>
