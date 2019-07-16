<template>
    <button class="h-button" @click="$emit(click)">
      <h-icon v-if="icon && !loading" :name="icon"><h-icon>
         <h-icon v-if="loading" name="loading"><h-icon>
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'button',
  props:{
    icon:String,
    loading:{
      type:Boolean,
      default:false,
    },
    size:{
      type:String,
      default:'normal', //尺寸	String	small, normal, large
      // validator(value){
      //    console.log(value)
      // }
    }	
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>

</style>