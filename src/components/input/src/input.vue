<template>
    <div class="h-input">
      <textarea v-if="type === 'textarea'">
      </textarea>
      <template v-else>
      <input :type="type" disabled:disabled
        :value='value'
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
      />
      </template>
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
      default:'text', // Number textarea
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
  position: relative;
  width: 100%;
  >input{
    background: #fff;
    border-radius: 2px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #78797d;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 10px;
    width: 100%;
    &:focus{
      border: 1px solid #78797d;
    }
  }
  .error-text{
    color: red;
  }
}
</style>