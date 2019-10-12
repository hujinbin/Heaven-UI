<template>
  <div id="app">
    icon 测试
    <h-icon name="loading"></h-icon>
    按钮测试
      <h-button>默认</h-button>
      <h-button type="primary">简约</h-button>
      <h-button type="success">成功</h-button>
      <h-button type="warning" size="mini">警告</h-button>
      <h-button type="danger" loading>加载按钮</h-button>
      <h-button type="primary" icon="edit"></h-button>

      弹窗
       <h-button type="danger" @click="showAlert">打开弹窗</h-button>
       <h-button type="info" @click="showMsgAlert">打开消息弹窗</h-button>
      <h-button type="info" @click="showLoading">打开加载</h-button>
          <br/>
        输入框
      <h-input v-model="value"></h-input>
      {{value}}
      <h-input type="textarea" v-model="value"></h-input>
      单选框
      <h-radio>男</h-radio>
      <h-radio>女</h-radio>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      value:'',
    }
  },
  methods:{
    add(){
      console.log(1111)
    },
    showAlert(){
      this.$alert('提示')
    },
    showMsgAlert(){
      this.$alert.Msg('提示')
    },
    showLoading(){
      this.$alert.Loading('提示')
    },
  }
}
</script>

<style>
</style>
