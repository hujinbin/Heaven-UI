<template>
  <div class="h-switch"
    :class="{ 'is-disabled': disabled, 'is-checked': checked }">
    <input type="checkbox" @change="handleChange" class="h-switch-input">
    <span class="h-switch-core"></span>
  </div>
</template>

<script>
export default {
  name: "HSwitch",
  components: {
   
  },
  props: {
     value: {
        type: [Boolean, String, Number],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      }, // 开启的值
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      }, // 关闭的值
  },
  data(){
    return {
  
    }
  },
  computed: {
      checked() {
        return this.value === this.activeValue;
      },
  },
  methods:{
      handleChange(event) {
        const val = this.checked ? this.inactiveValue : this.activeValue;
        this.$emit('input', val);
        this.$emit('change', val);
      },
  },
 
};
</script>

<style lang="scss" scoped>
  .h-switch{
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .h-switch-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}
.h-switch-core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #D7D7DB;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #D7D7DB;
    cursor: pointer;
    vertical-align: middle;
    &:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
    }
}
&.is-checked{
  .h-switch-core{
border-color: #0c80f9;
    background-color: #0c80f9;
  }
}
  }
</style>
