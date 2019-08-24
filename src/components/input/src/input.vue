<template>
    <div class="h-input">
      <input type="text" disabled:disabled
      :value=value
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      />
      <template v-if="error">
         <span class="error-text">{{error}}</span>
      </template>
    </div>
</template>

<script>
export default {
  name: 'HInput',
  props:{
    type:{
      type:String,
      default:'text',
    },
    value:{
      type:String,
    },
    disabled:{
      type:Boolean,
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