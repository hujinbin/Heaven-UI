<template>
    <i class="h-icon" :class="`h-icon-${name}`"></i>
</template>

<script>
export default {
  name: 'icon',
  props:{
    name:String,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
  @import '//at.alicdn.com/t/font_1343551_0qtdnpb2xpoi.css'; 
  .h-icon{
    font-style: normal;
  }
</style>