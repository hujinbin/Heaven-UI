<template>
  <div id="app">
    icon 测试
    <h-icon name="loading"></h-icon>
    <h-icon name="set"></h-icon>
    <h-icon name="del"></h-icon>

    <br />按钮测试
    <h-button>默认</h-button>
    <h-button type="primary">简约</h-button>
    <h-button type="success">成功</h-button>
    <h-button type="warning" size="mini">警告</h-button>
    <h-button type="danger" loading>加载按钮</h-button>
    <h-button type="primary" icon="edit"></h-button>
    <br />按钮组
    <h-button-group>
      <h-button>默认</h-button>
      <h-button type="primary">简约</h-button>
    </h-button-group>

    <br />弹窗
    <h-button type="danger" @click="showAlert">打开弹窗</h-button>
    <h-button type="info" @click="showMsgAlert">打开消息弹窗</h-button>
    <h-button type="info" @click="showLoading">打开加载</h-button>

    <br />输入框
    <h-input v-model="value"></h-input>
    {{value}}
    <h-input type="textarea" v-model="value"></h-input>

    <br />单选框
    <h-radio :label="1" v-model="radioValue">男</h-radio>
    <h-radio :label="2" v-model="radioValue">女</h-radio>
    <h-radio :label="1" v-model="radioValue" disabled>男</h-radio>
    <h-radio :label="2" v-model="radioValue" disabled>女</h-radio>
    <br />单选框组
    <h-radio-group v-model="radio">
      <h-radio :label="1">备选项</h-radio>
      <h-radio :label="2">备选项</h-radio>
      <h-radio :label="3">备选项</h-radio>
    </h-radio-group>
    <br />多选框
    <h-checkbox v-model="checkboxValue1">多选框1</h-checkbox>
    <h-checkbox v-model="checkboxValue2">多选框2</h-checkbox>

    <br />分页
    <h-pagination :pageCount="5"></h-pagination>

    <br/>选择器
    <h-select  v-model="selectValue" placeholder="请选择">
      <h-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </h-option>
    </h-select>
    
    <br/>评分
    <h-rate v-model="rateValue"></h-rate>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
      radio:'',
      radioValue: 1,
      checkboxValue1: false,
      checkboxValue2: true,
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selectValue:'',
        rateValue: 0,
    };
  },
  methods: {
    add() {
      console.log(1111);
    },
    showAlert() {
      this.$alert("提示");
    },
    showMsgAlert() {
      this.$alert.Msg("提示");
    },
    showLoading() {
      this.$alert.Loading("提示");
    }
  }
};
</script>

<style>
</style>
