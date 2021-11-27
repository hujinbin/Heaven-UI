<template>
  <div id="app">

    <h1>alert弹窗</h1>
    <h-button type="danger" @click="showAlert">打开弹窗</h-button>
    <h-button type="info" @click="showMsgAlert">打开消息弹窗</h-button>
    <h-button type="info" @click="showLoading">打开加载</h-button>

    <br />
    <h1>icon 测试</h1>
    
    <h-icon name="loading"></h-icon>
    <h-icon name="set"></h-icon>
    <h-icon name="del"></h-icon>

    <br />
    <h1>button 按钮测试</h1>
    <h-button>默认</h-button>
    <h-button type="primary">简约</h-button>
    <h-button type="success">成功</h-button>
    <h-button type="warning" size="mini">警告</h-button>
    <h-button type="danger" loading>加载按钮</h-button>
    <h-button type="primary" icon="edit"></h-button>
    <h-button type="primary" disabled>禁用</h-button>
    <br />
    <h1>button-group 按钮组</h1>
    <h-button-group>
      <h-button type="primary">上一页</h-button>
      <h-button type="primary">下一页</h-button>
    </h-button-group>

   

    <br />
    <h1>input 输入框</h1>
    <h-input v-model="value"></h-input>
    {{ value }}
    <h-input type="textarea" v-model="value"></h-input>

    <br />
    <h1>radio 单选框</h1>
    <h-radio :label="1" v-model="radioValue">男</h-radio>
    <h-radio :label="2" v-model="radioValue">女</h-radio>
    <h-radio :label="1" v-model="radioValue" disabled>男</h-radio>
    <h-radio :label="2" v-model="radioValue" disabled>女</h-radio>
    <br />
    <h1>radio-group 单选框组</h1>
    <h-radio-group v-model="radio">
      <h-radio :label="1">备选项</h-radio>
      <h-radio :label="2">备选项</h-radio>
      <h-radio :label="3">备选项</h-radio>
    </h-radio-group>
    <br />
    <h1>checkbox 多选框</h1>
    <h-checkbox v-model="checkboxValue1">多选框1</h-checkbox>
    <h-checkbox v-model="checkboxValue2">多选框2</h-checkbox>

    <br />
    <h1>pagination 分页</h1>
    <h-pagination :pageCount="5"></h-pagination>

    <br/>
    <h1>select 选择器</h1>
    <h-select  v-model="selectValue" placeholder="请选择">
      <h-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </h-option>
    </h-select>

    <br />
    <h1>rate 评分</h1>
    <h-rate v-model="rateValue"></h-rate>

    <br />
    <h1>tag 标签</h1> 
    <h-tag>标签一</h-tag>
    <h-tag type="info">标签二</h-tag>

    <br />
    <h1>form 表单</h1> 
    <h-form>
      <h-form-item label="活动名称">
        <h-input v-model="value"></h-input>
      </h-form-item>
      <h-form-item label="是否开启">
        <h-switch v-model="switchValue"> </h-switch>
      </h-form-item>
    </h-form>
    <br />
    <h1>date-picker 日期选择器 </h1> 
    <h-date-picker></h-date-picker>

    <br />
    <h1>table 表格</h1> 
    <h-table :data="tableData" style="width: 100%">
      <h-table-column prop="date" label="日期" width="180"> </h-table-column>
      <h-table-column prop="name" label="姓名" width="180"> </h-table-column>
      <h-table-column prop="address" label="地址"> </h-table-column>
    </h-table>

    <br />
    <h1>switch 开关</h1> 
    
    <h-switch v-model="switchValue"> </h-switch>

    <br />
    <h1>col 布局</h1> 

<h-row>
  <h-col :span="24">
    <div class="bg-purple-dark"></div>
  </h-col>
</h-row>
<h-row>
  <h-col :span="12">
    <div class="bg-purple-dark"></div>
  </h-col>
  <h-col :span="12">
    <div class="bg-purple-dark"></div>
  </h-col>
</h-row>
<h-row>
  <h-col :span="8">
    <div class="bg-purple-dark"></div>
  </h-col>
  <h-col :span="8">
    <div class="bg-purple-dark"></div>
  </h-col>
    <h-col :span="8">
    <div class="bg-purple-dark"></div>
  </h-col>
</h-row>
<h-row>
  <h-col :span="6">
    <div class="bg-purple-dark"></div>
  </h-col>
  <h-col :span="6">
    <div class="bg-purple-dark"></div>
  </h-col>
    <h-col :span="6">
    <div class="bg-purple-dark"></div>
  </h-col>
    <h-col :span="6">
    <div class="bg-purple-dark"></div>
  </h-col>
</h-row>
    <br />

  <h1>Layout 布局</h1> 
  
   <br />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
      radio: "",
      radioValue: 1,
      checkboxValue1: false,
      checkboxValue2: true,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      selectValue: "",
      rateValue: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      switchValue: false,
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
    },
  },
};
</script>

<style lang="scss">
.bg-purple-dark{
  background: #78797d;
  height: 36px;
  margin: 10px;
}
</style>
