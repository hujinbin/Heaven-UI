<template>
   <label class="h-radio">
        <span class="h-radio-input">
           <span class="h-radio-inner"></span>
           <input type="radio" class="h-radio-original" :value="value" @change="$emit('change',$event.target.value)">
        </span>
       <span class="h-radio-label">
           <slot></slot>
       </span>
   </label>
</template>

<script>
export default {
 name: 'h-radio',
  props:{
    value: Number || String,
  },
}
</script>

<style lang="scss" scoped>

</style>