<template>
  <div class="h-rate">
    <span class="h-rate-item">
      <h-icon name="search"></h-icon>
    </span>
  </div>
</template>

<script>
  import HIcon from '../../icon'
  export default {
    name: "HRate",
    components:{
      HIcon
    },
    props: {
      value:{
        type:String | Number, //绑定值
      },
      disabled:{
        type:Boolean,
        default:false,
      },
    },
    computed: {
    },
    methods: {
    }
  };
</script>

<style lang="scss" scoped>
  .h-rate{
    .h-rate-item{
      cursor: pointer;
    }
  }
</style>
