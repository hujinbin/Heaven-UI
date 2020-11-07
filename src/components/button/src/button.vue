<template>
    <button class="h-button" :class="`h-button-${type} h-button-${size}`" @click="$emit('click')" :disabled="disabled">
      <h-icon v-if="icon && !loading" :name="icon"></h-icon>
      <h-icon v-else-if="loading" name="loading"></h-icon>
      <slot></slot>
    </button>
</template>

<script>
import HIcon from '../../icon'
export default {
  name: 'HButton',
  components:{
    HIcon
  },
  props:{
    icon:String, //图标
    loading:{ // 加载状态
      type:Boolean,
      default:false,
    },
    size:{  // 按钮大小
      type:String,
      default:'normal', //尺寸	String	mini ，small, normal, large
    },	
    type:{
      type:String,
      default:'default' //颜色 default默认 primary / success / warning / danger / info 
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
 .h-button{
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 18px;
    border: 1px solid #C9C9C9;
    background-color: #fff;
    color: #555;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
    border-radius: 2px;
    cursor: pointer;
    &:hover,&.active,&.visited{
      opacity: 0.9;
      outline: none;
    }
 }

//  颜色
  .h-button-primary{
    background: #0c80f9;
    color: #ffffff;
    border: 1px solid #0c80f9;
  }
  .h-button-success{
    background: #61d826;
    color: #ffffff;
    border: 1px solid #61d826;
  }
  .h-button-warning{
    background: #FFB800;
    color: #ffffff;
    border: 1px solid #FFB800;
  }
  .h-button-danger{
    background: #f13535;
    color: #ffffff;
    border: 1px solid #f13535;
  }
  .h-button-info{
    background: #78797d;
    color: #ffffff;
    border: 1px solid #78797d;
  }
  // 大小
  .h-button-large{
    height: 44px;
    line-height: 44px;
     font-size: 16px;
  }
  // .h-button-normal{
  //   height: 38px;
  //   line-height: 38px;
  // }
  .h-button-small{
    height: 32px;
    line-height: 32px;
    font-size: 12px;
  }
  .h-button-mini{
      height: 24px;
    line-height: 24px;
     font-size: 10px;
  }
</style>