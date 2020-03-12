<template>
  <div id="app">
    icon 测试
    <h-icon name="loading"></h-icon>
    <h-icon name="set"></h-icon>
    <h-icon name="del"></h-icon>
  
   <br/>
    按钮测试
      <h-button>默认</h-button>
      <h-button type="primary">简约</h-button>
      <h-button type="success">成功</h-button>
      <h-button type="warning" size="mini">警告</h-button>
      <h-button type="danger" loading>加载按钮</h-button>
      <h-button type="primary" icon="edit"></h-button>
 <br/>

 按钮组
<h-button-group>
  <h-button>默认</h-button>
  <h-button type="primary">简约</h-button>
</h-button-group>

 <br/>
      弹窗
       <h-button type="danger" @click="showAlert">打开弹窗</h-button>
       <h-button type="info" @click="showMsgAlert">打开消息弹窗</h-button>
      <h-button type="info" @click="showLoading">打开加载</h-button>


          <br/>
        输入框
      <h-input v-model="value"></h-input>
      {{value}}
      <h-input type="textarea" v-model="value"></h-input>


       <br/>
      单选框
      <h-radio :label='1' v-model="radioValue">男</h-radio>
      <h-radio :label='2' v-model="radioValue">女</h-radio>
      <h-radio :label='1' v-model="radioValue" disabled>男</h-radio>
      <h-radio :label='2' v-model="radioValue" disabled>女</h-radio>

      <br/>
      多选框
      <h-checkbox v-model="checkboxValue">多选框1</h-checkbox>
      <h-checkbox v-model="checkboxValue">多选框2</h-checkbox>

      <br/>
      分页
      <h-pagination></h-pagination>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      value:'',
      radioValue: 1,
      checkboxValue: true,
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
