<template>
    <div class="h-input">
      <input type="text" disabled:disabled/>
      <template v-if="error">
         <span class="error-text">{{error}}</span>
      </template>
    </div>
</template>

<script>
export default {
  name: 'input',
  props:{
    disabled:{
      type:boolean,
      default:false,
    },
    error:{
      type:String,
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.h-input{
  display: inline-block;
  >input{
    height: 32px;
  }
  .error-text{
    color: red;
  }
}
</style>