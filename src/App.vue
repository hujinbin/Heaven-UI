<template>
  <div id="app">
    icon 测试
    <h-icon name="loading"></h-icon>
    按钮测试
      <h-button @click="add">默认</h-button>
       <h-button type="success">默认</h-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    add(){
      console.log(1111)
    }
  }
}
</script>

<style>
</style>
