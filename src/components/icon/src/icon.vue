<template>
    <i class="h-icon" :class="`h-icon-${name}`" :style="{fontSize:size}"></i>
</template>

<script>
export default {
  name: 'HIcon',
  props:{
    name:String,
    size:{
      type:Number,
      default:14,
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
  @import '//at.alicdn.com/t/font_1343551_0vtaqdeweopn.css'; 
  .h-icon{
    font-style: normal;
  }
  .h-icon-loading{
    display: inline-block;
    animation: rotating 2s linear infinite;
  }
  @keyframes rotating{
		0%{transform:rotate(0deg);}
		25%{transform:rotate(90deg);}
		50%{transform:rotate(180deg);}
		75%{transform:rotate(270deg);}
		100%{transform:rotate(360deg);}
	}
</style>